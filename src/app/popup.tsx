import { modal } from "@/components/modal";
import Image from "next/image";
import { IoCloseSharp } from "react-icons/io5";
import React, { useEffect, useRef, useState } from "react";

const popupTimeout = 6000;

const offers = [
	{ price: "$35", label: "Underarm Laser Hair Removal" },
	{ price: "$99", label: "Brazilian Laser Hair Removal" },
];

const Popup = () => {
	const shown = useRef(false);

	useEffect(() => {
		if (shown.current) return;

		shown.current = true;
		setTimeout(async () => {
			await modal(({ show, proceed }: any) => {
				const [showPopupState, setShowPopup] = useState(false);
				const [isSubmitting, setIsSubmitting] = useState(false);
				const [submissionError, setSubmissionError] = useState("");

				const submitLead = async (event: React.FormEvent<HTMLFormElement>) => {
					event.preventDefault();
					const form = event.currentTarget;
					if (!form.reportValidity()) return;

					setIsSubmitting(true);
					setSubmissionError("");
					try {
						const response = await fetch("/api/lead?form=discount-popup", {
							method: "POST",
							body: new FormData(form),
						});
						if (!response.ok) throw new Error("Lead delivery failed");
						window.location.assign("/thank-you?form=discount-popup");
					} catch {
						setSubmissionError("We could not send your request. Please call us at 516-495-4908.");
						setIsSubmitting(false);
					}
				};

				useEffect(() => {
					setShowPopup(show);
				}, [show]);

				return (
					<div className="fixed inset-0 z-[500] flex items-center justify-center p-3 sm:p-6">
						<div
							className={`absolute inset-0 ${showPopupState ? "bg-[#35281e]/45 backdrop-blur-[2px]" : "pointer-events-none opacity-0"}`}
							onClick={proceed}
						/>
						<section
							aria-labelledby="new-client-special-title"
							aria-modal="true"
							className={`relative max-h-[94vh] w-full max-w-2xl overflow-y-auto rounded-[2rem] border border-[#eadbcd] bg-[#fffdfb] text-[#6e3e23] shadow-2xl transition ${showPopupState ? "pointer-events-auto" : "pointer-events-none opacity-0"}`}
							role="dialog"
						>
							<button
								aria-label="Close new client offer"
								className="absolute right-3 top-3 z-10 flex h-12 w-12 items-center justify-center rounded-full border-2 border-[#eadbcd] bg-white text-[#6e3e23] focus:outline-none focus:ring-4 focus:ring-[#d8b18c]"
								onClick={proceed}
								type="button"
							>
								<IoCloseSharp className="text-3xl" />
							</button>

							<div className="p-5 sm:p-8 lg:p-12">
								<Image alt="Optimum Laser" className="mx-auto h-auto w-40 object-contain sm:w-52" height={120} priority src="/images/homepage/Optimum Laser Brown Logo.png" width={260} />
								<h1 className="mt-5 text-center text-xl font-semibold tracking-[0.32em] sm:text-2xl" id="new-client-special-title">NEW CLIENT SPECIAL</h1>
								<div className="mx-auto my-4 h-px w-full max-w-sm bg-[#eadbcd]" />

								<div className="divide-y divide-[#eadbcd]">
									{offers.map((offer) => (
										<article className="grid grid-cols-[4rem_1fr] items-center gap-3 py-4 sm:grid-cols-[7rem_1fr] sm:gap-5" key={offer.price}>
											<p className="font-serif text-5xl font-semibold sm:text-6xl">{offer.price}</p>
											<p className="text-lg font-medium leading-snug sm:text-2xl">{offer.label}</p>
										</article>
									))}
								</div>

								<p className="my-5 border-y border-[#eadbcd] py-4 text-center font-serif text-lg sm:text-xl">Your personalized laser journey starts here.</p>

								<form className="grid gap-3" onSubmit={submitLead}>
									<input name="Coupon Submission" type="hidden" value="New Client Special" />
									<label className="sr-only" htmlFor="popup-name">Name</label>
									<input className="min-h-14 rounded-xl border border-[#e1c9b5] bg-white px-4 text-lg placeholder:text-[#9b765c] focus:outline-none focus:ring-4 focus:ring-[#d8b18c]/50" id="popup-name" name="name" placeholder="Name" required />
									<label className="sr-only" htmlFor="popup-email">Email</label>
									<input className="min-h-14 rounded-xl border border-[#e1c9b5] bg-white px-4 text-lg placeholder:text-[#9b765c] focus:outline-none focus:ring-4 focus:ring-[#d8b18c]/50" id="popup-email" name="email" placeholder="Email" required type="email" />
									<label className="sr-only" htmlFor="popup-phone">Phone</label>
									<input className="min-h-14 rounded-xl border border-[#e1c9b5] bg-white px-4 text-lg placeholder:text-[#9b765c] focus:outline-none focus:ring-4 focus:ring-[#d8b18c]/50" id="popup-phone" name="phone number" placeholder="Phone" required type="tel" />
									<button className="min-h-14 rounded-xl bg-[#ecd0ad] px-5 py-3 text-lg font-bold text-[#6e3e23] transition hover:bg-[#dfb98d] focus:outline-none focus:ring-4 focus:ring-[#6e3e23]/40 disabled:cursor-wait disabled:opacity-70" disabled={isSubmitting} type="submit">
										{isSubmitting ? "Sending..." : "Claim My New Client Offer"}
									</button>
									{submissionError && <p className="text-center text-sm font-medium text-red-700" role="alert">{submissionError}</p>}
									<p className="text-center text-sm font-medium">Safe on all skin types. FDA-approved technology.</p>
								</form>
							</div>
						</section>
					</div>
				);
			});
		}, popupTimeout);
	}, []);

	return null;
};

export default Popup;
