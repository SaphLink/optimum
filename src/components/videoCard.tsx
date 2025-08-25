'use client'
import { BsFillPlayFill } from "react-icons/bs";
import { modal } from "@/components/modal";
import {MdClose} from 'react-icons/md'

const VideoCard = ({img,videoSrc}:any) => {
    const handleClick = async () => {
      await modal(({ proceed, show }: any) => {
        return (
          <>
            {show && (
              <div className="fixed z-[200] h-[100vh] w-[100vw] bg-[rgba(0,0,0,0.9)] text-white top-0 left-0 flex justify-center items-center">
                <div>
                <MdClose onClick={()=>proceed()} size={40} color='white' className="cursor-pointer mb-[1rem]"/>
                <video
                  controls
                  autoPlay
                  className="max-w-[80vw] max-h-[80vh]"
                  src={videoSrc}
                ></video>
                </div>
              </div>
            )}
          </>
        );
      })
    };
  
    return (
      <div onClick={handleClick} className="relative cursor-pointer w-[300px] h-[380px] rounded-[20px] shadow-sm max-auto flex justify-center items-center overflow-hidden">
        <video
          className="absolute z-[-1] w-[100%] h-[100%] object-cover"
          src={videoSrc}
        ></video>
        <div className="p-[0.4rem] rounded-[50%] bg-pink-800">
          <BsFillPlayFill size={50} color="white" />
        </div>
      </div>
    );
  };

  export default VideoCard