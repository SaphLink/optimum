"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
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

  const isPreview = searchParams.get("preview") === "1";

  useEffect(() => {
    if (isPreview || !/^(www\.)?optimumlaserhairremoval\.com$/.test(window.location.hostname)) return;
    let submission: { id: string; created: number };
    try {
      const stored = sessionStorage.getItem("optimum_pending_lead");
      if (!stored) return;
      submission = JSON.parse(stored);
      if (!submission.id || Date.now() - submission.created > 60 * 60 * 1000) return;
      sessionStorage.removeItem("optimum_pending_lead");
    } catch { return; }
    window.dataLayer = window.dataLayer || [];
    window.gtag = window.gtag || ((...args: unknown[]) => window.dataLayer?.push(args));
    window.dataLayer.push({
      event: "generate_lead",
      lead_form: leadForm,
      lead_type: "form_submission",
    });
    window.gtag("event", "conversion", {
      send_to: "AW-397121812/YtWHCM2Vt-AcEJSyrr0B",
      transaction_id: submission.id,
      value: 0,
      currency: "USD",
    });
  }, [leadForm, isPreview]);

  return (
    <main id="thank-you-page">
      <style>{`#thank-you-page{min-height:100vh;background:#fbf0df;color:#35281e;padding:210px 24px 64px;font:16px/1.6 Aptos,"Segoe UI",sans-serif}#thank-you-page *{box-sizing:border-box}#thank-you-page .confirmation{max-width:820px;margin:auto;background:#fffdfb;border:1px solid #eadbca;border-radius:28px;padding:48px 56px;text-align:center;box-shadow:0 14px 35px #35281e0b}#thank-you-page .eyebrow{font-size:11px;letter-spacing:2.5px;color:#8a593d;margin:18px 0}#thank-you-page .check{display:grid;place-items:center;width:62px;height:62px;margin:auto;border:1px solid #d9bfa3;border-radius:50%;background:#f5e7d6;color:#8a593d;font-size:30px}#thank-you-page h1{font:normal 56px/1.1 Georgia,serif;letter-spacing:-1.5px;margin:0 0 20px}#thank-you-page h1 em{color:#8a593d}#thank-you-page p{color:#5b4638;margin:0 auto 20px;max-width:550px}#thank-you-page .next{background:#f5e7d6;border-radius:16px;padding:24px;margin:28px 0;text-align:left}#thank-you-page h2{font:normal 25px/1.2 Georgia,serif;margin:0 0 10px}#thank-you-page .next p{font-size:15px;margin:0;max-width:none}#thank-you-page .actions{display:flex;gap:12px;justify-content:center}#thank-you-page .actions a{border:1px solid #35281e;border-radius:10px;padding:14px 24px;min-height:50px;font-weight:600;text-decoration:none}#thank-you-page .primary{background:#35281e;color:#fff9f2}#thank-you-page .secondary{color:#35281e}#thank-you-page a:focus-visible{outline:3px solid #8a593d;outline-offset:4px}#thank-you-page .small{font-size:13px;margin:20px auto 0}#thank-you-page .small a{text-decoration:underline;text-underline-offset:4px}#thank-you-page .visit{text-align:center;font-size:13px;margin:28px auto 0;color:#6e5948}#thank-you-page .visit a{display:inline-block;margin-top:8px;color:#8a593d;text-decoration:underline;text-underline-offset:4px}@media(max-width:760px){#thank-you-page{padding:155px 18px 40px}#thank-you-page .confirmation{padding:30px 22px;border-radius:22px}#thank-you-page h1{font-size:40px;letter-spacing:-1px}#thank-you-page .next{padding:20px}#thank-you-page .actions{flex-direction:column}#thank-you-page h2{font-size:23px}}`}</style>
      <section className="confirmation" aria-labelledby="confirmation-title">
        <div className="check" aria-hidden="true">✓</div>
        <p className="eyebrow">OPTIMUM LASER · MANHASSET</p>
        <h1 id="confirmation-title">Thank you.<br/><em>Let’s talk soon.</em></h1>
        <p>Your request has been submitted. Thank you for taking the first step with Optimum Laser.</p>
        <div className="next"><h2>What happens next?</h2><p>Our team will follow up during business hours to discuss your goals and help with your next step. Your appointment is not booked yet.</p></div>
        <div className="actions"><Link href="/" className="primary">Back to homepage</Link><a href="tel:5164954908" className="secondary">Call our team</a></div>
        <p className="small">Prefer to text? <a href="sms:5166690634">516-669-0634</a></p>
      </section>
      <div className="visit">1180 Northern Blvd, Suite 202 · Manhasset, NY 11030<br/><a href="https://www.google.com/maps/search/?api=1&query=1180+Northern+Blvd+Suite+202+Manhasset+NY+11030" target="_blank" rel="noreferrer">Get directions ↗</a></div>
    </main>
  );
}
