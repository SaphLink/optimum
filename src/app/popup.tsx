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
                className={`relative rounded-[2rem] bg-white border-[3px] border-[#35281e] md:min-w-[500px] max-w-[calc(100vw-32px)] duration-300 ${
                  showPopupState
                    ? "translate-y-[0] opacity-1"
                    : "translate-y-[10px] opacity-0"
                }`}
                style={{ padding: "20px" }}
              >
                <div
                  className="absolute -top-4 -right-4 cursor-pointer h-12 w-12 flex items-center justify-center bg-[#f5f6f6] border-[3px] border-[#5b4d42] rounded-full z-[10]"
                  onClick={() => {
                    proceed();
                  }}
                >
                  <IoCloseSharp className="text-3xl text-[#c5ba9d]" />
                </div>
                <div
                  className="p-4 mb-8 border-t-2 border-b-2 border-[#35281e] py-3 text-2xl px-8 font-bold"
                  style={{ fontFamily: "Broadway" }}
                >
                  OPTIMUM LASER
                </div>
                <div className="flex justify-center items-center font-bold text-7xl mb-8">
                  15% OFF
                </div>
                <div className="mx-auto w-24 h-2 bg-[#35281e] mb-4"></div>
                <div className="text-2xl font-semibold text-center mb-8">
                  FOR FIRST TIME CUSTOMERS
                </div>
                <form
                  action={`https://formsubmit.co/${process.env.NEXT_PUBLIC_EMAIL}`}
                  method="POST"
                  className="flex flex-wrap justify-evenly items-center gap-4"
                  style={{ fontFamily: "Raleway" }}
                >
                  <input
                    name="Coupon Submission"
                    className="hidden"
                    placeholder="code"
                  />
                  <input
                    name="name"
                    className="px-4 py-2 max-w-[200px] border-2 border-[#35281e] rounded-[4px] mb-4"
                    placeholder="YOUR NAME"
                  />
                  <input
                    name="email"
                    className="px-4 py-2 max-w-[200px] border-2 border-[#35281e] rounded-[4px] mb-4"
                    placeholder="YOUR EMAIL"
                  />
                  <input
                    name="phone number"
                    className="px-4 py-2 max-w-[200px] border-2 border-[#35281e] rounded-[4px] mb-4"
                    placeholder="PHONE NUMBER"
                  />
                  <button
                    type="submit"
                    className="cursor-pointer px-4 py-2 max-w-[200px] border-2 border-[#35281e] mb-4 text-[#35281e] bg-[#f8eedf] rounded-[4px]"
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
