"use client";

import { modal } from "@/components/modal";
import Image from "next/image";
import { IoCloseSharp } from "react-icons/io5";
import React, { useEffect, useRef } from "react";


const sans = { fontFamily: "Aptos, Segoe UI, sans-serif" };
const fieldClass = "min-h-12 w-full rounded-xl border border-[#e1c9b5] bg-white px-3 text-base text-[#35281e] focus:outline-none focus:ring-4 focus:ring-[#d8b18c]/50";
const buttonClass = "min-h-12 w-full rounded-xl bg-[#750c32] px-5 py-4 text-center font-bold text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ae7c50]";

export function NewClientOffer({ source = "homepage" }: { source?: "homepage" | "popup" }) {
  const prefix = source === "popup" ? "popup" : "offer";
  return (
    <div className={"black-friday-offer " + (source === "popup" ? "black-friday-popup" : "")} style={sans}>
      <style dangerouslySetInnerHTML={{ __html: `html:has(.black-friday-popup),body:has(.black-friday-popup){overflow:hidden}.black-friday-offer{padding:20px;color:#35281e}.offer-art{display:block;width:100%;height:auto;border-radius:16px}.offer-form{display:grid;gap:10px;margin-top:14px}.offer-fields{display:grid;gap:8px}.offer-fields label{display:block;font-size:12px;line-height:1.3}.offer-fields input{display:block;margin-top:4px;min-height:40px;height:40px;font-size:16px}.offer-note,.offer-terms{margin:0;text-align:center;font-size:11px;line-height:1.3;color:#5b4638}.offer-form button{min-height:44px;padding:12px 16px;font-size:14px}.black-friday-popup{max-height:calc(100dvh - 32px);display:flex;flex-direction:column;gap:12px;padding:12px}.black-friday-offer:not(.black-friday-popup) .offer-fields{grid-template-columns:repeat(3,minmax(0,1fr))}.black-friday-popup .offer-art{min-height:0;width:100%;height:auto;max-height:calc(100dvh - 200px);object-fit:contain}.black-friday-popup .offer-form{flex-shrink:0;margin-top:0;gap:8px}.black-friday-popup .offer-fields{grid-template-columns:repeat(3,minmax(0,1fr))}.black-friday-popup .offer-fields label{min-width:0}@media(max-width:600px){.black-friday-offer{padding:8px}.black-friday-offer .offer-art{width:calc(100% + 16px);max-width:none;margin-left:-8px}.black-friday-popup{gap:8px;padding:8px;max-height:calc(100dvh - 24px)}.black-friday-offer .offer-art{aspect-ratio:4/3;height:auto;object-fit:fill}.black-friday-popup .offer-art{height:auto;max-height:calc(100dvh - 210px);aspect-ratio:4/3;object-fit:fill}.black-friday-offer:not(.black-friday-popup) .offer-fields{grid-template-columns:1fr 1fr}.black-friday-offer:not(.black-friday-popup) .offer-fields label:last-child{grid-column:1/-1}.black-friday-popup .offer-fields{grid-template-columns:1fr}.black-friday-popup .offer-fields{grid-template-columns:1fr 1fr;gap:6px}.black-friday-popup .offer-fields label{display:block;font-size:10px}.black-friday-popup .offer-fields label:last-child{grid-column:1/-1}.black-friday-popup .offer-fields input{margin-top:2px;height:32px;min-height:32px;padding:0 8px}.black-friday-popup .offer-form{gap:5px}.black-friday-popup .offer-note{font-size:10px}.black-friday-popup .offer-terms{font-size:9px}.black-friday-popup .offer-form button{min-height:40px;padding:10px 12px}.offer-terms{font-size:10px}}` }} />
      <h2 className="sr-only" id={prefix + "-special-title"}>Black Friday Laser Hair Removal Offers</h2>
      <Image alt="Optimum Laser NY Black Friday Best Value: Full Legs with Brazilian and Underarms $1,399, Brazilian $599, Men's Full Back $799, Full Face $499. Six sessions per package. Offer ends November 29." className="offer-art" height={1024} src="/images/black-friday-best-value.png" width={1536} priority />
      <form action="https://api.web3forms.com/submit" className="offer-form" id={prefix + "-form"} method="POST">
        <input name="access_key" type="hidden" value="a716156d-540b-46e2-b5c5-92fe9efc84c5" />
        <input name="redirect" type="hidden" value={"https://optimumlaserhairremoval.com/thank-you?form=" + source} />
        <input name="from_name" type="hidden" value="Optimum Laser Website" />
        <input name="subject" type="hidden" value={"New Optimum Laser lead — " + source} />
        <input name="_subject" type="hidden" value={"Optimum Laser - Black Friday Offer - " + (source === "popup" ? "Popup" : "Homepage")} />
        <input name="form_source" type="hidden" value={source === "popup" ? "Black Friday package popup" : "Homepage Black Friday offer"} />
        <input name="_template" type="hidden" value="table" />
        <input name="offer" type="hidden" value="Black Friday six-session packages: Brazilian $599; Mens Full Back $799; Full Legs + Brazilian + Underarms $1399; Full Face $499. Ends November 29. New treatment areas only." />
        <input name="form_name" type="hidden" value={source} />
        <input aria-hidden="true" autoComplete="off" className="hidden" name="_honey" tabIndex={-1} type="text" />
        <div className="offer-fields">
          <label htmlFor={prefix + "-name"}>Full name<input autoComplete="name" className={fieldClass} id={prefix + "-name"} maxLength={100} name="name" required /></label>
          <label htmlFor={prefix + "-email"}>Email address<input autoComplete="email" className={fieldClass} id={prefix + "-email"} maxLength={254} name="email" required type="email" /></label>
          <label htmlFor={prefix + "-phone"}>Phone number<input autoComplete="tel" className={fieldClass} id={prefix + "-phone"} inputMode="tel" maxLength={30} minLength={7} name="phone" required type="tel" /></label>
        </div>
        <p className="offer-note">We’ll contact you to arrange your consultation.</p>
        <p className="offer-terms">Valid for new treatment areas only. Cannot be applied to existing packages or previously purchased sessions. Offer ends November 29.</p>
        <button className={buttonClass} style={{ fontFamily: "inherit" }} type="submit">Claim My Black Friday Offer</button>      </form>

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
          <section aria-labelledby="popup-special-title" aria-modal="true" className={"relative w-full max-w-4xl overflow-hidden rounded-[2rem] border border-[#eadbcd] bg-[#fffdfb] text-[#35281e] shadow-2xl transition " + (show ? "pointer-events-auto" : "pointer-events-none opacity-0")} role="dialog">
            <button aria-label="Close Black Friday offer" className="absolute right-3 top-3 z-10 flex h-12 w-12 items-center justify-center rounded-full border border-[#eadbcd] bg-[#fffdfb] text-[#35281e] focus:outline-none focus:ring-4 focus:ring-[#d8b18c]" onClick={proceed} type="button"><IoCloseSharp className="text-2xl" /></button>
            <NewClientOffer source="popup" />
          </section>
        </div>
      ));
    }, 6000);
    return () => window.clearTimeout(timer);
  }, []);
  return null;
}











