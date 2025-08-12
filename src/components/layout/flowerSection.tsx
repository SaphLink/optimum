import React, { useEffect, useRef, useState } from 'react'
import MapWidget from '../MapWidget'
import CustomerSatisfaction from '../CustomerSatisfaction'

const FlowerSection = ({children, showMap = false, hideSmallLeafMobile = false, hideSmallLeaf = false, compact = false, shrinkLeftLeaf = false, shrinkRightLeafDesktop = false, shrinkLargeRightLeafDesktop = false, nudgeLargeRightLeafDesktop = false, mobileSatisfaction = false, autoHideOverlappingLeaf = false}: any) => {
  const containerClasses = compact
    ? 'bg-[#35281e] relative py-[0.75rem] md:py-[1rem] px-[4rem] text-white min-h-[180px] flex justify-center items-center text-[1.2rem]'
    : 'bg-[#35281e] relative py-[2rem] px-[4rem] text-white min-h-[300px] flex justify-center items-center text-[1.2rem]'

  // Desktop-only computed classes to avoid nested template segments in JSX
  const largeRightLeafDesktopWidth = shrinkLargeRightLeafDesktop ? 'md:w-[240px]' : 'md:w-[300px]'
  const largeRightLeafDesktopRight = nudgeLargeRightLeafDesktop ? 'md:right-[-204px]' : 'md:right-[-150px]'
  const smallRightLeafDesktopWidth = shrinkRightLeafDesktop ? 'md:w-[50px]' : 'md:w-[100px]'

  // Refs for overlap detection
  const largeRightLeafRef = useRef<HTMLImageElement | null>(null)
  const contentRef = useRef<HTMLDivElement | null>(null)
  const [hideLargeLeaf, setHideLargeLeaf] = useState(false)

  useEffect(() => {
    if (!autoHideOverlappingLeaf) return

    const checkOverlap = () => {
      // Only apply on desktop
      const isDesktop = typeof window !== 'undefined' && window.innerWidth >= 768
      if (!isDesktop) {
        setHideLargeLeaf(false)
        return
      }
      const leaf = largeRightLeafRef.current
      const content = contentRef.current
      if (!leaf || !content) return
      const lr = leaf.getBoundingClientRect()
      const cr = content.getBoundingClientRect()
      const overlaps = !(lr.right <= cr.left || lr.left >= cr.right || lr.bottom <= cr.top || lr.top >= cr.bottom)
      setHideLargeLeaf(overlaps)
    }

    checkOverlap()
    window.addEventListener('resize', checkOverlap)
    window.addEventListener('scroll', checkOverlap, { passive: true })
    const id = window.setInterval(checkOverlap, 500)
    return () => {
      window.removeEventListener('resize', checkOverlap)
      window.removeEventListener('scroll', checkOverlap)
      window.clearInterval(id)
    }
  }, [autoHideOverlappingLeaf])

  return (
    <div
     className={containerClasses}
        style={{
            fontFamily: 'Raleway',
            zIndex: 20
        }}
    > 
        <img ref={largeRightLeafRef} src="/images/flowers/Large_pink_leaf.png" alt="pink leaf img" className={`absolute w-[170px] bottom-[-100px] md:bottom-[-150px] right-[-120px] rotate-[-10deg] object-contain z-[11] md:z-10 ${largeRightLeafDesktopWidth} ${largeRightLeafDesktopRight}`} style={{ opacity: hideLargeLeaf ? 0 : 1, transition: 'opacity 150ms ease' }}/>
        <img src="/images/flowers/Medium_pink_leaf.png" alt="pink leaf img" className={`absolute ${shrinkLeftLeaf ? 'w-[120px] left-[-60px]' : 'w-[200px] left-[-100px]'} md:w-[300px] top-[-20px] md:top-[-50px] md:left-[-130px] rotate-[-20deg] object-contain z-[11] md:z-10`}/>
        <img src="/images/flowers/small pink leaf.png" alt="pink leaf img" className={`absolute w-[50px] bottom-[-20px] md:bottom-[-50px] right-[70px] md:right-[150px] object-contain z-[11] md:z-10 ${smallRightLeafDesktopWidth} ${hideSmallLeaf ? 'hidden' : hideSmallLeafMobile ? 'hidden md:block' : ''}`}/>

        {showMap ? (
          <div className='flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 w-full max-w-[1400px]'>
            {/* Left cluster: stars/avatars stacked above Google logo on both mobile and desktop */}
            <div className='flex-shrink-0 order-1 md:order-1'>
              {mobileSatisfaction ? (
                <>
                  <div className="md:hidden flex flex-col items-center gap-3">
                    <CustomerSatisfaction />
                    <img
                      src="/images/Google-Review-Logo.png"
                      alt="Google Reviews"
                      className="w-[120px] h-auto object-contain"
                    />
                  </div>
                  <div className="hidden md:flex flex-col items-center gap-3">
                    <CustomerSatisfaction />
                    <img
                      src="/images/Google-Review-Logo.png"
                      alt="Google Reviews"
                      className="w-[150px] h-auto object-contain"
                    />
                  </div>
                </>
              ) : (
                <img
                  src="/images/Google-Review-Logo.png"
                  alt="Google Reviews"
                  className="w-[120px] md:w-[150px] h-auto object-contain"
                />
              )}
            </div>

            <div className='flex-1 w-full md:max-w-[min(90%,1000px)] order-2 md:order-3 text-center md:text-left'>
              <div ref={contentRef} className="md:block break-words w-full">
                {children}
              </div>
            </div>

            <div className='flex-shrink-0 order-3 md:order-2'>
              <MapWidget width="220px" height="180px" />
            </div>
          </div>
        ) : (
          <div className='w-full px-[20px] md:px-[200px]'>
            {/* Customer Satisfaction and Google Reviews Logo Group */}
            <div className='flex flex-col md:flex-row items-center md:items-end justify-center md:justify-start mb-8 gap-8'>
              <div className="order-1 md:order-2">
                <CustomerSatisfaction />
              </div>
              <img
                src="/images/Google-Review-Logo.png"
                alt="Google Reviews"
                className="w-[150px] md:w-[150px] h-auto object-contain order-2 md:order-1"
              />
            </div>
            <div ref={contentRef} className="text-center md:text-left">
              {children}
            </div>
          </div>
        )}
        </div>
  )
}

export default FlowerSection