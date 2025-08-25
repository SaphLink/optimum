"use client";
import Input, { DoubleInput } from "@/components/Input";
import CustomButton from "@/components/button";
import { Helmet } from "react-helmet";
import Footer, { FooterIcon, SocialIcons } from "@/components/footer";
import Box from "@/components/layout/box";
import "aos/dist/aos.css";
import LaserHeroTW from "@/components/LaserHeroTW";
import BoxSection, { BoxSplitSection } from "@/components/layout/boxSection";
import FlowerSection from "@/components/layout/flowerSection";
const ContactBannerIpad = dynamic(
  () => import("@/components/ContactBannerIpad"),
  { ssr: false }
);
import Section, {
  SectionDescription,
  SectionTitle,
} from "@/components/layout/section";
import React, { useEffect, useRef } from "react";
import ImageBox from "@/components/imageBox";
import { StyledIcons } from "@/components/styledIcons";
import { BiLogoFacebook } from "react-icons/bi";
import { AiOutlineInstagram } from "react-icons/ai";
import { FaPhoneAlt } from "react-icons/fa";
import { GrMail } from "react-icons/gr";
import BeforeAfterCarousel from "../../../components/BeforeAfterCarousel";
import CollapseSection from "@/components/layout/collapseSection";
import Slider from "@/components/Slider";
import ReviewCard from "@/components/ReviewCard";
import styled from "styled-components";
import dynamic from "next/dynamic";

