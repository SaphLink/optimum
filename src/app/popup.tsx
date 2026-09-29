"use client";

import { modal } from "@/components/modal";
import Image from "next/image";
import { IoCloseSharp } from "react-icons/io5";
import React, { useEffect, useRef, useState } from "react";

export default function Popup() {
  const shown = useRef(false);

  useEffect(() => {
    if (shown.current) return;
    shown.current = true;
    const timer = window.setTimeout(() => {
      void modal(({ show, proceed }: any) => {
        const [isVisible, setIsVisible] = useState(false);
        const [showForm, setShowForm] = useState(false);
        useEffect(() => setIsVisible(show), [show]);
        return (
          <div className="fixed inset-0 z-[500] flex items-center justify-center p-3 sm:p-6">
            <div className={`absolute inset-0 ${isVisible ? "bg-[#35281e]/45 backdrop-blur-[2px]" : "pointer-events-none opacity-0"}`} onClick={proceed} />
            <section aria-labelledby="new-client-special-title" aria-modal="true" className={`relative max-h-[94vh] w-full max-w-md overflow-y-auto rounded-[2rem] border border-[#eadbcd] bg-[#fffdfb] text-[#6e3e23] shadow-2xl transition ${isVisible ? "pointer-events-auto" : "pointer-events-none opacity-0"}`} role="dialog">
              <button aria-label="Close new client offer" className="absolute right-3 top-3 z-10 flex h-12 w-12 items-center justify-center rounded-full border-2 border-[#eadbcd] bg-white text-[#6e3e23] focus:outline-none focus:ring-4 focus:ring-[#d8b18c]" onClick={proceed} type="button"><IoCloseSharp className="text-3xl" /></button>
              <div className="p-5 sm:p-7">
                <Image alt="Optimum Laser" className="h-auto w-28 object-contain sm:w-32" height={120} priority src="/images/homepage/Optimum Laser Brown Logo.png" width={260} />
                <p className="mt-5 text-center text-xs tracking-[0.2em]">NEW CLIENT EXCLUSIVE</p>
                <h1 className="my-4 text-center font-serif text-3xl leading-tight sm:text-4xl" id="new-client-special-title">One FREE session.<br />A little extra smooth.</h1>
                <p className="mb-5 text-center text-sm leading-relaxed">Purchase <strong>any laser hair removal package</strong> and receive one free session on an eligible small area of your choice.</p>
                {!showForm && <button className="min-h-12 w-full rounded-lg bg-[#623c27] px-4 py-3 font-semibold text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2" onClick={() => setShowForm(true)} type="button">Claim My Free Session</button>}
                <form action="https://formsubmit.co/optimumlaserhairremoval@gmail.com" className={showForm ? "grid gap-3" : "hidden"} method="POST">
                  <input name="_next" type="hidden" value="https://optimumlaserhairremoval.com/thank-you?form=discount-popup" />
                  <input name="_subject" type="hidden" value="Optimum Laser - New Client Bonus Inquiry" />
                  <input name="form_source" type="hidden" value="Free small-area session popup" />
                  <input name="_template" type="hidden" value="table" />
                  <input name="offer" type="hidden" value="One free small-area session with purchase of any laser hair removal package" />
                  <input aria-hidden="true" autoComplete="off" className="hidden" name="_honey" tabIndex={-1} type="text" />
                  <label className="text-sm" htmlFor="popup-name">First name</label>
                  <input autoComplete="given-name" className="min-h-12 rounded-lg border border-[#e1c9b5] bg-white px-3 text-base" id="popup-name" maxLength={100} name="name" required />
                  <label className="text-sm" htmlFor="popup-phone">Phone number</label>
                  <input autoComplete="tel" className="min-h-12 rounded-lg border border-[#e1c9b5] bg-white px-3 text-base" id="popup-phone" inputMode="tel" maxLength={30} minLength={7} name="phone" required type="tel" />
                  <label className="text-sm" htmlFor="popup-email">Email address (optional)</label>
                  <input autoComplete="email" className="min-h-12 rounded-lg border border-[#e1c9b5] bg-white px-3 text-base" id="popup-email" maxLength={254} name="email" type="email" />
                  <p className="text-center text-xs">Our team will contact you about your package and bonus session.</p>
                  <button className="min-h-12 rounded-lg bg-[#623c27] px-4 py-3 font-semibold text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2" type="submit">Request My Offer</button>
                </form>
                <p className="mt-5 border-t border-[#eadbcd] pt-4 text-center text-xs leading-relaxed">New clients only. Package purchase required. Includes one session on one eligible small area.</p>
              </div>
            </section>
          </div>
        );
      });
    }, 6000);
    return () => window.clearTimeout(timer);
  }, []);

  return null;
}
