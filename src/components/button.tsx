'use client'
import Link from "next/link";
import React, { CSSProperties, MouseEventHandler } from "react";

interface CustomButtonProps {
    children: React.ReactNode;
  onClick?: MouseEventHandler;
  style?: CSSProperties;
  center?: boolean;
  submit?: boolean;
  type?: "primary" | "secondary" | "tertiary" | undefined;
  className?: string;
  href?: string;
}

const buttonTypes = {
  primary: {
    classname:
      "custom-button duration-300 text-[#35281e] bg-white hover:translate-y-[-2px] py-[0.7rem] px-[3rem] rounded-[1rem] w-fit text-[1.3rem] tracking-[0.2rem] ",
    style: {
      fontFamily: "RaleWay",
      fontWeight: "bold",
    },
  },
  secondary : {
    classname: "font-bold text-[1.4rem] py-[0.7rem] px-[5rem] shadow-md bg-gradient-to-r from-[#faebd4] to-[#f6edde] rounded-[1rem]"
  },
    tertiary : {
    classname: "font-bold text-[1rem] py-[0.5rem] px-[3rem] shadow-md bg-gradient-to-r from-[#faebd4] to-[#f6edde] rounded-[2rem]"
    }
};

const CustomButton: React.FC<CustomButtonProps> = ({ children,center,href, onClick, style, className, type,submit }) => {
  // @ts-ignore
  const btnClass = type ? buttonTypes[type]?.classname || "" : "";
  // @ts-ignore
  const btnStyle = type ? buttonTypes[type]?.style || {} : {};


  if(type === 'primary'){
    center = true
  }

  const Component = href ? Link : (props: any) => <button {...props}>{props.children}</button>;

  return (
    <div
        className={`custom-button w-fit text-center ${center ? "mx-auto" : ""}`}
    >
    <Component href={href || ""} onClick={onClick} style={{ ...btnStyle, 
         ...(style || {}),
          ...(href ? { scrollBehavior: 'smooth' } : {})
         }} className={btnClass + " " + className}
      type={submit ? "submit" : "button"}
         >
      {children}
    </Component>
    </div>
  );
};

export default CustomButton;
