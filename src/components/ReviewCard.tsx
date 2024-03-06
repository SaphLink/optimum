import React from "react";
import { AiFillStar } from "react-icons/ai";

const ReviewCard = ({ img, name, time, children }: any) => {
  return (
    <div
      className="review-card p-[2rem] rounded-[10px] w-[30%] min-w-[100%] md:max-w-[500px] md:min-w-[500px] bg-white"
      style={{
        boxShadow: "0px 0px 30px rgba(0,0,0,0.1)",
        fontFamily: "Raleway",
      }}
    >
      <div className="flex mb-[2rem] items-center justify-between gap-[1rem]">
        <img src={img} alt="profile-picture" className="bg-gray-500 h-[50px] w-[50px] md:h-[70px] md:w-[70px] rounded-[50%] object-cover" />
        <div className="flex-1">
          <h1 className="font-bold text-[1rem] md:text-[1.2rem]">{name}</h1>
          <div className="text-[0.8rem] md:text-[1rem] text- text-gray-500">{time}</div>
        </div>
        <img className="w-[30px] md:w-[50px]" src="/icons/google.svg" alt="google" />
      </div>
      <div className="flex justify-center items-center gap-[0.5rem] mb-[2rem]">
        <AiFillStar size={35} color="#ffd700" />
        <AiFillStar size={35} color="#ffd700" />
        <AiFillStar size={35} color="#ffd700" />
        <AiFillStar size={35} color="#ffd700" />
        <AiFillStar size={35} color="#ffd700" />
      </div>
      <div className="text-[1rem] md:text-[1.4rem]">{children}</div>
    </div>
  );
};

export default ReviewCard;
