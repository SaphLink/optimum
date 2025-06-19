import { modal } from "@/components/modal";
import React, { useEffect, useRef, useState } from "react";
import { IoCloseSharp } from "react-icons/io5";
import Image from "next/image";

const popupTimeout = 6000;

const Popup = () => {
	const shown = useRef(false);

	useEffect(() => {
		if (!shown.current) {
			shown.current = true;
			console.log(`[Popup] Scheduling popup to show in ${popupTimeout / 1000} seconds`);
			setTimeout(async () => {
				console.log('[Popup] Showing popup now');
				await modal(({ show, proceed }: any) => {
					const [showPopupState, setShowPopup] = useState(false);

					useEffect(() => {
						setShowPopup(show);
					}, [show]);

					return (
						<div className="fixed inset-0 z-[500] flex items-center justify-center pointer-events-none p-4">
							<div
								className={`absolute inset-0 ${
									showPopupState
										? "bg-[rgba(0,0,0,0.3)] backdrop-blur-[3px] pointer-events-auto"
										: "pointer-events-none opacity-0"
								}`}
								onClick={proceed}
							></div>
							<div
								className={`relative ${
									showPopupState
										? "pointer-events-auto"
										: "pointer-events-none hidden"
								}`}
							>
								<button
									className="cursor-pointer absolute -top-4 -right-4 flex items-center justify-center h-[60px] w-[60px] bg-[#f5f6f6] border-[3px] border-[#5b4d42] rounded-full z-[999] hover:bg-[#5b4d42] hover:border-[#f5f6f6] group"
									onClick={() => proceed()}
								>
									<IoCloseSharp className="text-[2rem] text-[#5b4d42] group-hover:text-[#f5f6f6]" />
								</button>
								<div
									className={`relative w-full max-w-[768px] rounded-[2rem] bg-white border-[3px] border-[#35281e] max-h-[80vh] overflow-auto overflow-x-hidden z-[10] ${
										showPopupState
											? ""
											: "hidden"
									}`}
								>
									<div className="flex flex-col-reverse sm:flex-row rounded-[2rem] text-[#35281e] bg-[#f8eedf]">
										<div className="w-full sm:w-1/2">
											<Image
												src="/images/cropped-images/new-ad3.jpg"
												alt="popup"
												width={500}
												height={500}
												className="w-full h-full object-cover rounded-t-[2rem] sm:rounded-t-none sm:rounded-l-[2rem]"
											/>
										</div>

										<div className="w-full sm:w-1/2 flex flex-col items-center justify-center p-4">
											<Image
												src="/images/homepage/Optimum Laser Brown Logo.png"
												alt="logo"
												width={200}
												height={200}
												className="w-[100px] h-[50px] md:w-[200px] md:h-[100px] object-contain"
											/>
											<h1 className="text-xl md:text-2xl lg:text-3xl my-2 md:my-4 text-center">
												FREE Consultation
											</h1>
											<h2 className="text-sm md:text-base lg:text-xl text-center pb-4">
												+ 20% Off Your First Package!
											</h2>
											<form
												action={`https://formsubmit.co/${process.env.NEXT_PUBLIC_EMAIL}`}
												method="POST"
												className="flex w-full flex-col gap-3 items-center"
												style={{ fontFamily: "Raleway" }}
											>
												<input
													name="Coupon Submission"
													className="hidden"
													placeholder="code"
												/>
												<input
													name="name"
													className="w-full md:px-4 px-2 py-2 border-2 border-[#35281e] rounded-md"
													placeholder="YOUR NAME"
												/>
												<input
													name="email"
													className="w-full  md:px-4 px-2  py-2 border-2 border-[#35281e] rounded-md"
													placeholder="YOUR EMAIL"
												/>
												<input
													name="phone number"
													className="w-full  md:px-4 px-2  py-2 border-2 border-[#35281e] rounded-md"
													placeholder="PHONE NUMBER"
												/>
												<button
													type="submit"
													className="font-bold text-sm cursor-pointer w-full md:px-4 px-2  py-2 border-2 border-[#35281e] text-[#35281e] bg-[#f8eedf] rounded-md hover:bg-[#35281e] hover:text-[#f8eedf] transition duration-300"
												>
													Get My Custom Quote!
												</button>
											</form>
										</div>
									</div>
								</div>
							</div>
						</div>
					);
				});
			}, popupTimeout);
		}
	}, []);

	return null;
};

export default Popup;
