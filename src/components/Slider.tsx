'use client'
import React, { useEffect, useRef, useCallback } from 'react'
import {FaChevronRight} from 'react-icons/fa'

export const SliderItem = ({children} : any) => {
    return (
        <div className="slider-item flex justify-center items-center gap-[1rem] p-[2rem]">
        {children}
        </div>
    )
    }

const Slider = ({children,itemWidth = 600, compact = false, itemsPerSlideDesktop} : any) => {
    const [currentSlide, setCurrentSlide] = React.useState(0)
    const [childGroups, setChildGroups] = React.useState([] as any)
    const sliderInnerContainer = useRef<HTMLDivElement>()
    const sliderOuterContainer = useRef<HTMLDivElement>()

    const setupSlider = useCallback(()=>{
        if(sliderOuterContainer.current && sliderInnerContainer.current){
            const containerWidth = sliderOuterContainer.current.clientWidth
            const baseFit = Math.max(1,Math.floor(containerWidth / itemWidth))
            const childrenCanFit = itemsPerSlideDesktop && containerWidth >= 1024 ? itemsPerSlideDesktop : baseFit
            const childrenGroups = children.reduce((acc:any,child:any,index:number)=>{
                const groupIndex = Math.floor(index / childrenCanFit)
                if(!acc[groupIndex]){
                    acc[groupIndex] = []
                }
                acc[groupIndex].push(child)
                return acc
            },[] as any)

            setChildGroups(childrenGroups)
            sliderInnerContainer.current.style.width = `${childrenGroups.length * containerWidth}px`
            setCurrentSlide(0)
        }
    }, [children, itemWidth, itemsPerSlideDesktop])

    useEffect(()=>{
        setupSlider()
        window.addEventListener('resize',setupSlider)
        return ()=>{
            window.removeEventListener('resize',setupSlider)
        }
    },[setupSlider])

    useEffect(()=>{

        if(!sliderInnerContainer.current || !sliderOuterContainer.current) return
        sliderInnerContainer.current.style.transform = `translateX(-${currentSlide * sliderOuterContainer.current.clientWidth}px)`
        },[currentSlide])

    useEffect(() => {
      if (childGroups.length <= 1) return;
      const id = window.setInterval(() => {
        setCurrentSlide(prev => (prev + 1) % childGroups.length);
      }, 3000);
      return () => window.clearInterval(id);
    }, [childGroups.length]);
 
   return (
    <div 
     className={`${compact ? 'mb-[0.25rem]' : 'mb-[4rem]'} relative`}
    >
        <div
            onClick={()=>{
                if(currentSlide > 0){
                    setCurrentSlide(currentSlide - 1)
                }
            
            }}
            className='absolute z-[999] pointer-events-auto top-[50%] translate-y-[-50%] left-4 md:left-6 w-[48px] h-[48px] md:w-[56px] md:h-[56px] flex justify-center items-center bg-[rgba(0,0,0,0.12)] hover:bg-[rgba(0,0,0,0.2)] cursor-pointer rounded-[50%]'
        >
            <FaChevronRight className='rotate-180' />
        </div>
        <div 
        onClick={()=>{
            if(currentSlide < childGroups.length - 1){
                setCurrentSlide(currentSlide + 1)
            }
        }}
        className='absolute z-[999] pointer-events-auto top-[50%] translate-y-[-50%] right-4 md:right-6 w-[48px] h-[48px] md:w-[56px] md:h-[56px] flex justify-center items-center bg-[rgba(0,0,0,0.12)] hover:bg-[rgba(0,0,0,0.2)] cursor-pointer rounded-[50%]'
        >
            <FaChevronRight />
        </div>

    <div
    // @ts-ignore
    ref={sliderOuterContainer}
    className='overflow-hidden mx-auto relative z-[10]'
        // className='overflow-x-scroll'
    >
    <div
    // @ts-ignore
    ref={sliderInnerContainer}
    className="flex justify-start items-stretch duration-300"
    >
        {
            childGroups.map((group : any, index : number)=>(
                <div
                key={index}
                style={{
                    width: sliderOuterContainer.current ? sliderOuterContainer.current.clientWidth+'px' : '100%'
                }}
                className={`flex justify-center items-start gap-[1rem] p-[2rem] duration-300`}
                >
                    {group.map((child : any, index : number)=>(
                        <div
                        key={index}
                        className='flex justify-center items-stretch gap-[2rem] md:p-[2rem] duration-300'
                        >
                            {child}
                        </div>
                    ))}
                </div>
            ))
        }
    </div>
    </div>
    <div
     className={`flex justify-center items-center gap-[2px] ${compact ? 'mt-[0.1rem]' : 'mt-[2rem]'}`}
    >
        {
            Array.from({length: childGroups.length}).map((_,index)=>(
                <div
                onClick={()=>setCurrentSlide(index)}
                key={index}
                className={`cursor-pointer w-[50px] h-[8px] ${currentSlide === index ?  'bg-[rgba(0,0,0,0.5)]' : 'bg-[rgba(0,0,0,0.2)]'}`}
                ></div>
            ))
        }
    </div>
    </div>
  )
}

export default Slider