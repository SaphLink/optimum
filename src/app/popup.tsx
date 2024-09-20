import React, { useState, useEffect } from "react";

const Popup = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Automatically open the popup when the component loads
    setIsOpen(true);
  }, []);

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      {isOpen && (
        <div className="fixed duration-300 top-0 left-0 w-full h-full z-[500] bg-[rgba(0,0,0,0.3)] backdrop-blur-[3px] flex items-center justify-center">
          <div className="relative bg-white border-[3px] border-[#35281e] md:min-w-[500px] w-[90%] md:max-w-[600px] duration-300 translate-y-[0] opacity-1">
            <button
              onClick={handleClose}
              className="cursor-pointer absolute top-[0] translate-x-[50%] translate-y-[-50%] flex items-center justify-center right-[0]  h-[20px] w-[20px] bg-[#f5f6f6] border-[1px] border-[#5b4d42] rounded-[50%] z-[10]"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <img
               src="../images/cropped-images/new-sale.jpg"
              alt="Popup Image"
              className="w-[600px] h-auto rounded-lg"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Popup;
