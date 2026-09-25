"use client";
import { useEffect, useState } from "react";
export default function ContactPage() {
  const [nextUrl, setNextUrl] = useState("https://optimumlaserhairremoval.com/thank-you?form=contact");
  useEffect(() => { setNextUrl(window.location.origin + "/thank-you?form=contact"); }, []);
  useEffect(() => {
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (!("IntersectionObserver" in window)) return;
    const elements = Array.from(document.querySelectorAll<HTMLElement>(
      "#contact-page .intro > *, #contact-page .formbox > h2, #contact-page .formbox > p, #contact-page fieldset, #contact-page form > details, #contact-page .marketing, #contact-page button[type=submit], #contact-page .direct, #contact-page footer > *"
    ));
    const seen = new WeakSet<Element>();
    const visible = new WeakSet<Element>();
    const animations = new Map<Element, Animation>();
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        const wasVisible = visible.has(entry.target);
        const firstObservation = !seen.has(entry.target);
        seen.add(entry.target);
        if (!entry.isIntersecting) {
          visible.delete(entry.target);
          return;
        }
        visible.add(entry.target);
        // Render the first viewport immediately; animate only later scroll entries.
        if (firstObservation || wasVisible || motion.matches || entry.target.contains(document.activeElement)) return;
        animations.get(entry.target)?.cancel();
        // Opacity cannot move an observed element across its own visibility threshold.
        const animation = entry.target.animate([
          { opacity: 0.65 }, { opacity: 1 }
        ], { duration: 350, easing: "ease-out" });
        animations.set(entry.target, animation);
        animation.onfinish = () => animations.delete(entry.target);
      });
    }, { threshold: 0 });
    elements.forEach(element => observer.observe(element));
    const stopMotion = () => {
      if (motion.matches) animations.forEach(animation => animation.cancel());
    };
    motion.addEventListener("change", stopMotion);
    return () => {
      observer.disconnect();
      animations.forEach(animation => animation.cancel());
      motion.removeEventListener("change", stopMotion);
    };
  }, []);
  return <main id="contact-page"><style id="contact-page-styles">{`#contact-page{background:#fbf0df;color:#35281e;font:16px/1.5 Aptos,"Segoe UI",sans-serif;padding-top:190px;min-height:100vh}#contact-page *{box-sizing:border-box}#contact-page .layout{max-width:1160px;margin:auto;display:grid;grid-template-columns:1fr 1.15fr;gap:60px;padding:48px 32px}#contact-page h1{font:normal 58px/1.06 Georgia,serif;letter-spacing:-2px;margin:0 0 24px}#contact-page h1 em{color:#8a593d}#contact-page h2{font:normal 28px/1.2 Georgia,serif;margin:0 0 12px}#contact-page p{margin:0 0 20px;color:#5b4638}#contact-page .eyebrow{font-size:12px;letter-spacing:2px;color:#8a593d}#contact-page .expectations{margin-top:44px}#contact-page .expectations p{line-height:1.9}#contact-page .formbox{background:#fffdfb;border:1px solid #eadbca;border-radius:26px;padding:30px;box-shadow:0 14px 35px #35281e0b}#contact-page .small{font-size:13px;margin:14px 0;color:#6e5948}#contact-page label{display:block;font-size:14px;font-weight:600;margin:16px 0 6px}#contact-page input,#contact-page select,#contact-page textarea{width:100%;min-width:0;font:16px Aptos,"Segoe UI",sans-serif;color:#35281e;border:1px solid #d7c6b5;border-radius:10px;background:#fff;padding:12px;min-height:48px}#contact-page input:focus,#contact-page select:focus,#contact-page textarea:focus{outline:2px solid #8a593d;outline-offset:2px}#contact-page fieldset{padding:0;border:0;margin:20px 0}#contact-page legend{font-size:14px;font-weight:600;margin-bottom:8px}#contact-page .choices{display:flex;gap:8px}#contact-page .choices label{flex:1;display:flex;align-items:center;justify-content:center;gap:6px;border:1px solid #d7c6b5;border-radius:10px;padding:10px 4px;margin:0;cursor:pointer}#contact-page .choices label:has(input:checked){background:#f5e7d6;border-color:#8a593d}#contact-page .choices input{width:16px;min-height:16px;height:16px;padding:0;accent-color:#8a593d}#contact-page details{font-size:14px;margin:18px 0}#contact-page summary{cursor:pointer;padding:8px 0}#contact-page .marketing{display:flex;gap:10px;font-weight:400;line-height:1.45;align-items:flex-start;margin:20px 0}#contact-page .marketing input{width:18px;min-height:18px;height:18px;flex:0 0 18px;margin-top:2px;accent-color:#35281e}#contact-page button{width:100%;background:#35281e;color:#fff9f2;border:0;border-radius:10px;min-height:52px;padding:14px 10px;font:600 16px Aptos,"Segoe UI",sans-serif;cursor:pointer;transition:background .2s}#contact-page button:hover{background:#5b3c29}#contact-page a{color:inherit;text-decoration:underline;text-underline-offset:4px}#contact-page .direct{font-size:14px;text-align:center;margin:20px 0 0}#contact-page footer{display:flex;flex-wrap:wrap;gap:24px;align-items:center;justify-content:space-between;background:#f5e7d6;padding:28px max(24px,calc((100% - 1096px)/2));font-size:14px}#contact-page footer p{margin:6px 0}#contact-page footer details{margin:0}@media(max-width:760px){#contact-page{padding-top:175px}#contact-page .layout{grid-template-columns:1fr;gap:22px;padding:28px 18px}#contact-page h1{font-size:40px;letter-spacing:-1px}#contact-page .eyebrow{font-size:11px}#contact-page .expectations{display:none}#contact-page .formbox{padding:22px 18px;border-radius:20px}#contact-page h2{font-size:26px}#contact-page .choices{gap:6px}#contact-page .choices label{font-size:13px}#contact-page footer{padding:24px 20px}}@media(prefers-reduced-motion:reduce){#contact-page button{transition:none}}`}</style><div className="layout"><section className="intro">
    <p className="eyebrow">OPTIMUM LASER · MANHASSET</p><h1>Your free<br/><em>consultation.</em></h1>
    <p>Tell us how to reach you. We’ll help you explore treatments, pricing, and your next step.</p>
    <div className="expectations"><h2>Let’s find what’s right for you.</h2><p>Discuss your goals.<br/>Ask your questions.<br/>Explore a personalized treatment plan.</p></div>
  </section><section className="formbox"><h2>Let’s get started.</h2><p>Leave your details. Our team will take it from here.</p><p className="small">* Required fields</p>
  <form action="https://formsubmit.co/optimumlaserhairremoval@gmail.com" method="POST" onSubmit={event => {
    const phone = event.currentTarget.elements.namedItem("phone") as HTMLInputElement;
    const digits = phone.value.replace(/[^0-9]/g, "");
    if (digits.length < 10 || digits.length > 15) { event.preventDefault(); phone.setCustomValidity("Please enter a valid mobile number, including area code."); phone.reportValidity(); }
  }}>
    <input type="hidden" name="_next" value={nextUrl}/><input type="hidden" name="_subject" value="New inquiry — Optimum Laser consultation"/><input type="hidden" name="_template" value="table"/>
    <input type="text" name="_honey" autoComplete="off" tabIndex={-1} aria-hidden="true" style={{display:"none"}}/>
    <label htmlFor="contact-name">Full name *</label><input id="contact-name" name="name" autoComplete="name" placeholder="Full name" required pattern=".*\S.*" maxLength={160}/>
    <label htmlFor="contact-email">Email address *</label><input id="contact-email" name="email" type="email" autoComplete="email" placeholder="you@example.com" required maxLength={254}/>
    <label htmlFor="contact-phone">Mobile number *</label><input id="contact-phone" name="phone" type="tel" autoComplete="tel" inputMode="tel" placeholder="(516) 555-0123" required maxLength={25} onInput={event => event.currentTarget.setCustomValidity("")}/>
    <fieldset><legend>How would you prefer we contact you?</legend><div className="choices">{["Text","Call","Email"].map(method => <label key={method}><input type="radio" name="preferred_contact" value={method} defaultChecked={method === "Text"}/><span>{method} me</span></label>)}</div></fieldset>
    <details><summary>Add a service or question (optional)</summary><label htmlFor="contact-service">I’m interested in</label><select id="contact-service" name="service"><option value="">Choose a service</option><option>Laser hair removal</option><option>Pigmentation removal</option><option>Vein removal</option><option>Facial services</option><option>Not sure yet</option></select><label htmlFor="contact-message">Your question</label><textarea id="contact-message" name="message" rows={3} maxLength={1500}/></details>
    <label className="marketing"><input type="checkbox" name="email_marketing_consent" value="Yes — email offers and updates requested"/><span>Email me special offers and updates from Optimum Laser. (Optional)</span></label>
    <button type="submit">Request my free consultation →</button><p className="small">Our team will contact you during business hours. No appointment is booked yet.</p><p className="small">By submitting, you’re asking Optimum Laser to contact you about this inquiry.</p>
    <p className="direct">Prefer to reach us directly? <a href="tel:5164954908">Call us</a> · <a href="sms:5166690634">Text us</a> · <a href="mailto:optimumlaserhairremoval@gmail.com">Email us</a></p>
  </form></section></div>
  <footer><div><strong>Visit Optimum Laser</strong><p>1180 Northern Blvd, Suite 202<br/>Manhasset, NY 11030</p></div><a href="https://www.google.com/maps/search/?api=1&query=1180+Northern+Blvd+Suite+202+Manhasset+NY+11030" target="_blank" rel="noreferrer">Get directions ↗</a><details><summary>Opening hours</summary><p>Sunday 10am–5pm<br/>Tuesday–Wednesday 9am–6pm<br/>Thursday 9am–8pm<br/>Friday 9am–3pm<br/>Monday &amp; Saturday closed</p></details></footer>
  </main>;
}

