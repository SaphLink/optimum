import React from 'react'

export const SectionTitle = ({children}:any) => {
    return (
        <div className='text-[3rem] md:text-[5rem] font-[500] text-center text-[#35281e]'>{children}</div>
    )
    }

    export const SectionDescription = ({children, className = ""}:any) => {
    return (
        <p className={`text-[#35281e] text-[1rem] md:text-[1.4rem] text-center mb-[1rem] md:mb-[2rem] ${className}`}
        style={{
            fontFamily: 'Raleway'
        }}>{children}</p>
    )
    }

const Section = ({children,last,hero,id, bg2}:any) => {
  return (
    <div
    id={id}
    className="px-[1rem] md:px-[3rem]"
    style={{
            paddingTop: hero ? '15rem' : last ? '3rem' : '8rem',
            paddingBottom: last ? '2rem' : '4rem',
            minHeight: last ? 'auto' : `max(100vh, 800px)`,
            background: bg2 ? 'linear-gradient(to right, #faecdb, #f9efdd)' : 'white'
        }}
    >{children}</div>
  )
}

export default Section