"use client";

import { modal } from "@/components/modal";
import Image from "next/image";
import { IoCloseSharp } from "react-icons/io5";
import React, { useEffect, useRef } from "react";

const sans = { fontFamily: "Aptos, Segoe UI, sans-serif" };
const fieldClass = "min-h-12 w-full rounded-xl border border-[#e1c9b5] bg-white px-3 text-base text-[#35281e] focus:outline-none focus:ring-4 focus:ring-[#d8b18c]/50";
const buttonClass = "min-h-12 w-full rounded-xl bg-[#750c32] px-5 py-4 text-center font-bold text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ae7c50]";

function PopupOffer() {
  return <div className="max-h-[calc(100dvh-24px)] overflow-y-auto p-4 text-center sm:p-6" style={sans}>
    <p className="text-[11px] font-bold tracking-[0.18em] text-[#8a593d]">NEW-CLIENT PRICING · ENDS NOVEMBER 29</p>
    <h2 className="mt-3 text-3xl leading-tight text-[#35281e] sm:text-4xl" style={{ fontFamily: "Georgia, Times New Roman, serif" }}>Your smooth-skin <em className="font-normal text-[#ae7c50]">routine starts here.</em></h2>
    <section className="mt-5 rounded-2xl bg-[#750c32] p-5 text-white shadow-lg">
      <p className="text-[11px] font-bold tracking-[0.18em] text-[#f1cda5]">BEST VALUE</p>
      <h3 className="mt-2 text-2xl leading-tight" style={{ fontFamily: "Georgia, Times New Roman, serif" }}>Full Legs + Brazilian + Underarms</h3>
      <p className="mt-2 text-base text-[#f6d6b7] line-through">$2,800</p><p className="text-4xl font-extrabold">$1,399</p><p className="mt-1 text-xs font-bold tracking-wider text-[#f1cda5]">SAVE $1,401</p>
      <p className="mt-3 text-sm text-[#fff0de]">Six personalized laser hair removal sessions.</p>
    </section>
    <section className="mt-4 rounded-2xl border border-[#eadbcd] bg-white p-4 text-left">
      <h3 className="text-xl text-[#35281e]" style={{ fontFamily: "Georgia, Times New Roman, serif" }}>Other Black Friday Packages</h3>
      <div className="mt-2 divide-y divide-[#f0e4da] text-sm"><div className="flex items-center justify-between gap-3 py-3"><span>Brazilian · 6 sessions<br/><b className="text-xs text-[#8a593d]">Save $201</b></span><b><del className="mr-1 text-xs font-normal text-[#8b7463]">$800</del>$599</b></div><div className="flex items-center justify-between gap-3 py-3"><span>Men&apos;s Full Back · 6 sessions<br/><b className="text-xs text-[#8a593d]">Save $101</b></span><b><del className="mr-1 text-xs font-normal text-[#8b7463]">$900</del>$799</b></div><div className="flex items-center justify-between gap-3 pt-3"><span>Full Face · 6 sessions<br/><b className="text-xs text-[#8a593d]">Save $401</b></span><b><del className="mr-1 text-xs font-normal text-[#8b7463]">$900</del>$499</b></div></div>
    </section>
    <form action="https://api.web3forms.com/submit" className="mt-4 grid gap-2 text-left" method="POST">
      <input name="access_key" type="hidden" value="a716156d-540b-46e2-b5c5-92fe9efc84c5" /><input name="redirect" type="hidden" value="https://optimumlaserhairremoval.com/thank-you?form=popup" /><input name="from_name" type="hidden" value="Optimum Laser Website" /><input name="subject" type="hidden" value="New Optimum Laser lead — popup" /><input name="form_source" type="hidden" value="Black Friday package popup" /><input name="form_name" type="hidden" value="popup" /><input name="offer" type="hidden" value="Black Friday package popup" /><input aria-hidden="true" autoComplete="off" className="hidden" name="_honey" tabIndex={-1} type="text" />
      <label className="text-xs font-bold text-[#35281e]">First name<input autoComplete="given-name" className={fieldClass + " mt-1"} maxLength={100} name="name" required /></label><label className="text-xs font-bold text-[#35281e]">Email address<input autoComplete="email" className={fieldClass + " mt-1"} maxLength={254} name="email" required type="email" /></label><label className="text-xs font-bold text-[#35281e]">Mobile number<input autoComplete="tel" className={fieldClass + " mt-1"} inputMode="tel" maxLength={30} minLength={7} name="phone" required type="tel" /></label><button className={buttonClass} type="submit">Claim My Black Friday Offer</button>
    </form>
    <p className="my-2 text-xs text-[#6e5948]">or</p><a className="block rounded-xl bg-[#ecd0ad] px-5 py-4 font-bold text-[#35281e]" href="sms:5166690634">Text Us Now · 516-669-0634</a><p className="mt-3 text-xs leading-relaxed text-[#6e5948]">We&apos;ll follow up during business hours. No appointment is booked yet.</p>
  </div>;
}

