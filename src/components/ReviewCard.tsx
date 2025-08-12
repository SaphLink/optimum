import React from "react";
import { AiFillStar } from "react-icons/ai";

const ReviewCard = ({ img, name, time, children, compact = false }: any) => {
  return (
    <div
              className={`review-card rounded-[10px] bg-white ${
          compact 
            ? "p-[1.25rem] w-[100%] min-w-[260px] max-w-[260px]" 
            : "p-[2rem] w-[30%] min-w-[100%] md:max-w-[500px] md:min-w-[500px]"
        }`}
      style={{
        boxShadow: "0px 0px 30px rgba(0,0,0,0.1)",
        fontFamily: "Raleway",
      }}
    >
      <div className={`flex items-center justify-between gap-[0.75rem] ${compact ? "mb-[0.5rem]" : "mb-[1rem]"}`}>
        <img src={img} alt="profile-picture" className={`bg-gray-500 rounded-[50%] object-cover ${
          compact ? "h-[36px] w-[36px]" : "h-[50px] w-[50px] md:h-[60px] md:w-[60px]"
        }`} />
        <div className="flex-1">
          <h1 className={`font-bold ${compact ? "text-[0.9rem]" : "text-[1rem] md:text-[1.2rem]"}`}>{name}</h1>
          <div className={`text-gray-500 ${compact ? "text-[0.7rem]" : "text-[0.8rem] md:text-[1rem]"}`}>{time}</div>
        </div>
        <img className={`${compact ? "w-[25px]" : "w-[30px] md:w-[50px]"}`} src="/icons/google.svg" alt="google" />
      </div>
      <div className={`flex justify-center items-center gap-[0.4rem] ${compact ? "mb-[0.6rem]" : "mb-[1rem]"}`}>
        <AiFillStar size={compact ? 18 : 28} color="#ffd700" />
        <AiFillStar size={compact ? 18 : 28} color="#ffd700" />
        <AiFillStar size={compact ? 18 : 28} color="#ffd700" />
        <AiFillStar size={compact ? 18 : 28} color="#ffd700" />
        <AiFillStar size={compact ? 18 : 28} color="#ffd700" />
      </div>
      <div className={`${compact ? "text-[0.9rem] leading-snug" : "text-[1.05rem] md:text-[1.25rem] leading-snug"}`}>{children}</div>
    </div>
  );
};

export default ReviewCard;
