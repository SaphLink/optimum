"use client";
import React, { useEffect } from "react";
import Box from "@/components/layout/box";

const LaserHeroTW: React.FC = () => {
  useEffect(() => {
    if (typeof window === "undefined") return;
    const root = document.documentElement;
    const url = new URL(window.location.href);
    const expParam = url.searchParams.get("heroExp");
    const enable = expParam === "0" ? false : true; // enabled by default; add ?heroExp=0 to revert
    if (enable) root.setAttribute("data-hero-exp", "1"); else root.removeAttribute("data-hero-exp");

    const setMode = () => {
      if (!root.hasAttribute("data-hero-exp")) return;
      const w = window.innerWidth;
      const h = window.innerHeight;
      let mode: "mobile" | "tablet" | "desktop" = "tablet";
      if (w <= 640 || (w <= 812 && h < w)) mode = "mobile";
      else if (w >= 1024 && w / h >= 4 / 3) mode = "desktop";
      else mode = "tablet";
      root.setAttribute("data-hero-mode", mode);
    };

    setMode();
    window.addEventListener("resize", setMode);
    window.addEventListener("orientationchange", setMode);
    return () => {
      window.removeEventListener("resize", setMode);
      window.removeEventListener("orientationchange", setMode);
    };
  }, []);
  return (
    <section className="tw-hero-section relative container mx-auto mt-[5.5rem] sm:mt-[5.5rem] md:mt-[6rem] lg:mt-[5.5rem] bg-gradient-to-r from-[#faecdb] to-[#f9efdd] overflow-hidden">
      <div className="tw-hero-wrap relative h-[900px] sm:h-[780px] md:h-[720px] lg:h-[700px]">
        <div className="tw-hero-grid grid grid-cols-1 md:grid-cols-2 place-items-center h-full">
          {/* Left column: Brown text box (stays left on md+, top on mobile) */}
          <div className="tw-hero-left w-full flex justify-center md:justify-start md:py-10 z-10 order-1 pt-0">
            <Box className="laser-service-box tw-mobile-narrow md:translate-x-4 lg:translate-x-8 md:mt-8 lg:mt-12 md:translate-y-0 relative z-10 max-w-[76%] sm:max-w-[720px] md:max-w-[560px] lg:max-w-[600px] w-[76%] sm:w-auto mx-auto md:mx-0 px-5 py-4 sm:px-8 sm:py-5 md:px-6 md:py-4 lg:py-4 rounded-[12px] mb-8 md:mb-0">
              <div className="title text-center md:text-left leading-tight [font-size:clamp(1.6rem,5vw,2.6rem)] md:[font-size:2.4rem] lg:[font-size:2.6rem] whitespace-normal">
                SAFE, EFFECTIVE & LONG-LASTING
              </div>
              <div className="mini-title text-center md:text-left tracking-[0.3rem]">LASER HAIR REMOVAL</div>
              <div className="line my-2" />
              <div className="desc text-center md:text-left [font-size:1.08rem] md:[font-size:1.0rem] leading-[1.45]">
                <strong>
                  At <strong>Optimum Laser</strong> in Manhasset, Long Island NY we
                  specialize in <strong>laser hair removal</strong> that's safe for
                  men and women of <strong>all skin tones and types</strong> whether
                  you have sensitive skin, thick or fine hair.
                </strong>
              </div>
              <div className="desc text-center md:text-left [font-size:1.08rem] md:[font-size:1.0rem] leading-[1.45]">
                <strong>
                  Using advanced <strong>FDA-approved Cynosure technology</strong>
                  that targets melanin utilizing Alexandrite (755nm) and Nd: YAG
                  (1064nm) laser wavelengths, our laser hair removal treatments are
                  <strong> safe, effective, quick, comfortable, and
                  budget-friendly</strong> — delivering smooth, hair-free skin that
                  lasts.
                </strong>
              </div>
              <div className="desc text-center md:text-left [font-size:1.08rem] md:[font-size:1.0rem] leading-[1.45]">
                <strong>
                  <strong>Forget</strong> the waxing, shaving and
                  <strong> temporary solutions</strong> that will cost you more
                  time and money in the long run.
                </strong>
              </div>
              <div className="custom-button w-fit text-center mx-auto md:mx-0 mt-1">
                <a
                  href="#consultation"
                  className="duration-300 text-[#35281e] bg-white hover:translate-y-[-2px] py-[0.7rem] px-[2.6rem] sm:px-[3rem] rounded-[1rem] w-fit text-[1.2rem] tracking-[0.2rem] inline-block"
                >
                  BOOK A FREE CONSULTATION
                </a>
              </div>
            </Box>
          </div>

          {/* Right column (md+) / second row on mobile: Woman image */}
          <div className="relative w-full h-full order-2">
            <img
              src="../images/cropped-images/Homepage Group 3 Cropped.png"
              alt="image"
              className="tw-hero-woman absolute bottom-0 right-0 object-contain object-right-bottom z-[1]
                         h-[302px]
                         max-[376px]:h-[268px]
                         min-[377px]:max-[400px]:h-[281px]
                         sm:h-[560px]
                         md:h-[92%]
                         lg:h-[94%]"
            />
          </div>
        </div>
      </div>
      {/* Tablet fine-tuning: keep desktop layout but scale down slightly on iPads */}
      <style>{`
        /* EXPERIMENT toggle: enabled unless ?heroExp=0 in URL. Targets only the hero via data-hero-exp attr */
        [data-hero-exp="1"] .tw-hero-section { isolation: isolate; }
        /* Mode selectors driven by a small JS helper on <html data-hero-mode="…"> */
        [data-hero-exp="1"][data-hero-mode="desktop"] .tw-hero-grid { grid-template-columns: 1fr 1fr; }
        [data-hero-exp="1"][data-hero-mode="mobile"] .tw-hero-grid { grid-template-columns: 1fr; }
        /* Ensure mobile keeps stacked layout and the woman bottom flush */
        @media (max-width: 640px) {
          .tw-hero-grid { grid-template-columns: 1fr !important; }
          .tw-hero-woman { bottom: 0 !important; object-position: bottom right !important; }
        }

        /* iPad Mini 744–820: stack like mobile (box full-width, image below flush) */
        @media (min-width: 740px) and (max-width: 820px) {
          .tw-hero-section { margin-top: 6.5rem !important; }
          .tw-hero-grid { grid-template-columns: 1fr !important; align-items: start !important; }
          .tw-hero-left { justify-content: center !important; }
          .tw-hero-grid .laser-service-box { width: 92% !important; max-width: none !important; margin-left: auto !important; margin-right: auto !important; padding: 0.8rem 1.0rem !important; border-radius: 12px !important; transform: none !important; }
          .tw-hero-grid .title { font-size: 2.2rem !important; line-height: 1.05 !important; text-align: left !important; }
          .tw-hero-grid .mini-title { text-align: left !important; }
          .tw-hero-grid .desc { text-align: left !important; }
          .tw-hero-grid .custom-button { text-align: left !important; margin-left: 0 !important; margin-right: auto !important; }
          .tw-hero-wrap { height: 880px !important; }
          .tw-hero-grid .tw-hero-woman { height: 100% !important; bottom: 0 !important; left: 50% !important; right: auto !important; transform: translateX(-50%) scale(2.37) !important; transform-origin: bottom center !important; object-position: bottom center !important; }
        }
        /* iPad Air 820–840: stack like mobile */
        @media (min-width: 820px) and (max-width: 840px) {
          .tw-hero-section { margin-top: 6.8rem !important; }
          .tw-hero-grid { grid-template-columns: 1fr !important; align-items: start !important; }
          .tw-hero-left { justify-content: center !important; }
          .tw-hero-grid .laser-service-box { width: 92% !important; max-width: none !important; margin-left: auto !important; margin-right: auto !important; padding: 0.9rem 1.1rem !important; border-radius: 12px !important; transform: none !important; }
          .tw-hero-grid .title { font-size: 2.3rem !important; line-height: 1.06 !important; text-align: left !important; }
          .tw-hero-grid .mini-title { text-align: left !important; }
          .tw-hero-grid .desc { text-align: left !important; }
          .tw-hero-grid .custom-button { text-align: left !important; margin-left: 0 !important; margin-right: auto !important; }
          .tw-hero-wrap { height: 900px !important; }
          .tw-hero-grid .tw-hero-woman { height: 100% !important; bottom: 0 !important; left: 50% !important; right: auto !important; transform: translateX(-50%) scale(2.37) !important; transform-origin: bottom center !important; object-position: bottom center !important; }
        }
        /* iPad Pro 11" 830–860: stack like mobile */
        @media (min-width: 830px) and (max-width: 860px) {
          .tw-hero-section { margin-top: 7rem !important; }
          .tw-hero-grid { grid-template-columns: 1fr !important; align-items: start !important; }
          .tw-hero-left { justify-content: center !important; }
          .tw-hero-grid .laser-service-box { width: 92% !important; max-width: none !important; margin-left: auto !important; margin-right: auto !important; padding: 0.9rem 1.15rem !important; border-radius: 12px !important; transform: none !important; }
          .tw-hero-grid .title { font-size: 2.4rem !important; line-height: 1.06 !important; text-align: left !important; }
          .tw-hero-grid .mini-title { text-align: left !important; }
          .tw-hero-grid .desc { text-align: left !important; }
          .tw-hero-grid .custom-button { text-align: left !important; margin-left: 0 !important; margin-right: auto !important; }
          .tw-hero-wrap { height: 920px !important; }
          .tw-hero-grid .tw-hero-woman { height: 100% !important; bottom: 0 !important; left: 50% !important; right: auto !important; transform: translateX(-50%) scale(2.37) !important; transform-origin: bottom center !important; object-position: bottom center !important; }
        }
        /* iPad Pro 12.9" 1000–1035: stack like mobile */
        @media (min-width: 1000px) and (max-width: 1035px) {
          .tw-hero-section { margin-top: 7.2rem !important; }
          .tw-hero-grid { grid-template-columns: 1fr !important; align-items: start !important; }
          .tw-hero-left { justify-content: center !important; }
          .tw-hero-grid .laser-service-box { width: 90% !important; max-width: none !important; margin-left: auto !important; margin-right: auto !important; padding: 1rem 1.2rem !important; border-radius: 12px !important; transform: none !important; }
          .tw-hero-grid .title { font-size: 2.5rem !important; line-height: 1.06 !important; text-align: left !important; }
          .tw-hero-grid .mini-title { text-align: left !important; }
          .tw-hero-grid .desc { text-align: left !important; }
          .tw-hero-grid .custom-button { text-align: left !important; margin-left: 0 !important; margin-right: auto !important; }
          .tw-hero-wrap { height: 960px !important; }
          .tw-hero-grid .tw-hero-woman { height: 100% !important; bottom: 0 !important; left: 50% !important; right: auto !important; transform: translateX(-50%) scale(2.37) !important; transform-origin: bottom center !important; object-position: bottom center !important; }
        }

        /* Fluid tablet default (covers odd Android tablets): 700–1200px */
        @media (min-width: 700px) and (max-width: 1200px) {
          .tw-hero-grid { grid-template-columns: 1fr !important; }
          .tw-hero-left { justify-content: center; }
          .tw-hero-grid .laser-service-box { width: clamp(88%, 92vw, 92%); padding: clamp(0.8rem, 1.2vw, 1.1rem) clamp(1rem, 1.6vw, 1.25rem); }
          .tw-hero-grid .title { font-size: clamp(2.0rem, 2.8vw, 2.5rem); }
          .tw-hero-wrap { height: clamp(820px, 92vh, 960px); }
          .tw-hero-grid .tw-hero-woman { height: clamp(80%, 88vh, 96%); bottom: 0; left: 50%; transform: translateX(-50%); object-position: bottom center; }
        }

        /* Short viewports: reduce sizes slightly to avoid overlap */
        @media (max-height: 700px) and (min-width: 700px) and (max-width: 1200px) {
          .tw-hero-grid .laser-service-box { padding: 0.7rem 1rem; }
          .tw-hero-grid .tw-hero-woman { height: 88%; }
        }

        /* Very tall tablets: give a bit more space */
        @media (min-height: 1000px) and (min-width: 700px) and (max-width: 1200px) {
          .tw-hero-grid .tw-hero-woman { height: 96%; }
        }

        /* DEVICE-SPECIFIC FIXES FOR TABLET FLUSH */
        /* Surface Duo portrait (540x720): treat as tablet and push image to be flush/slightly tucked */
        @media (width: 540px) and (orientation: portrait) {
          .tw-hero-grid { grid-template-columns: 1fr !important; }
          .tw-hero-left { justify-content: center !important; }
          .tw-hero-grid .laser-service-box { width: 94% !important; margin-left: auto !important; margin-right: auto !important; margin-bottom: -40px !important; }
          .tw-hero-grid .tw-hero-woman { height: 140% !important; bottom: 0 !important; left: 50% !important; transform: translateX(-50%) !important; object-position: bottom center !important; }
        }

        /* Narrow tall tablets (range to catch Duo variants) */
        @media (min-width: 520px) and (max-width: 600px) and (min-height: 700px) and (orientation: portrait) {
          .tw-hero-grid .laser-service-box { margin-bottom: -36px !important; }
          .tw-hero-grid .tw-hero-woman { height: 136% !important; }
        }

        /* Surface Pro portrait (912x1368): ensure head reaches top band slightly */
        @media (width: 912px) and (orientation: portrait) {
          .tw-hero-grid .laser-service-box { margin-bottom: -44px !important; }
          .tw-hero-grid .tw-hero-woman { height: 146% !important; bottom: 0 !important; object-position: bottom center !important; }
        }

        /* Wide tall tablets around Surface Pro width */
        @media (min-width: 880px) and (max-width: 940px) and (min-height: 1200px) and (orientation: portrait) {
          .tw-hero-grid .laser-service-box { margin-bottom: -40px !important; }
          .tw-hero-grid .tw-hero-woman { height: 140% !important; }
        }

        /* Mobile outlier range: 443px–519px widths – tighten beige gap above the woman's head */
        @media (min-width: 443px) and (max-width: 519px) {
          .tw-hero-grid .laser-service-box { margin-bottom: 0.25rem !important; }
          .tw-hero-grid .tw-hero-woman { height: 380px !important; bottom: 0 !important; object-position: bottom center !important; }
        }

        /* Mobile outlier range: 601px–639px widths – same tightening */
        @media (min-width: 601px) and (max-width: 639px) {
          .tw-hero-grid .laser-service-box { margin-bottom: 0.25rem !important; }
          .tw-hero-grid .tw-hero-woman { height: 420px !important; bottom: 0 !important; object-position: bottom center !important; }
        }

        /* Tablet outlier range: 700px–739px – woman image too small, enlarge and tighten gap */
        @media (min-width: 700px) and (max-width: 739px) {
          .tw-hero-grid .laser-service-box { margin-bottom: 0.2rem !important; }
          .tw-hero-wrap { height: 940px !important; }
          .tw-hero-grid .tw-hero-woman { height: 100% !important; bottom: 0 !important; left: 50% !important; right: auto !important; transform: translateX(-50%) scale(1.60) !important; transform-origin: bottom center !important; object-position: bottom center !important; }
        }

        /* Tablet/Desktop outlier range: 861px–999px (exclude exact 912px width) */
        @media (min-width: 861px) and (max-width: 999px) {
          .tw-hero-grid .laser-service-box { margin-bottom: -16px !important; }
          .tw-hero-wrap { height: 980px !important; }
          .tw-hero-grid .tw-hero-woman { height: 110% !important; bottom: 0 !important; left: 50% !important; right: auto !important; transform: translateX(-50%) scale(1.67) !important; transform-origin: bottom center !important; object-position: bottom center !important; }
        }
        /* Override for Surface Pro portrait (width 912px) so it retains its dedicated tuning */
        @media (width: 912px) {
          .tw-hero-grid .tw-hero-woman { transform: none !important; }
        }

        /* Desktop narrow range: 1036px–1200px – enlarge woman and tighten gap */
        @media (min-width: 1036px) and (max-width: 1200px) {
          /* Center the brown box in the beige section */
          .tw-hero-left { justify-content: center !important; }
          .tw-hero-grid .laser-service-box { margin-bottom: -12px !important; margin-left: auto !important; margin-right: auto !important; transform: none !important; }
          .tw-hero-wrap { height: 980px !important; }
          /* Make woman slightly smaller (by ~10%) but keep bottom-right anchored */
          .tw-hero-grid .tw-hero-woman { height: 112% !important; bottom: 0 !important; right: 0 !important; left: auto !important; transform: scale(1.53) !important; transform-origin: bottom right !important; object-position: bottom right !important; }
        }

        /* Nest Hub Max (1280x800 landscape): desktop layout; enlarge woman by ~20% with bottom-right anchoring */
        @media (width: 1280px) and (height: 800px) and (orientation: landscape) {
          .tw-hero-grid .tw-hero-woman { transform: scale(1.20) !important; transform-origin: bottom right !important; }
        }

        /* Narrow desktop band 1201–1279px: raise the brown box much higher */
        @media (min-width: 1201px) and (max-width: 1279px) {
          /* keep neutral to avoid affecting original hero */
        }
        
      `}</style>
    </section>
  );
};

export default LaserHeroTW;


