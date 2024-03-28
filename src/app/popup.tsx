import { modal } from "@/components/modal";
import React, { useEffect, useRef, useState } from "react";
import { IoCloseSharp } from "react-icons/io5";

const popupTimeout = 0;

const Popup = () => {
  const shown = useRef(false);

  const showPopup = () => {
    shown.current = true;
    setTimeout(async () => {
      await modal(({ show, proceed }: any) => {
        const [showPopupState, setShowPopup] = useState(false);
        useEffect(() => {
          setTimeout(() => {
            setShowPopup(show);
          }, 100);
        }, [show]);

        return (
          <>
            <div
              className={`fixed duration-300 top-0 left-0 w-full h-full z-[500] ${
                showPopupState ? "bg-[rgba(0,0,0,0.3)] backdrop-blur-[3px]" : ""
              } flex items-center justify-center`}
            >
              <div
                className={`relative rounded-[2rem] bg-white border-[3px] border-[#35281e] md:min-w-[500px] w-[90%] md:max-w-[55%] duration-300 ${
                  showPopupState
                    ? "translate-y-[0] opacity-1"
                    : "translate-y-[10px] opacity-0"
                }`}
                // style={{ padding: "20px" }}
              >
                <div
                  className="cursor-pointer absolute top-[0] translate-x-[50%] translate-y-[-50%] flex items-center justify-center right-[0]  h-[50px] w-[50px] bg-[#f5f6f6] border-[3px] border-[#5b4d42] rounded-[50%] z-[10]"
                  onClick={() => {
                    proceed();
                  }}
                >
                  <IoCloseSharp className="text-[2rem] text-[#c5ba9d]" />
                </div>
                <div
                  className="md:flex justify-between rounded-t-[2rem] text-[#35281e] bg-[#f8eedf]"
                  style={{
                    clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 72%)",
                    overflowX: "visible",
                  }}
                >
                  <div className="cursor-pointer absolute top-[0] translate-x-[50%] translate-y-[-50%] flex items-center justify-center right-[0]  h-[70px] w-[70px] bg-[#b4a794] rounded-[50%]"></div>
                  <div className="p-[1rem] text-center">
                    <div
                      className="border-t-[2px] border-b-[2px] border-[#35281e] py-[0.3rem] sm:py-[0.7rem] text-[1.2rem] px-[3rem]"
                      style={{
                        fontFamily: "Broadway",
                      }}
                    >
                      OPTIMUM LASER
                    </div>
                    <div className="flex justify-center text-nowrap font-bold  text-[5rem] sm:text-[3rem] lg:text-[5rem]  	">
                      15% OFF
                    </div>
                    <div className="mx-auto w-[80px] h-[2px] bg-[#35281e] mb-[1rem]"></div>
                    <div
                      className="text-[1.2rem]"
                      style={{
                        fontWeight: 500,
                        fontFamily: "Raleway",
                      }}
                    >
                      FOR FIRST TIME CUSTOMERS
                    </div>
                  </div>
                  <div className="md:pt-[3rem] md:max-w-[300px] flex justify-center md:justify-end items-end">
                    <img
                      alt="popup-image"
                      className="translate-x-[1rem] max-h-[200px] md:max-h-none"
                      src="../images/pop-up/Pop up.png"
                    />
                  </div>
                </div>
                <form
                  action={`https://formsubmit.co/${process.env.NEXT_PUBLIC_EMAIL}`}
                  method="POST"
                  className="flex w-full  flex-col gap-x-3 items-center sm:flex-row p-4"
                  style={{ fontFamily: "Raleway" }}
                >
                  <input
                    name="Coupon Submission"
                    className="hidden"
                    placeholder="code"
                  />
                  <input
                    name="name"
                    className="w-full px-4 py-2 sm:w-1/4 border-2 border-[#35281e] rounded-[4px] mb-4"
                    placeholder="YOUR NAME"
                  />
                  <input
                    name="email"
                    className="w-full px-4 py-2 sm:w-1/4 border-2 border-[#35281e] rounded-[4px] mb-4"
                    placeholder="YOUR EMAIL"
                  />
                  <input
                    name="phone number"
                    className="w-full px-4 py-2 sm:w-1/4 border-2 border-[#35281e] rounded-[4px] mb-4"
                    placeholder="PHONE NUMBER"
                  />
                  <button
                    type="submit"
                    className="font-bold sm:text-sm cursor-pointer w-full px-4 py-2 sm:w-1/4 border-2 border-[#35281e] mb-4 text-[#35281e] bg-[#f8eedf] rounded-[4px]"
                  >
                    GET YOUR CODE!
                  </button>
                </form>
              </div>
            </div>
          </>
        );
      });
    }, popupTimeout);
  };

  useEffect(() => {
    !shown.current && showPopup();
  }, []);

  return <div></div>;
};

export default Popup;
