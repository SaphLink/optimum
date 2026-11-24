/* eslint-disable react/no-unescaped-entities, @next/next/no-img-element */
"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { useOfferPopup } from "./popup";

const serif = { fontFamily: "Georgia, Times New Roman, serif" };
const bookingUrl = "https://plugin.myonlineappointment.com/External/BookingPlugin/?sid=0&guid=dc3faad1-130b-4594-9fd0-27c386264ba3&customerId=29772";

export default function Home() {
  const montage = useRef<HTMLVideoElement>(null);
  const [showPackageOffer, setShowPackageOffer] = useState(false);
  const revealPackageOffer = useCallback(() => setShowPackageOffer(true), []);
  const openOffer = useOfferPopup(revealPackageOffer);

  useEffect(() => {
    const video = montage.current;
    if (!video) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const syncPlayback = () => {
      video.autoplay = !reducedMotion.matches;
      if (reducedMotion.matches) video.pause();
      else void video.play().catch(() => {});
    };
    video.muted = true;
    syncPlayback();
    reducedMotion.addEventListener("change", syncPlayback);
    return () => reducedMotion.removeEventListener("change", syncPlayback);
  }, []);

  return <main className="min-h-screen bg-[#fbf0df] pb-[calc(80px+env(safe-area-inset-bottom))] text-[#35281e] sm:pb-0">
    {showPackageOffer && (
      <aside
        aria-label="Laser packages offer"
        className="fixed left-3 bottom-[calc(76px+env(safe-area-inset-bottom))] z-[90] flex max-w-[calc(100%-24px)] items-center rounded-full border border-[#ecd0ad]/40 bg-[#35281e] text-[#fff9f2] shadow-lg sm:bottom-5 sm:left-5"
      >
        <button type="button" onClick={openOffer} aria-haspopup="dialog" className="flex min-h-[44px] min-w-0 flex-col items-start justify-center px-2.5 text-left text-[11px] font-bold leading-tight hover:underline focus-visible:underline">
          <span className="whitespace-nowrap text-[#ecd0ad]">UP TO 50% OFF</span>
          <span className="whitespace-nowrap">LASER PACKAGES</span>
        </button>
        <button
          type="button"
          aria-label="Dismiss laser packages offer"
          onClick={() => setShowPackageOffer(false)}
          className="grid h-[44px] w-[44px] shrink-0 place-items-center rounded-full text-base hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#ecd0ad]"
        >
          <span aria-hidden="true">&times;</span>
        </button>
      </aside>
    )}
    <section className="pt-[102px] lg:pt-[161px]" aria-labelledby="homepage-video-title">
      <div className="relative isolate grid aspect-video w-full items-end lg:max-h-[70vh]">
        <video
          ref={montage}
          className="pointer-events-none absolute inset-0 h-full w-full object-contain lg:object-cover"
          src="/videos/optimum-homepage.mp4"
          poster="/videos/optimum-homepage-poster.webp"
          preload="auto"
          autoPlay
          muted
          loop
          playsInline
          aria-hidden="true"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#241b15]/80 via-transparent to-transparent" />
        <div className="relative grid justify-items-center gap-2 px-4 pb-4 text-center text-white sm:gap-4 sm:pb-9">
          <h1 id="homepage-video-title" className="text-[clamp(1.55rem,6vw,4.5rem)] leading-tight" style={serif}>
            Laser Hair Removal
          </h1>
          <p className="max-w-[32rem] text-[13px] leading-snug text-white [text-shadow:0_1px_4px_#241b15] sm:text-lg">
            Long Island's Primary Laser Hair Removal Studio.
          </p>
          <a className="rounded-lg bg-[#fbf0df] px-4 py-3 text-sm font-bold text-[#35281e] sm:px-6" href="/contact-us">
            Request a Free Consultation
          </a>
        </div>
      </div>
    </section>
    <section className="mx-auto grid max-w-6xl gap-7 px-5 pb-14 pt-12 sm:px-8 sm:pt-16 lg:pb-20">
      <div>
        <p className="text-xs font-bold tracking-[0.26em] text-[#8a593d]">MANHASSET · LONG ISLAND</p>
        <h2 className="mt-4 max-w-3xl text-5xl leading-[.98] tracking-[-0.04em] sm:text-7xl" style={serif}>Laser hair removal that feels <em className="font-normal text-[#ae7c50]">personal.</em></h2>
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-[#5b4638]">Personalized laser hair removal using the FDA-cleared Cynosure Elite+ system. Every treatment plan is personalized for your skin type, hair type, goals, and comfort—so you can feel confident from consultation to results.</p>
        <a className="mx-auto mt-7 block w-fit rounded-xl bg-[#35281e] px-6 py-4 font-bold text-white" href={bookingUrl}>Book Online</a>
        <div className="mt-7 flex flex-wrap gap-2 text-xs font-bold tracking-[0.1em] text-[#70432b]"><span className="rounded-full bg-white px-3 py-2">4.9★ GOOGLE RATING</span><span className="rounded-full bg-white px-3 py-2">300+ REVIEWS</span><span className="rounded-full bg-white px-3 py-2">15+ YEARS</span><span className="rounded-full bg-white px-3 py-2">ALL SKIN TYPES</span></div>
      </div>
    </section>

    <section className="bg-[#fffaf5] px-5 py-16 sm:px-8"><div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2 lg:gap-16"><div><p className="text-xs font-bold tracking-[0.25em] text-[#8a593d]">MANHASSET · LONG ISLAND</p><h2 className="mt-4 text-4xl leading-tight sm:text-5xl" style={serif}>Laser Hair Removal in <em className="font-normal text-[#ae7c50]">Manhasset, NY</em></h2><p className="mt-6 max-w-xl text-lg leading-relaxed text-[#5b4638]">Personalized laser hair removal near Great Neck, Roslyn, Port Washington, Garden City, and nearby Nassau County communities. Every plan is tailored to your goals, skin, hair, schedule, and comfort.</p></div><div><p className="text-xs font-bold tracking-[0.25em] text-[#8a593d]">OUR LASER TECHNOLOGY</p><h2 className="mt-4 text-4xl leading-tight sm:text-5xl" style={serif}>Cynosure Elite+ <em className="font-normal text-[#ae7c50]">Dual-Wavelength Laser</em></h2><p className="mt-6 max-w-xl text-lg leading-relaxed text-[#5b4638]">We use the FDA-cleared Cynosure Elite+, a professional-grade system that pairs two established laser wavelengths: 755 nm Alexandrite and 1064 nm Nd:YAG. The platform can be used across all six Fitzpatrick skin types. We assess your skin tone and hair type to select the appropriate wavelength and settings for your treatment.</p><p className="mt-4 text-lg leading-relaxed text-[#5b4638]">Cool air flows throughout your session to help keep the skin comfortable as the laser targets the hair follicles.</p></div></div><div className="mx-auto mt-12 max-w-6xl rounded-2xl border border-[#eadbcd] bg-white p-7 sm:p-9"><p className="text-xs font-bold tracking-[0.25em] text-[#8a593d]">POPULAR TREATMENT AREAS</p><div className="mt-5 flex flex-wrap gap-3">{["Face & upper lip", "Underarms", "Bikini & Brazilian", "Legs", "Back & shoulders", "Arms & chest"].map((area) => <span key={area} className="rounded-full bg-[#f5e7d6] px-4 py-2 font-semibold text-[#5b4638]">{area}</span>)}</div></div></section>

    <section className="bg-white px-5 py-16 sm:px-8"><div className="mx-auto max-w-5xl text-center">
      <p className="text-xs font-bold tracking-[0.25em] text-[#8a593d]">WHY OPTIMUM LASER</p>
      <h2 className="mt-4 text-4xl leading-tight sm:text-6xl" style={serif}>Personalized care. <em className="font-normal text-[#ae7c50]">Proven results.</em></h2>
      <p className="mx-auto mt-5 max-w-3xl text-lg leading-relaxed text-[#5b4638]">We don't treat clients like numbers—we treat them like family. Every visit includes personalized, one-on-one care focused on your goals, comfort, and achieving the best possible results for you.</p>
      <div className="mt-9 grid gap-4 text-left sm:grid-cols-3"><div className="rounded-2xl bg-[#fbf0df] p-6"><b className="text-2xl" style={serif}>15+ years</b><p className="mt-2 text-sm leading-relaxed text-[#5b4638]">of expertise and thoughtful, individualized treatment.</p></div><div className="rounded-2xl bg-[#fbf0df] p-6"><b className="text-2xl" style={serif}>4.9-star</b><p className="mt-2 text-sm leading-relaxed text-[#5b4638]">Google rating from over 300 reviews.</p></div><div className="rounded-2xl bg-[#fbf0df] p-6"><b className="text-2xl" style={serif}>All skin types</b><p className="mt-2 text-sm leading-relaxed text-[#5b4638]">receive a treatment plan tailored to their needs.</p></div></div>
    </div></section>

    <section className="px-5 py-16 sm:px-8"><div className="mx-auto grid max-w-5xl gap-8 lg:grid-cols-2"><div><p className="text-xs font-bold tracking-[0.25em] text-[#8a593d]">WHY LASER</p><h2 className="mt-4 text-4xl leading-tight sm:text-5xl" style={serif}>More time for <em className="font-normal text-[#ae7c50]">you.</em></h2><p className="mt-5 text-lg leading-relaxed text-[#5b4638]">Shaving and waxing are temporary solutions that require ongoing upkeep. Laser hair removal offers long-term, permanent hair reduction—up to 90%*—with a personalized plan for your skin, hair, and goals.</p><p className="mt-4 text-sm text-[#6e5948]">*Individual results may vary.</p></div><div className="rounded-[2rem] bg-[#35281e] p-8 text-[#fff9f2]"><p className="text-xs font-bold tracking-[0.25em] text-[#ecd0ad]">VISIT US</p><h2 className="mt-4 text-4xl leading-tight" style={serif}>Easy to get to.<br/><em className="font-normal text-[#ecd0ad]">Easy to return to.</em></h2><p className="mt-5 leading-relaxed text-[#eadbcd]">Visit us at 1180 Northern Blvd, Suite 202 in Manhasset—about a 10-minute walk from the Manhasset LIRR station. Parking is available right on the premises for a smoother visit from start to finish.</p><a className="mt-6 inline-block rounded-xl bg-[#ecd0ad] px-5 py-3 font-bold text-[#35281e]" href="https://www.google.com/maps/search/?api=1&query=1180+Northern+Blvd+Suite+202+Manhasset+NY+11030" target="_blank" rel="noopener noreferrer">Get Directions</a></div></div></section>

    <section className="bg-[#f5e7d6] px-5 py-16 sm:px-8"><div className="mx-auto max-w-6xl"><p className="text-center text-xs font-bold tracking-[0.25em] text-[#8a593d]">CLIENT EXPERIENCE</p><h2 className="mt-4 text-center text-4xl sm:text-5xl" style={serif}>4.9 stars. <em className="font-normal text-[#ae7c50]">Real client experiences.</em></h2><p className="mt-4 text-center text-sm text-[#6e5948]">★★★★★ &nbsp; Over 300+ reviews · 4.9-star Google rating</p><div className="mt-9 grid gap-5 md:grid-cols-3"><figure className="rounded-2xl bg-white p-7"><blockquote className="text-lg leading-relaxed">“My experience at Optimum Laser has been nothing short of the best so far.”</blockquote><figcaption className="mt-6 text-sm font-bold text-[#75472f]">— Sarah Liberow<br/><span className="font-normal text-[#6e5948]">Google review</span></figcaption></figure><figure className="rounded-2xl bg-white p-7"><blockquote className="text-lg leading-relaxed">“I’ve been coming here for laser hair removal on my face since 11/14/25 and I seriously love my results so much.”</blockquote><figcaption className="mt-6 text-sm font-bold text-[#75472f]">— Aayesha Khan<br/><span className="font-normal text-[#6e5948]">Google review</span></figcaption></figure><figure className="rounded-2xl bg-white p-7"><blockquote className="text-lg leading-relaxed">“I had a consultation with Carlee and she was the BEST!!”</blockquote><figcaption className="mt-6 text-sm font-bold text-[#75472f]">— Julia Accardi<br/><span className="font-normal text-[#6e5948]">Google review</span></figcaption></figure></div><div className="mt-8 text-center"><a className="font-bold underline underline-offset-4" href="https://www.google.com/maps/search/?api=1&query=Optimum+Laser+1180+Northern+Blvd+Manhasset+NY" target="_blank" rel="noopener noreferrer">Read reviews on Google →</a></div></div></section>

    <section className="bg-white px-5 py-16 sm:px-8"><div className="mx-auto max-w-6xl text-center"><p className="text-xs font-bold tracking-[0.25em] text-[#8a593d]">BEFORE & AFTER</p><h2 className="mt-4 text-4xl sm:text-5xl" style={serif}>See the <em className="font-normal text-[#ae7c50]">difference.</em></h2><div className="mt-9 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"><figure className="rounded-2xl border border-[#eadbcd] bg-[#fbf0df] p-3"><div className="grid grid-cols-2 gap-3"><img className="aspect-[4/5] w-full rounded-xl object-cover object-center" src="/images/beforeandafter/1a.jpg" alt="Face before treatment"/><img className="aspect-[4/5] w-full rounded-xl object-cover object-center" src="/images/beforeandafter/1b.jpg" alt="Face after treatment"/></div></figure><figure className="rounded-2xl border border-[#eadbcd] bg-[#fbf0df] p-3"><div className="grid grid-cols-2 gap-3"><img className="aspect-[4/5] w-full rounded-xl object-cover object-center" src="/images/beforeandafter/2a.jpg" alt="Bikini before treatment"/><img className="aspect-[4/5] w-full rounded-xl object-cover object-center" src="/images/beforeandafter/2b.jpg" alt="Bikini after treatment"/></div></figure><figure className="rounded-2xl border border-[#eadbcd] bg-[#fbf0df] p-3"><div className="grid grid-cols-2 gap-3"><img className="aspect-[4/5] w-full rounded-xl object-cover object-center" src="/images/beforeandafter/3a.jpg" alt="Back before treatment"/><img className="aspect-[4/5] w-full rounded-xl object-cover object-center" src="/images/beforeandafter/3b.jpg" alt="Back after treatment"/></div></figure></div><p className="mt-6 text-sm text-[#6e5948]">Individual results vary. Treatment suitability is assessed at consultation.</p><a className="mt-6 inline-block rounded-xl bg-[#35281e] px-6 py-4 font-bold text-white" href="/contact-us">Request a Free Consultation</a></div></section>

    <section className="px-5 py-16 sm:px-8"><div className="mx-auto max-w-4xl"><p className="text-center text-xs font-bold tracking-[0.25em] text-[#8a593d]">COMMON QUESTIONS</p><h2 className="mt-4 text-center text-4xl sm:text-5xl" style={serif}>Frequently Asked Questions</h2><div className="mt-8 divide-y divide-[#eadbcd] rounded-2xl border border-[#eadbcd] bg-[#fffdfb] px-6"><details className="py-5"><summary className="cursor-pointer font-bold">Is laser hair removal safe for all skin types?</summary><p className="mt-3 leading-relaxed text-[#5b4638]">Yes. We treat all skin types and personalize each treatment plan after discussing your skin, hair, treatment area, and goals during your consultation.</p></details><details className="py-5"><summary className="cursor-pointer font-bold">How many sessions will I need?</summary><p className="mt-3 leading-relaxed text-[#5b4638]">We recommend a minimum of 6 sessions. Some areas may need more based on your hair growth, treatment area, and individual goals.</p></details><details className="py-5"><summary className="cursor-pointer font-bold">When will I see results?</summary><p className="mt-3 leading-relaxed text-[#5b4638]">Even after one session, hair can become thinner and grow in slower. Results build over a series of treatments.</p></details><details className="py-5"><summary className="cursor-pointer font-bold">What does treatment feel like?</summary><p className="mt-3 leading-relaxed text-[#5b4638]">Most clients describe a quick snapping sensation. We explain what to expect and prioritize your comfort throughout the visit.</p></details><details className="py-5"><summary className="cursor-pointer font-bold">How should I prepare for a session?</summary><p className="mt-3 leading-relaxed text-[#5b4638]">Your provider will share clear preparation instructions based on the treatment area and your plan.</p></details><details className="py-5"><summary className="cursor-pointer font-bold">How long does a session take?</summary><p className="mt-3 leading-relaxed text-[#5b4638]">Timing depends on the area being treated. Your consultation is the best time to discuss what your appointments will look like.</p></details><details className="py-5"><summary className="cursor-pointer font-bold">Which areas can be treated?</summary><p className="mt-3 leading-relaxed text-[#5b4638]">We can discuss the areas you would like to treat and recommend a plan built around your goals.</p></details><details className="py-5"><summary className="cursor-pointer font-bold">Is laser hair removal permanent?</summary><p className="mt-3 leading-relaxed text-[#5b4638]">Laser hair removal is designed for long-term, permanent hair reduction. Individual results may vary, and maintenance sessions may be recommended.</p></details></div></div></section>

    <style dangerouslySetInnerHTML={{__html: `#ol-footer{background:#35281e;color:#fff9f2;padding:40px 28px 24px;font-family:Aptos,'Segoe UI',sans-serif}#ol-footer *{box-sizing:border-box}#ol-footer .ol-footer-inner{max-width:1160px;margin:auto}#ol-footer .ol-footer-top{display:flex;align-items:center;justify-content:space-between;gap:24px;padding-bottom:28px;border-bottom:1px solid #725945}#ol-footer .ol-footer-logo img{display:block;width:165px;height:auto;filter:brightness(0) invert(1)}#ol-footer .ol-footer-book{display:inline-flex;align-items:center;gap:24px;background:#ecd0ad;color:#35281e;padding:16px 22px;border-radius:10px;font-size:15px;font-weight:700}#ol-footer .ol-footer-columns{display:grid;grid-template-columns:1.25fr 1fr 1fr 1.1fr;gap:32px;padding:32px 0}#ol-footer section{min-width:0}#ol-footer h2{font:700 12px/1.4 Aptos,'Segoe UI',sans-serif;text-transform:uppercase;letter-spacing:2px;color:#ecd0ad;margin:0 0 18px}#ol-footer a{color:inherit;text-decoration:none}#ol-footer a:hover{text-decoration:underline;text-underline-offset:4px}#ol-footer a:focus-visible{outline:2px solid #ecd0ad;outline-offset:5px}#ol-footer section a{display:block;font-size:14px;line-height:1.7;color:#eadbcd;margin-bottom:9px}#ol-footer .ol-footer-directions{margin-top:18px;color:#ecd0ad}#ol-footer nav{display:block;position:static;background:none;width:auto}#ol-footer dl{margin:0;font-size:13px;color:#eadbcd}#ol-footer dl div{display:flex;justify-content:space-between;gap:12px;margin-bottom:6px}#ol-footer dd{margin:0;white-space:nowrap}#ol-footer .ol-footer-bottom{display:flex;justify-content:space-between;gap:20px;border-top:1px solid #725945;padding-top:20px;font-size:12px;color:#d8bda4}@media(max-width:850px){#ol-footer .ol-footer-columns{gap:26px;grid-template-columns:repeat(2,minmax(0,1fr))}}@media(max-width:480px){#ol-footer{padding:28px 20px 24px}#ol-footer .ol-footer-top{flex-wrap:wrap;gap:18px}#ol-footer .ol-footer-logo img{width:140px}#ol-footer .ol-footer-book{font-size:13px;padding:13px 15px}#ol-footer .ol-footer-columns{gap:26px 18px}#ol-footer section a{font-size:12px;overflow-wrap:anywhere}#ol-footer h2{font-size:11px;letter-spacing:1px}#ol-footer dl{font-size:11px}#ol-footer dl div{gap:6px}#ol-footer .ol-footer-bottom{flex-wrap:wrap;font-size:11px}}`}} />
    <footer id="ol-footer"><div className="ol-footer-inner"><div className="ol-footer-top"><a className="ol-footer-logo" href="/" aria-label="Optimum Laser home"><img alt="Optimum Laser" loading="lazy" width="180" height="70" decoding="async" data-nimg="1" className="h-auto w-36 brightness-0 invert" style={{"color":"transparent"}} src="/images/homepage/Optimum Laser Brown Logo.png" /></a><a className="ol-footer-book" href="/contact-us">Request a Free Consultation <span aria-hidden="true">→</span></a></div><div className="ol-footer-columns"><section><h2>Visit us</h2><a href="https://www.google.com/maps/search/?api=1&amp;query=1180+Northern+Blvd+Suite+202+Manhasset+NY+11030" target="_blank" rel="noopener noreferrer">1180 Northern Blvd, Suite 202<br />Manhasset, NY 11030</a><a className="ol-footer-directions" href="https://www.google.com/maps/search/?api=1&amp;query=1180+Northern+Blvd+Suite+202+Manhasset+NY+11030" target="_blank" rel="noopener noreferrer">Get directions →</a></section><section><h2>Our services</h2><nav aria-label="Footer services"><a href="/services/laser-service">Laser Hair Removal</a><a href="/services/pigmentation-service">Pigmentation Removal</a><a href="/services/vein-removal">Vein Removal</a><a href="/services/facial-service">Facial Services</a></nav></section><section><h2>Contact us</h2><a href="tel:516-495-4908">Call 516-495-4908</a><a href="sms:5166690634">Text 516-669-0634</a><a href="mailto:optimumlaserhairremoval@gmail.com">Email us</a><a href="/about-us">About Optimum</a></section><section><h2>Opening hours</h2><dl><div><dt>Sunday</dt><dd>10am–5pm</dd></div><div><dt>Monday</dt><dd>Closed</dd></div><div><dt>Tue–Wed</dt><dd>9am–6pm</dd></div><div><dt>Thursday</dt><dd>9am–8pm</dd></div><div><dt>Friday</dt><dd>9am–3pm</dd></div><div><dt>Saturday</dt><dd>Closed</dd></div></dl></section></div><div className="ol-footer-bottom"><span>© 2026 Optimum Laser. All rights reserved.</span><a href="/contact-us">Request a Free Consultation →</a></div></div></footer><div id="ol-mobile-book" className="fixed inset-x-0 bottom-0 z-[400] grid grid-cols-[minmax(0,1fr)_auto_auto] gap-2 bg-[#fbf0df] px-3 pt-2 pb-[calc(12px+env(safe-area-inset-bottom))] sm:hidden">
      <a className="grid min-h-[48px] place-items-center rounded-xl bg-[#35281e] px-2 text-center text-[13px] font-bold text-white" href="/contact-us">Request a Free Consultation</a>
      <a className="grid min-h-[48px] min-w-[48px] place-items-center rounded-xl bg-[#ecd0ad] px-3 text-[13px] font-bold" href="tel:516-495-4908">Call</a>
      <a id="ol-mobile-text-inline" className="grid min-h-[48px] min-w-[48px] !mr-0 place-items-center rounded-xl bg-[#ecd0ad] px-3 text-[13px] font-bold" href="sms:5166690634">Text</a>
    </div>
    <style>{'body:has(#ol-mobile-text-inline) #ol-mobile-text{display:none!important}'}</style></main>;
}
