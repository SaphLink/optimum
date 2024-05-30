import React from 'react'

const FlowerSection = ({children}:any) => {
  return (
    <div
     className='bg-[#35281e] relative py-[2rem] px-[4rem] text-white min-h-[300px] flex justify-center items-center text-[1.2rem]'
        style={{
            fontFamily: 'Raleway'

        }}
    > 
        <img src="/images/flowers/Large_pink_leaf.png" alt="pink leaf img" className='absolute w-[200px] md:w-[300px] bottom-[-100px] md:bottom-[-150px] right-[-120px] md:right-[-150px] rotate-[-10deg] object-contain z-[111] md:z-10'/>
        <img src="/images/flowers/Medium_pink_leaf.png" alt="pink leaf img" className='absolute w-[200px] md:w-[300px] top-[-20px] md:top-[-50px] left-[-100px] md:left-[-130px] rotate-[-20deg] object-contain z-[111] md:z-10'/>
        <img src="/images/flowers/small pink leaf.png" alt="pink leaf img" className='absolute w-[50px] md:w-[100px] bottom-[-20px] md:bottom-[-50px] right-[70px] md:right-[150px] object-contain z-[111] md:z-10'/>
        <div
         className='max-w-[min(90%,1000px)]'
        >
        {children}
        </div>
        </div>
  )
}

export default FlowerSection