export function NewClientOffer({ source = "homepage" }: { source?: "homepage" | "popup" }) {
  if (source === "popup") return <PopupOffer />;
  return <div className="black-friday-offer p-5 text-[#35281e]" style={sans}>
    <h2 className="sr-only" id="offer-special-title">Black Friday Laser Hair Removal Offers</h2><Image alt="Optimum Laser NY Black Friday Best Value: Full Legs with Brazilian and Underarms $1,399, Brazilian $599, Men&apos;s Full Back $799, Full Face $499. Six sessions per package. Offer ends November 29." className="block w-full rounded-2xl" height={1024} src="/images/black-friday-best-value.png" width={1536} priority />
    <form action="https://api.web3forms.com/submit" className="mt-4 grid gap-3" id="offer-form" method="POST"><input name="access_key" type="hidden" value="a716156d-540b-46e2-b5c5-92fe9efc84c5" /><input name="redirect" type="hidden" value="https://optimumlaserhairremoval.com/thank-you?form=homepage" /><input name="from_name" type="hidden" value="Optimum Laser Website" /><input name="subject" type="hidden" value="New Optimum Laser lead — homepage" /><input name="form_source" type="hidden" value="Homepage Black Friday offer" /><input name="form_name" type="hidden" value="homepage" /><input aria-hidden="true" autoComplete="off" className="hidden" name="_honey" tabIndex={-1} type="text" /><div className="grid gap-2 sm:grid-cols-3"><label className="text-xs">Full name<input autoComplete="name" className={fieldClass + " mt-1"} maxLength={100} name="name" required /></label><label className="text-xs">Email address<input autoComplete="email" className={fieldClass + " mt-1"} maxLength={254} name="email" required type="email" /></label><label className="text-xs">Phone number<input autoComplete="tel" className={fieldClass + " mt-1"} inputMode="tel" maxLength={30} minLength={7} name="phone" required type="tel" /></label></div><p className="text-center text-xs text-[#5b4638]">We&apos;ll contact you to arrange your consultation.</p><p className="text-center text-xs text-[#5b4638]">Valid for new treatment areas only. Cannot be applied to existing packages or previously purchased sessions. Offer ends November 29.</p><button className={buttonClass} type="submit">Claim My Black Friday Offer</button></form>
  </div>;
}

export default function Popup() {
  const shown = useRef(false);
  useEffect(() => { if (shown.current) return; const timer = window.setTimeout(() => { shown.current = true; void modal(({ show, proceed }: any) => <div className="fixed inset-0 z-[500] flex items-center justify-center p-3 sm:p-6" style={sans}><div className={show ? "absolute inset-0 bg-[#35281e]/45 backdrop-blur-[2px]" : "pointer-events-none absolute inset-0 opacity-0"} onClick={proceed} /><section aria-labelledby="popup-special-title" aria-modal="true" className={"relative w-full max-w-xl overflow-hidden rounded-[2rem] border border-[#eadbcd] bg-[#fffdfb] text-[#35281e] shadow-2xl transition " + (show ? "pointer-events-auto" : "pointer-events-none opacity-0")} role="dialog"><button aria-label="Close Black Friday offer" className="absolute right-3 top-3 z-10 flex h-11 w-11 items-center justify-center rounded-full border border-[#eadbcd] bg-[#fffdfb] text-[#35281e]" onClick={proceed} type="button"><IoCloseSharp className="text-2xl" /></button><PopupOffer /></section></div>); }, 6000); return () => window.clearTimeout(timer); }, []);
  return null;
}
