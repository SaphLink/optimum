import { modal } from "@/components/modal";
import React, { useEffect, useRef, useState } from "react";
import { IoCloseSharp } from "react-icons/io5";
import priceTable from "../../public/images/cropped-images/popup-deal.png";
import Image from "next/image";

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
					}, 10000);
				}, [show]);

				return (
					<>
						<div
							className={`fixed duration-300 top-0 left-0 w-full h-full z-[500] ${
								showPopupState ? "bg-[rgba(0,0,0,0.3)] backdrop-blur-[3px]" : ""
							} flex items-center justify-center`}
						>
							<div
								className={`relative rounded-[2rem] bg-white border-[3px] border-[#35281e] md:min-w-[500px] w-[90%] md:max-w-[768px] duration-300 ${
									showPopupState
										? "translate-y-[0] opacity-1"
										: "translate-y-[10px] opacity-0"
								}`}
							>
								<div
									className="cursor-pointer absolute top-[0] translate-x-[50%] translate-y-[-50%] flex items-center justify-center right-[0]  h-[50px] w-[50px] bg-[#f5f6f6] border-[3px] border-[#5b4d42] rounded-[50%] z-[10]"
									onClick={() => {
										proceed();
									}}
								>
									<IoCloseSharp className="text-[2rem] text-[#c5ba9d]" />
								</div>

								<div className="flex flex-col sm:flex-row rounded-[2rem] text-[#35281e] bg-[#f8eedf] overflow-hidden">
									<div className="w-full">
										<Image
											src="/images/cropped-images/new-ad3.jpg"
											alt="popup"
											width={500}
											height={500}
											className="w-full h-full object-cover "
										/>
									</div>

									<div className="w-full flex flex-col items-center justify-center p-4">
										<Image
											src="/images/homepage/Optimum Laser Brown Logo.png"
											alt="logo"
											width={200}
											height={200}
											className="sm:w-[200px] sm:h-[100px] w-[100px] h-[50px] object-contain"
										/>
										<h1 className="text-3xl m-4">FREE Consultation</h1>
										<h2 className="text-xl pb-8">
											+ 20% Off Your First Package
										</h2>
										<form
											action={`https://formsubmit.co/${process.env.NEXT_PUBLIC_EMAIL}`}
											method="POST"
											className="flex w-full  flex-col gap-x-3 items-center p-4"
											style={{ fontFamily: "Raleway" }}
										>
											<input
												name="Coupon Submission"
												className="hidden"
												placeholder="code"
											/>
											<input
												name="name"
												className="w-full px-4 py-2  border-2 border-[#35281e] rounded-[4px] mb-4"
												placeholder="YOUR NAME"
											/>
											<input
												name="email"
												className="w-full px-4 py-2 border-2 border-[#35281e] rounded-[4px] mb-4"
												placeholder="YOUR EMAIL"
											/>
											<input
												name="phone number"
												className="w-full px-4 py-2 border-2 border-[#35281e] rounded-[4px] mb-4"
												placeholder="PHONE NUMBER"
											/>
											<button
												type="submit"
												className="font-bold sm:text-sm cursor-pointer w-full px-4 py-2  border-2 border-[#35281e] mb-4 text-[#35281e] bg-[#f8eedf] rounded-[4px] hover:bg-[#35281e] hover:text-[#f8eedf] transition duration-300"
											>
												Get My Custom Quote!
											</button>
										</form>
									</div>
								</div>
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
