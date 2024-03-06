"use client";
import React from "react";
import {HiChevronUp} from 'react-icons/hi'

const CollapseSection = ({ children,title }: any) => {
  const [expanded, setExpanded] = React.useState(false);

  return (
    <div
     className="max-w-[1000px] w-full mx-auto mb-[2rem]"
    >
      <div
      className="w-full py-[1rem] px-[2rem] bg-[#f9eedc] rounded-[10px] text-[1.3rem] flex justify-between items-center cursor-pointer font-bold"
      style={{
        fontFamily: "Raleway",
      }}
      onClick={() => {
          setExpanded((prev) => !prev);
        }}
      >
        <div>
        {title}
        </div>
        <HiChevronUp className={`${!expanded ? 'rotate-180' : ''}`} />
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateRows: expanded ? "1fr" : "0fr",
          overflow: "hidden",
          transition: "0.2s",
          borderBottomLeftRadius: "10px",
          borderBottomRightRadius: "10px",

        }}
      >
        <div className="min-h-[0] text-[1.2rem] text-[#35281e] bg-[#fdfbf6] ">
            <div
             className="p-[2rem] text-left flex flex-col gap-5"
             style={{
                fontFamily: "Raleway",
              }}
            >
            {children}
            </div>
            </div>
      </div>
    </div>
  );
};

export default CollapseSection;
