"use client";

import { useEffect } from "react";

const DAYSMART_PLUGIN = "https://plugin.myonlineappointment.com/Scripts/external/bookingplugin.js";

export default function BookingPage() {
  useEffect(() => {
    const win = window as typeof window & Record<string, string | number>;
    win.daysmart_acc = "dc3faad1-130b-4594-9fd0-27c386264ba3";
    win.daysmart_iframe_width = 700;
    win.daysmart_iframe_height = 0;
    win.daysmart_website_root = "https://plugin.myonlineappointment.com";
    win.load_in_iframe = "false";

    const existing = document.querySelector('script[data-optimum-daysmart-plugin]');
    if (existing) return;

    const script = document.createElement("script");
    script.type = "text/javascript";
    script.src = DAYSMART_PLUGIN;
    script.async = false;
    script.dataset.optimumDaysmartPlugin = "true";
    document.body.appendChild(script);

    return () => script.remove();
  }, []);

  return (
    <main className="min-h-screen bg-[#fbf6ef] px-5 py-20 text-center text-[#35281e]">
      <p className="text-sm font-semibold tracking-[0.18em]">OPTIMUM LASER</p>
      <h1 className="mt-4 font-serif text-4xl">Opening secure online booking…</h1>
      <p className="mx-auto mt-4 max-w-xl text-lg text-[#5b4638]">
        Please wait while DaySmart opens your free consultation booking page.
      </p>
    </main>
  );
}
