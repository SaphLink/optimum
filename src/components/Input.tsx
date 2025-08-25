import React from 'react'


export const DoubleInput = (props:any) => {
    return <div
        className='w-full max-w-[1000px] flex-wrap  mx-auto flex justify-between items-center gap-[1rem]'
    >
        {props.children}
    </div>
}

const Input = (props:any) => {

    let Component;
    switch (props.type) {
        case 'textarea':
            Component = TextArea
            break;
    
        default:
            Component = DefaultInput
            break;
    }

  return (
        <Component  {...props}/>
  )
}


//~======Component Types=================
const DefaultInput = (props:any) => {
    return <input  
    className={`bg-[#f9eedc] text-black text-[1.3rem] px-[2rem] py-[1rem]  placeholder-black outline-none ${props.rounded ? 'rounded-[10px]' : ''} ${props.half ? 'flex-1 max-w-[100%]' : 'block w-full mx-auto max-w-[1000px]'}`}
    style={{
        fontFamily: "Raleway",
        
    }}
{...props} 
/>
}

const TextArea = (props:any) => {
    return <textarea  
    className={`bg-[#f9eedc] min-h-[200px] text-black text-[1.3rem] px-[2rem] py-[1rem]  placeholder-black outline-none ${props.rounded ? 'rounded-[10px]' : ''} ${props.half ? 'flex-1 max-w-[100%]' : 'block w-full mx-auto max-w-[1000px]'}`}
    style={{
        fontFamily: "Raleway",
        
    }}
{...props} 
/>
}

export default Input