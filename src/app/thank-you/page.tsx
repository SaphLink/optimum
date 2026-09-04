"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";

declare global {
  interface Window {
    dataLayer?: Array<Record<string, string>>;
  }
}

const formNames: Record<string, string> = {
  contact: "contact_form",
  homepage: "homepage_chat_form",
  "discount-popup": "discount_popup_form",
};

export default function ThankYouPage() {
  const searchParams = useSearchParams();
  const submittedForm = searchParams.get("form") ?? "contact";
  const leadForm = formNames[submittedForm] ?? "contact_form";

  useEffect(() => {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: "generate_lead",
      lead_form: leadForm,
      lead_type: "form_submission",
              // @ts-ignore - gtag is configured sitewide in the root layout
window.gtag?.("event", "conversion", {
      send_to: "AW-397121812/YtWHCM2Vt-AcEJSyrr0B",
      value: 0,
      currency: "USD",
    });
    });
  }, [leadForm]);

  return (
    <main className="min-h-screen bg-[#f9eedc] px-6 py-24 text-[#35281e]">
      <section className="mx-auto max-w-2xl rounded-3xl bg-white p-10 text-center shadow-lg">
        <h1 className="mb-4 text-4xl font-semibold">Thank you!</h1>
        <p className="mb-8 text-lg leading-relaxed">
          We received your request. A member of the Optimum Laser NY team will
          contact you shortly.
        </p>
        <Link
          href="/"
          className="inline-block rounded-full bg-[#35281e] px-7 py-3 font-semibold text-white transition hover:bg-[#5a473d]"
        >
          Return to home page
        </Link>
      </section>
    </main>
  );
}

