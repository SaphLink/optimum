"use client";

import { modal } from "@/components/modal";
import Image from "next/image";
import { IoCloseSharp } from "react-icons/io5";
import React, { useEffect, useRef } from "react";

const serif = { fontFamily: "Georgia, Times New Roman, serif" };
const sans = { fontFamily: "Aptos, Segoe UI, sans-serif" };
const fieldClass = "min-h-12 w-full rounded-xl border border-[#e1c9b5] bg-white px-3 text-base text-[#35281e] focus:outline-none focus:ring-4 focus:ring-[#d8b18c]/50";
const buttonClass = "min-h-12 w-full rounded-xl bg-[#35281e] px-5 py-4 text-center font-bold text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ae7c50]";

export function NewClientOffer({ source = "homepage" }: { source?: "homepage" | "popup" }) {
  const prefix = source === "popup" ? "popup" : "offer";
  return (
    <div className="p-5 text-[#35281e] sm:p-8" style={sans}>
      <Image alt="Optimum Laser" className="h-auto w-28 object-contain sm:w-32" height={120} src="/images/homepage/Optimum Laser Brown Logo.png" width={260} />
      <p className="mt-5 text-center text-xs font-bold tracking-[0.26em] text-[#8a593d]">NEW CLIENT OFFER</p>
      <h2 className="my-4 text-center text-3xl font-normal leading-tight tracking-[-0.04em] sm:text-4xl" id={prefix + "-special-title"} style={serif}><em className="block text-5xl not-italic font-normal text-[#ae7c50] sm:text-6xl">50% OFF</em>Your first laser session</h2>
      <p className="mb-5 text-center text-base leading-relaxed text-[#5b4638]">One eligible area.<br />No package purchase required.</p>
      <form action="https://formsubmit.co/optimumlaserhairremoval@gmail.com" className="grid gap-2.5" id={prefix + "-form"} method="POST">
        <input name="_next" type="hidden" value={"https://optimumlaserhairremoval.com/thank-you?form=" + source} />
        <input name="_subject" type="hidden" value={"Optimum Laser - New Client 50% Offer - " + (source === "popup" ? "Popup" : "Homepage")} />
        <input name="form_source" type="hidden" value={source === "popup" ? "50% introductory session popup" : "Homepage new-client offer"} />
        <input name="_template" type="hidden" value="table" />
        <input name="offer" type="hidden" value="50% off one introductory session on one eligible area at regular single-session price; packages excluded; no package credit" />
        <input aria-hidden="true" autoComplete="off" className="hidden" name="_honey" tabIndex={-1} type="text" />
        <label className="text-sm" htmlFor={prefix + "-name"}>First name</label>
        <input autoComplete="given-name" className={fieldClass} id={prefix + "-name"} maxLength={100} name="name" required style={{ fontFamily: "inherit" }} />
        <label className="text-sm" htmlFor={prefix + "-phone"}>Phone number</label>
        <input autoComplete="tel" className={fieldClass} id={prefix + "-phone"} inputMode="tel" maxLength={30} minLength={7} name="phone" required style={{ fontFamily: "inherit" }} type="tel" />
        <p className="text-center text-xs leading-relaxed text-[#5b4638]">We’ll contact you to arrange your consultation.</p>
        <button className={buttonClass} style={{ fontFamily: "inherit" }} type="submit">Request My 50% Offer</button>
      </form>
      <p className="mt-5 border-t border-[#eadbcd] pt-4 text-center text-xs leading-relaxed text-[#5b4638]">New clients only. Applies to the regular single-session price. Excludes packages; introductory payment is not credited toward a package. Consultation required.</p>
    </div>
  );
}

export default function Popup() {
  const shown = useRef(false);
  useEffect(() => {
    if (shown.current) return;
    const timer = window.setTimeout(() => {
      shown.current = true;
      void modal(({ show, proceed }: any) => (
        <div className="fixed inset-0 z-[500] flex items-center justify-center p-3 sm:p-6" style={sans}>
          <div className={show ? "absolute inset-0 bg-[#35281e]/45 backdrop-blur-[2px]" : "pointer-events-none absolute inset-0 opacity-0"} onClick={proceed} />
          <section aria-labelledby="popup-special-title" aria-modal="true" className={"relative max-h-[94vh] w-full max-w-md overflow-y-auto rounded-[2rem] border border-[#eadbcd] bg-[#fffdfb] text-[#35281e] shadow-2xl transition " + (show ? "pointer-events-auto" : "pointer-events-none opacity-0")} role="dialog">
            <button aria-label="Close new client offer" className="absolute right-3 top-3 z-10 flex h-12 w-12 items-center justify-center rounded-full border border-[#eadbcd] bg-[#fffdfb] text-[#35281e] focus:outline-none focus:ring-4 focus:ring-[#d8b18c]" onClick={proceed} type="button"><IoCloseSharp className="text-2xl" /></button>
            <NewClientOffer source="popup" />
          </section>
        </div>
      ));
    }, 6000);
    return () => window.clearTimeout(timer);
  }, []);
  return null;
}