const Img3 = styled.img`
  position: absolute;
  bottom: 0;
  right: 0;
  height: 90%;
  object-fit: contain;
  object-position: center;
  // z-index: 1;

  /* iPad Air portrait: enlarge woman so head reaches top */
  @media only screen and (min-width: 810px) and (max-width: 840px) {
    height: 96% !important;
    object-position: bottom right;
  }

  @media only screen and (max-width: 768px) {
    height: auto;
    width: auto;
    right: 0;
    bottom: 0;
    z-index: 1;
    object-position: bottom right;
    display: block;
    margin-bottom: -16px; /* tighten beige gap above brown section */
  }

  /* On tablets/phones, keep relative flow so the image remains visible and sized naturally */
  @media only screen and (max-width: 1024px) {
    position: relative !important;
    object-position: bottom right !important;
  }

  /* iPhone SE portrait: slightly taller to close beige gap */
  @media only screen and (max-width: 376px) and (orientation: portrait) {
    height: auto !important;
    bottom: 0 !important;
    transform: none !important;
  }

  /* iPhone 12/13/14 (390px width) portrait: taller to close gap */
  @media only screen and (width: 390px) and (max-height: 900px) and (orientation: portrait) {
    height: auto !important;
    bottom: 0 !important;
    transform: none !important;
  }

  /* iPhone 11/Plus (~414px width) portrait: slightly taller */
  @media only screen and (min-width: 401px) and (max-width: 430px) and (orientation: portrait) {
    height: auto !important;
    bottom: 0 !important;
    transform: none !important;
  }
`;
const Img4 = styled.img`
  position: absolute;
  bottom: 0;
  left: 0;
  height: 85%;
  object-fit: contain;
  object-position: bottom;
`;
const page = () => {
  const heroRef = useRef<HTMLDivElement | null>(null);
  const imgRef = useRef<HTMLImageElement | null>(null);
  useEffect(() => {
    // Rely solely on CSS for mobile sizing/positioning to keep device-specific
    // adjustments consistent (SE, 12/13/14, Pro Max). No JS overrides.
  }, []);
  // Narrow desktop detector to forcibly shrink the hero box so it fully fits in the beige area
  const [shrinkBox, setShrinkBox] = React.useState(false);
  React.useEffect(() => {
    const onResize = () => {
      if (typeof window === "undefined") return;
      const w = window.innerWidth;
      const params = new URL(window.location.href).searchParams;
      const force = params.get("boxdebug") === "1";
      setShrinkBox(force || (w >= 1201 && w <= 1279));
      if (force) {
        // eslint-disable-next-line no-console
        console.log("[DEBUG] boxdebug=1 forcing hero box shrink; width=", w);
      }
    };
    onResize();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  // As a final step, set inline styles on the exact element after mount and on resize
  React.useEffect(() => {
    if (typeof window === "undefined") return;
    const apply = () => {
      const w = window.innerWidth;
      const inBand = w >= 1201 && w <= 1279;
      const el = document.querySelector(
        "div.box.laser-service-box"
      ) as HTMLElement | null;
      if (!inBand || !el) return;
      // Make the box wider and much shorter (top stays fixed)
      el.style.setProperty("transform", "none", "important");
      el.style.setProperty("transform-origin", "top left", "important");
      el.style.setProperty("max-width", "1040px", "important");
      el.style.setProperty("width", "1040px", "important");
      // Reduce overall height by ~7px: subtract from bottom padding
      el.style.setProperty(
        "padding",
        "0.6rem 1.0rem 0.156rem 1.0rem",
        "important"
      );
      // Also gently reduce text inside to avoid overflow
      const title = el.querySelector(".title") as HTMLElement | null;
      const descs = el.querySelectorAll(".desc") as NodeListOf<HTMLElement>;
      if (title) title.style.setProperty("font-size", "1.9rem", "important");
      descs.forEach((d) => {
        d.style.setProperty("font-size", "0.9rem", "important");
        d.style.setProperty("line-height", "1.32", "important");
        d.style.setProperty("margin", "0.15rem 0", "important");
      });
    };
    // initial and a few retries in case of hydration timing
    apply();
    const id = window.setInterval(apply, 250);
    setTimeout(() => window.clearInterval(id), 2000);
    window.addEventListener("resize", apply);
    return () => window.removeEventListener("resize", apply);
  }, []);

  return (
    <>
      {/* Lazy-load iPad-only banner (same as Contact/About usage) */}
      {/** @ts-ignore **/}
      {null}

      <Helmet>
        <title>Laser Hair Removal in New York - Optimum Laser</title>
        <meta name="description" content="This is the description of my page" />
      </Helmet>
      {/* Tailwind-based hero (disabled) */}
      <div className="hidden">
        <LaserHeroTW />
      </div>

      {/* Original hero (enabled for all) */}
      <div className="w-full bg-gradient-to-r from-[#faecdb] to-[#f9efdd]">
        <div
          ref={heroRef}
          className="bg-gradient-to-r from-[#faecdb] to-[#f9efdd]  relative lg:h-[750px] mt-[9rem] sm:mt-[7rem] md:mt-[6rem]  lg:mt-[5.5rem] 2xl:container mx-auto  flex items-baseline md:items-center justify-center"
          // data-aos="fade-up"
          // data-aos-duration="1000"
        >
          <div className="grid lg:grid-cols-2 max-lg:place-items-center  z-10 w-full box-wrap">
            <div className="md:py-10 py-0 m-4 mb-0 laser-hero-left md:w-[450px] lg:w-[650px] md:translate-x-10 z-10 relative">
              <Box
                id="heroBox"
                className="laser-service-box laser-hero-box md:translate-x-4 lg:translate-x-8 lg:mt-6 md:translate-y-10 lg:translate-y-0 "
                style={
                  shrinkBox
                    ? {
                        transform: "scale(0.78)",
                        transformOrigin: "top left",
                        maxWidth: "600px",
                        // outline: "2px dashed rgba(0,128,255,0.6)",
                      }
                    : undefined
                }
              >
                <div
                  className="title text-center md:text-left "
                  style={{
                    fontSize: "calc(4rem * 0.62)",
                    lineHeight: 1.05,
                    // whiteSpace: "nowrap",
                  }}
                >
                  SAFE, EFFECTIVE & LONG-LASTING
                </div>
                <div className="mini-title text-center md:text-left">
                  LASER HAIR REMOVAL
                </div>
                <div className="line"></div>
                <div
                  className="desc"
                  style={{ fontSize: "1.15rem", lineHeight: 1.45 }}
                >
                  <strong>
                    At <strong>Optimum Laser</strong> in Manhasset, Long Island
                    NY we specialize in <strong>laser hair removal</strong>{" "}
                    that's safe for men and women of{" "}
                    <strong>all skin tones and types</strong> whether you have
                    sensitive skin, thick or fine hair.
                  </strong>
                </div>
                <div
                  className="desc"
                  style={{ fontSize: "1.15rem", lineHeight: 1.45 }}
                >
                  <strong>
                    Using advanced{" "}
                    <strong>FDA-approved Cynosure technology</strong> that
                    targets melanin utilizing Alexandrite (755nm) and Nd: YAG
                    (1064nm) laser wavelengths, our laser hair removal
                    treatments are{" "}
                    <strong>
                      safe, effective, quick, comfortable, and budget-friendly
                    </strong>{" "}
                    — delivering smooth, hair-free skin that lasts.
                  </strong>
                </div>
                <div
                  className="desc"
                  style={{ fontSize: "1.15rem", lineHeight: 1.45 }}
                >
                  <strong>
                    <strong>Forget</strong> the waxing, shaving and{" "}
                    <strong>temporary solutions</strong> that will cost you more
                    time and money in the long run.
                  </strong>
                </div>
                <CustomButton
                  className="inline-block"
                  href="#consultation"
                  type="primary"
                >
                  BOOK A FREE CONSULTATION
                </CustomButton>
              </Box>
            </div>
            <div className="w-full">
              {/* Image positioned absolutely within the main container */}
              <Img3
                ref={imgRef}
                className="laser-img"
                src="/images/cropped-images/Homepage Group 3 Cropped.png"
                alt="image"
              />
            </div>
          </div>
        </div>
      </div>
      {/* Inline tablet overrides to ensure immediate effect on iPad Mini */}
      <style>{`
        @media (min-width: 740px) and (max-width: 820px) {
          .laser-hero-box { max-width: 440px !important; padding: 0.55rem 0.9rem !important; border-radius: 12px !important; }
          .laser-hero-box .title { font-size: 2rem !important; line-height: 1.05 !important; white-space: normal !important; }
          .laser-hero-box .mini-title { font-size: 1rem !important; letter-spacing: 0.3rem !important; }
          .laser-hero-box .desc { font-size: 0.9rem !important; line-height: 1.4 !important; }
          .laser-hero-box .custom-button a { padding: 0.55rem 2.2rem !important; font-size: 1.1rem !important; }
        }
        /* iPad Air: force smaller woman image without touching the brown box */
        @media (min-width: 810px) and (max-width: 840px) {
          .laser-hair-removal .laser-img { height: 56% !important; transform: none !important; object-position: bottom right; }
        }
        /* Desktop narrow band (1201–1279px): make hero brown box smaller so it fits fully in beige area */
        /* Remove debug outline if any remained */
        @media (min-width: 1201px) and (max-width: 1279px) {
          /* DEBUG: force the heroBox id to shrink with !important to defeat any styled overrides */
          #heroBox { transform: scale(0.72) !important; transform-origin: top left !important; max-width: 560px !important; outline: unset !important; }
        }
      `}</style>

      {/* Desktop + Mobile banner (hide on iPad widths) */}
      <div className="block ipad:hidden">
        <FlowerSection
          showMap={true}
          hideSmallLeaf={true}
          autoHideOverlappingLeaf={true}
        >
          <div style={{ fontSize: "1.5rem", lineHeight: "1.4" }}>
            With{" "}
            <strong>
              4.9 stars, 290+ reviews on Google, and over 15 years
            </strong>{" "}
            of trusted experience in the Long Island, New York area, we're
            committed to{" "}
            <strong>proven results, safety, and hair-free patients</strong>.
            Experience the difference with a team that truly cares!
          </div>
          <br />
          <br />
          <div
            style={{ fontSize: "1.4rem", lineHeight: "1.4" }}
            className="consultation-text"
          >
            <strong>Book a free consultation</strong> with us to assess if you
            are a <strong>good candidate</strong> for laser hair removal.
          </div>
        </FlowerSection>
      </div>

      {/* iPad-only banner */}
      <div className="block md:hidden ipad:block">
        <ContactBannerIpad />
      </div>

      {/* Compact Review Slider Section */}
      <div className="pt-[1rem] pb-[0.1rem] md:pt-[1.5rem] md:pb-[0.1rem] px-[1rem] md:px-[2rem] bg-white">
        <h3 className="text-[2rem] md:text-[3rem] font-[500] text-center text-[#35281e] px-5 md:px-0 leading-tight mb-[1rem]">
          PROVEN RESULTS, TRUSTED BY OUR CLIENTS
        </h3>
        <p className="text-center text-[#35281e] text-[1.25rem] md:text-[1.15rem] mb-[0.25rem] font-[Raleway]">
          With over 4.9 stars on Google, hear what our loyal clients say about
          their experience with our aesthetic laser hair removal and skin
          rejuvenation services!
        </p>

        <Slider itemWidth={280} compact={true} itemsPerSlideDesktop={5}>
          <ReviewCard
            img="/images/testimonials/Ariella.jpeg"
            name="Ariella Hajibay"
            compact={true}
          >
            Best place on earth. Went to a ton of other places and finally see
            results here. Worth every dollar, don't look back trust me.
          </ReviewCard>
          <ReviewCard
            img="/images/testimonials/juliet.jpeg"
            name="Juliet Hagobian"
            compact={true}
          >
            The best there is! Orly and Pushp are so caring, kind, and
            welcoming. I always leave my sessions happy and satisfied with
            results.
          </ReviewCard>
          <ReviewCard
            img="/images/testimonials/debbie-y.png"
            name="Debbie Y"
            compact={true}
          >
            Optimum Laser NY is a professional pleasant company. I have started
            treatments more than 10 years ago and now my daughters enjoy the
            warm and welcoming service.
          </ReviewCard>
          <ReviewCard
            img="/images/testimonials/zareen.png"
            name="Zareen Mistry"
            compact={true}
          >
            Daniela is amazing! I have had the best experience and even better
            results. Very clean, very professional from the front desk to the
            technician.
          </ReviewCard>
          <ReviewCard
            img="/images/testimonials/urfa.png"
            name="Urfa Ajmal"
            compact={true}
          >
            I have been getting laser hair removals and electrolysis for my face
            for months. This place is the best! I get my laser from Daniela and
            she is the best.
          </ReviewCard>
          <ReviewCard
            img="/images/testimonials/marissa.png"
            name="Marissa"
            compact={true}
          >
            Been coming here for 10 years ! Pushp is the best!!! Dark hair and
            olive skin tone - never an issue. I come back once a year for touch
            ups.
          </ReviewCard>
          <ReviewCard
            img="/images/testimonials/justin.png"
            name="Justin Gomez"
            compact={true}
          >
            Optimum Laser NY is great - Eti is very helpful and makes scheduling
            appointments stress-free. Daniela is an awesome tech - not only is
            she great at what she does, but she also has a fun personality that
            makes you feel comfortable. I've seen greatly noticeable results so
            far, and look forward to seeing what future sessions will do for me!
          </ReviewCard>
          <ReviewCard
            img="/images/testimonials/brendelyn.png"
            name="Brendelyn Lora"
            compact={true}
          >
            I had an amazing experience at this place! My sister in law
            recommended them and you can truly see a difference in just one
            session! I previously did laser through a Groupon and wasted
            hundreds of dollars.. I'm so happy I finally came here. Eti & her
            staff are great, I highly recommend!!
          </ReviewCard>
          <ReviewCard
            img="/images/testimonials/Mimmi.png"
            name="Mimmi Lindblad"
            compact={true}
          >
            Absolutely LOVE this place!! Each experience has been great at
            Optimum Laser NY. Very professional & Nicole does a fantastic job,
            she makes you feel super comfortable and explain each part of the
            process as it happens. The place is very clean and the atmosphere is
            very pleasant. I highly recommend anyone who wants results and good
            service to come here!!
          </ReviewCard>
          <ReviewCard
            img="/images/testimonials/caroline.png"
            name="Caroline Halimi"
            compact={true}
          >
            Ety and her team have been amazing! They are very nice, and
            professional and the place is always very clean. The treatment
            worked very well for me, we adjusted it based on my skin and my
            sensitivity. I highly recommend it!
          </ReviewCard>
          <ReviewCard
            img="/images/testimonials/frances.png"
            name="Frances S"
            compact={true}
          >
            Excellent staff and totally worth it. They know the answers to any
            question I have regarding laser. Nicole the laser technician has
            amazing customer service and makes me feel at ease when I go. I am
            very happy with my experience here and would recommend it to anyone
            struggling with their hair!
          </ReviewCard>
          <ReviewCard
            img="/images/testimonials/kim.png"
            name="Kim Lazar"
            compact={true}
          >
            I got amazing results for my laser hair removal. The prices are
            reasonable, the owner is the nicest person, and no matter who I get
            one I come for a treatment, they all do a great job. Honestly, laser
            hair removal at optimum laser NY is some of the best money I've ever
            spent. I highly recommend!
          </ReviewCard>
        </Slider>
      </div>

      <div className="px-5 bg-[#35281e] p-[2rem] mt-[40px] electro-section">
        <div className="px-[20px] md:px-[40px] electro-inner container">
          <div className="title text-center md:text-left text-white font-bold text-[2rem] lg:text-[5rem] m-0 font-[Russo One] uppercase tracking-[0.2rem] electro-title">
            Electrolysis
          </div>
          <div className="mini-title text-center md:text-left text-[1.5rem] font-semibold text-white font-[Raleway] uppercase tracking-[0.5rem] electro-subtitle">
            Hair Removal
          </div>
          <div className="line bg-white w-full h-1 mt-3 mb-3 font-[Raleway] electro-line"></div>
          <p className="text-white font-semibold text-[1.3rem] md:text-[1.1rem] font-[Raleway] text-center md:text-left leading-relaxed electro-paragraph">
            <span style={{ fontWeight: "800" }}>
              Our electrolysis sessions are typically scheduled every 1–3 weeks,
              depending on your hair growth cycle and treatment area.
            </span>{" "}
            Each session targets individual hair follicles for permanent
            results—perfect for small, precise areas or clients not eligible for
            laser hair removal.
          </p>
          <br />
          <p className="text-white font-semibold text-[1.3rem] md:text-[1.1rem] font-[Raleway] text-center md:text-left leading-relaxed electro-paragraph">
            <span style={{ fontWeight: "800" }}>
              All treatments are performed by highly experienced licensed
              professionals using safe, FDA-approved technology.
            </span>{" "}
            We offer free, no-pressure consultations to walk you through the
            process and determine what's best for your skin.
          </p>
          <br />
          <p className="text-white font-semibold text-[1.3rem] md:text-[1.1rem] font-[Raleway] text-center md:text-left leading-relaxed electro-paragraph">
            Electrolysis hair removal{" "}
            <span style={{ fontWeight: "800" }}>
              permanently removes and destroys unwanted hair follicles
            </span>{" "}
            from the face or body by{" "}
            <span style={{ fontWeight: "800" }}>
              using an electrical current using a sterile tiny needle.
            </span>{" "}
            This method is{" "}
            <span style={{ fontWeight: "800" }}>safe for all skin types,</span>{" "}
            and highly effective for those with gray hairs, blonde hairs, thin
            hair and peach fuzz.
          </p>
          <br />
          <p className="text-white font-semibold text-[1.3rem] md:text-[1.1rem] font-[Raleway] text-center md:text-left leading-relaxed">
            At Optimum Laser NY in Manhasset NY, we use state-of-the-art
            technology in addition to our{" "}
            <span style={{ fontWeight: "800" }}>
              15-year expertise with hair removal
            </span>{" "}
            to provide maximum results to achieve your goal of being hair-free.
          </p>
          <br />
          <p className="text-white font-semibold text-[1.3rem] md:text-[1.1rem] font-[Raleway] text-center md:text-left leading-relaxed">
            <span style={{ fontWeight: "800" }}>Contact us</span> for more
            information on how you can{" "}
            <span style={{ fontWeight: "800" }}>start electrolysis today!</span>
          </p>
        </div>
      </div>

      <BeforeAfterCarousel />

      <div className="pt-[1rem] pb-[3rem] md:pt-[2rem] md:pb-[4rem] px-[1rem] md:px-[3rem] bg-white">
        <SectionTitle>FAQs</SectionTitle>
        <div className="flex flex-col justify-center items-center gap-[1rem] mb-[2rem]">
          <CollapseSection title="How to prepare for your laser treatment">
            <div className="desc">
              1. Shave the night before. Say goodbye to waxing and plucking{" "}
              <br />
              <br />
              2. Don&apos;t apply makeup, oils, lotions, antibiotics to the
              desired treatment area(s) <br />
              <br />
              3. Smile :)
            </div>
            <CustomButton
              className="inline-block"
              href="#consultation"
              type="tertiary"
            >
              BOOK A FREE CONSULTATION
            </CustomButton>
          </CollapseSection>
          <CollapseSection title="How many treatments will I need?">
            <div className="desc">
              Usually 6-8 treatments which are spaced 4-6 weeks apart. Varies
              due to the thickness of the hair and the location of the desired
              area.
            </div>
          </CollapseSection>
          <CollapseSection title="How painful are the treatments?">
            <div className="desc">
              {" "}
              Good news is different pain tolerances for different people! Some
              clients are unbothered,some feel more of a sting. Our state-of-art
              laser machine, Cynosure Apogee Elite + utilizes cooling and
              chilling technology for the duration of the treatment
            </div>
          </CollapseSection>
          <CollapseSection title="Am I a true candidate for laser?">
            <div className="desc">
              Our laser machine treats all skin types and majority of hair
              pigment follicles. The laser machine is unable to detect hair
              follicles that have blonde, red, grey or white pigments. Come on
              in for a free consultation to determine if you are eligible{" "}
            </div>
          </CollapseSection>
          <CollapseSection title="What is the after care post treatment?">
            <div className="desc">
              Our team at Optimum Laser NY recommends to avoid direct sun
              exposure, intense physical activity, and harsh moisturizers at
              least for one day post treatment. Apply sunscreen to treatment
              areas. Redness or red bumps is normal after treatment that
              subsides within 2-3 hours of treatment you may apply
              hydrocortisone.{" "}
            </div>
          </CollapseSection>
        </div>
        <CustomButton
          className="inline-block"
          href="#consultation"
          type="secondary"
          center
        >
          BOOK A FREE CONSULTATION
        </CustomButton>
      </div>
      <FlowerSection>
        <div
          style={{ fontSize: "1.7rem", lineHeight: "1.4" }}
          className="mobile-text-optimized"
        >
          At <strong>Optimum Laser NY</strong>, we take pride in delivering{" "}
          <strong>
            safe, consistent, and effective results for women and men of all
            skin types
          </strong>
          . We understand how difficult it can be to find the right laser and
          beauty spa — that's why our team is committed to providing{" "}
          <strong>
            affordable treatments using advanced laser technology tailored to
            your unique needs
          </strong>
          .
        </div>
        <br />
        <br />
        <div
          style={{ fontSize: "1.6rem", lineHeight: "1.4" }}
          className="mobile-text-optimized"
        >
          Some of our most <strong>popular laser hair removal areas</strong> for
          both men and women include:
          <br className="block md:hidden" />
          <div
            style={{
              marginTop: "0.5rem",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
            className="bullet-list-container mobile-centered"
          >
            <div
              style={{
                display: "flex",
                alignItems: "flex-start",
                marginBottom: "0.3rem",
              }}
            >
              <span style={{ marginRight: "0.3rem" }}>•</span>
              <span>Underarms</span>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "flex-start",
                marginBottom: "0.3rem",
              }}
            >
              <span style={{ marginRight: "0.3rem" }}>•</span>
              <span>Bikini Line</span>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "flex-start",
                marginBottom: "0.3rem",
              }}
            >
              <span style={{ marginRight: "0.3rem" }}>•</span>
              <span>Brazilian</span>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "flex-start",
                marginBottom: "0.3rem",
              }}
            >
              <span style={{ marginRight: "0.3rem" }}>•</span>
              <span>
                Upper Lip (<strong>Full Face</strong>)
              </span>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "flex-start",
                marginBottom: "0.3rem",
              }}
            >
              <span style={{ marginRight: "0.3rem" }}>•</span>
              <span>Back</span>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "flex-start",
                marginBottom: "0.3rem",
              }}
            >
              <span style={{ marginRight: "0.3rem" }}>•</span>
              <span>Arms and Legs</span>
            </div>
          </div>
          <br className="block md:hidden" />
        </div>
        <br />
        <br />
        <div
          style={{ fontSize: "1.6rem", lineHeight: "1.4" }}
          className="mobile-text-optimized"
        >
          Sessions are <strong>fast and convenient</strong> — most treatments
          range from <strong>just 5 minutes to an hour</strong>, depending on
          the area. Say a final{" "}
          <strong>goodbye to razors, waxing, and ingrown hairs</strong> — and
          say <strong>hello to smooth, flawless skin that lasts</strong>.
        </div>
      </FlowerSection>
      <div
        className="pt-[3rem] pb-[3rem] md:pt-[4rem] md:pb-[4rem] px-[1rem] md:px-[3rem] bg-white"
        id="consultation"
      >
        <h2 className="text-[3rem] md:text-[5rem] font-[500] text-center text-[#35281e] px-2 md:px-0 leading-tight ">
          SCHEDULE YOUR FREE CONSULTATION APPOINTMENT
        </h2>
        <SectionDescription>
          Please provide your contact information to help us schedule your free
          consultation.
        </SectionDescription>
        <form
          action={`https://formsubmit.co/${process.env.NEXT_PUBLIC_EMAIL}`}
          method="POST"
        >
          <div className="w-full mb-[4rem] flex flex-col gap-[1rem] justify-center items-center">
            <DoubleInput>
              <Input name="name" placeholder="Your Name" half />
              <Input name="email" placeholder="Email" half />
            </DoubleInput>
            <DoubleInput>
              <Input name="phone number" placeholder="Phone Number" half />
              <Input name="date and time" placeholder="Date and Time" half />
            </DoubleInput>
            <Input name="service" placeholder="Service" />
          </div>
          <CustomButton
            submit
            type="secondary"
            className="md:min-w-[500px] mb-[2rem]"
            center
          >
            BOOK NOW
          </CustomButton>
        </form>
        <div className="flex justify-center items-center gap-4 mt-4">
          <a href="https://www.facebook.com/OptimumLaserInc/" target="_blank">
            <StyledIcons iconColor="black" borderColor="black">
              <BiLogoFacebook size={30} />
            </StyledIcons>
          </a>
          <a
            href="https://www.instagram.com/optimum_laser/?utm_source=ig_web_button_share_sheet&igshid=OGQ5ZDc2ODk2ZA=="
            target="_blank"
          >
            <StyledIcons iconColor="black" borderColor="black">
              <AiOutlineInstagram size={30} />
            </StyledIcons>
          </a>
          <a href="tel:516-495-4908">
            <StyledIcons iconColor="black" borderColor="black">
              <FaPhoneAlt size={20} />
            </StyledIcons>
          </a>
          <a href="mailto:optimumlaserhairremoval@gmail.com">
            <StyledIcons iconColor="black" borderColor="black">
              <GrMail size={25} />
            </StyledIcons>
          </a>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default page;
