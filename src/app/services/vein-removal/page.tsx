"use client";
import Input, { DoubleInput } from "@/components/Input";
import CustomButton from "@/components/button";
import Footer, { FooterIcon, SocialIcons } from "@/components/footer";
import Box from "@/components/layout/box";
import { Helmet } from "react-helmet";
import BoxSection, { BoxSplitSection } from "@/components/layout/boxSection";
import FlowerSection from "@/components/layout/flowerSection";
import "aos/dist/aos.css";
import Section, {
  SectionDescription,
  SectionTitle,
} from "@/components/layout/section";
import React from "react";
import styled from "styled-components";
import { StyledIcons } from "@/components/styledIcons";
import { BiLogoFacebook } from "react-icons/bi";
import { AiOutlineInstagram } from "react-icons/ai";
import { FaPhoneAlt } from "react-icons/fa";
import { GrMail } from "react-icons/gr";
import Slider from "@/components/Slider";
import ReviewCard from "@/components/ReviewCard";

const Img = styled.img`
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
    height: fit-content;
    width: auto;
    right: 0;
    bottom: 0;
    z-index: 1;
    object-position: bottom right;
  }

  @media only screen and (max-width: 1024px) {
    position: relative !important;
    object-position: top !important;
  }

  @media (min-width: 1024px) and (max-width: 1200px) {
    height: 100%;
    right: 0;
    bottom: unset;
  }

  /* iPhone SE portrait: slightly taller to close beige gap */
  @media only screen and (max-width: 376px) and (orientation: portrait) {
    height: fit-content !important;
    bottom: 0 !important;
    transform: translateY(0) !important;
    // object-position: bottom right !important;
  }

  /* iPhone 12/13/14 (390px width) portrait: taller to close gap */
  @media only screen and (width: 390px) and (max-height: 900px) and (orientation: portrait) {
    height: fit-content !important;
    bottom: 0 !important;
    transform: translateY(0) !important;
    // object-position: bottom right !important;
  }

  /* iPhone 11/Plus (~414px width) portrait: slightly taller */
  @media only screen and (min-width: 401px) and (max-width: 430px) and (orientation: portrait) {
    height: fit-content !important;
    bottom: 0 !important;
    transform: translateY(0) !important;
    // object-position: bottom right !important;
  }
`;

const Img2 = styled.img`
  // position: absolute;
  // bottom: 0;
  // left: 0;
  // height: 100%;
  // object-fit: contain;
  // object-position: bottom;
  // @media only screen and (max-width: 768px) {
  //   position: relative;
  // }
  @media only screen and (min-width: 1280px) {
    position: absolute;
    top: 0;
    left: 0;
    // width: 80%;
    // height: auto;
  }
`;
const page = () => {
  return (
    <>
      {/* <BoxSection hero>
        <BoxSplitSection>
          <Box className="!pt-[2rem] !pb-[3rem] !translate-y-0">
            <div className="title text-center md:text-left">VEIN</div>
            <div className="mini-title text-center md:text-left">REMOVAL</div>
            <div className="line"></div>
            <div className="desc">Spider veins are a common problem in many people. as it is affects one in three women and one in five men</div>
            <CustomButton className="inline-block" href="#consultation" type="primary">BOOK A FREE CONSULTATION</CustomButton>
          </Box>
        </BoxSplitSection>
        <Img src="../images/cropped-images/Vein Removal Group 1 Cropped.png" alt="image" />
      </BoxSection> */}

      <Helmet>
        <title>Laser Hair Removal in New York - Optimum Laser</title>
        <meta name="description" content="This is the description of my page" />
      </Helmet>
      <div
        className="  relative lg:h-[750px] mt-[9rem] sm:mt-[7rem] md:mt-[9rem]  lg:mt-[5.5rem] 2xl:container mx-auto bg-gradient-to-r from-[#faecdb] to-[#f9efdd] flex items-baseline md:items-center justify-center"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <div className="grid lg:grid-cols-2 max-lg:place-items-center  z-10 w-full box-wrap">
          <div className="md:pt-10 py-0 m-4 mb-0 laser-hero-left  md:w-[650px] lg:w-[670px]  2xl:w-[750px] md:translate-x-10 z-10 relative">
            <Box className="md:min-w-[500px]  lg:translate-x-0 xl:translate-x-0">
              <div className="text-[4rem] md:text-[5rem] text-white text-center md:text-left">
                VEIN
              </div>
              <div className="text-[1.8rem] md:text-[2.5rem] text-white text-center md:text-left">
                REMOVAL
              </div>
              <div className="line"></div>
              <div
                className="desc"
                style={{ fontSize: "1.3rem", lineHeight: "1.4" }}
              >
                <strong>
                  Say <strong>goodbye to visible spider veins</strong> with{" "}
                  <strong>
                    non-invasive laser vein removal at Optimum Laser NY in
                    Manhasset Long Island
                  </strong>
                  . Using advanced <strong>Cynosure Apogee Elite+™</strong>{" "}
                  technology, we{" "}
                  <strong>
                    target and reduce the appearance of unwanted veins—safely,
                    quickly, and with little to no downtime
                  </strong>
                  .
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
            <Img src="../images/cropped-images/vein.png" alt="image" />
          </div>
        </div>
      </div>

      <FlowerSection
        showMap={true}
        hideSmallLeaf={true}
        autoHideOverlappingLeaf={true}
      >
        <div style={{ fontSize: "1.5rem", lineHeight: "1.4" }}>
          With{" "}
          <strong>4.9 stars, 290+ reviews on Google, and over 15 years</strong>{" "}
          of trusted experience in the Long Island, New York area, we're
          committed to <strong>proven results, safety, and vein-free</strong>{" "}
          patients. Experience the difference with a team that truly cares!
        </div>
        <br />
        <br />
        <div
          style={{ fontSize: "1.4rem", lineHeight: "1.4" }}
          className="consultation-text"
        >
          <strong>Book a free consultation</strong> with us to assess if you are
          a <strong>good candidate</strong> for vein removal treatment.
        </div>
      </FlowerSection>

      {/* Compact Review Slider Section */}
      <div className="container pt-[1rem] pb-[0.1rem] md:pt-[1.5rem] md:pb-[0.1rem] px-[1rem] md:px-[2rem] bg-white">
        <h3 className="text-[2rem] md:text-[3rem] font-[500] text-center text-[#35281e] px-5 md:px-0 leading-tight mb-[1rem]">
          PROVEN RESULTS, TRUSTED BY OUR CLIENTS
        </h3>
        <p className="text-center text-[#35281e] text-[1.3rem] md:text-[1.2rem] mb-[0.5rem] font-[Raleway]">
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

      {/* Spacing between sections */}
      <div className="py-[1rem] md:py-[1.5rem]"></div>

      {/* Before & After (Vein) - unique section */}
      <div className="pt-[2rem] pb-[0.5rem] md:pt-[3rem] md:pb-[1rem] px-[1rem] md:px-[3rem] bg-white">
        <h2 className="text-[2.2rem] md:text-[4rem] font-[500] text-center text-[#35281e] px-2 md:px-0 leading-tight mb-[0.5rem]">
          BEFORE & AFTER RESULTS
        </h2>
        <p className="text-center text-[#35281e] text-[0.95rem] md:text-[1.2rem] mb-[1.5rem] font-[Raleway]">
          See the real results from our vein removal treatments.
        </p>

        <div className="max-w-[1000px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
            {/* Before */}
            <div className="relative">
              <img
                src="/images/beforeandafter/veinbefore.jpg"
                alt="Before vein removal"
                className="w-full h-[220px] md:h-[460px] object-cover rounded-lg shadow-lg"
              />
              <div className="absolute top-3 left-3 bg-red-500 text-white px-4 py-2 rounded-full text-sm md:text-lg font-semibold">
                BEFORE
              </div>
            </div>

            {/* After */}
            <div className="relative">
              <img
                src="/images/beforeandafter/veinafter.jpg"
                alt="After vein removal"
                className="w-full h-[220px] md:h-[460px] object-cover rounded-lg shadow-lg"
              />
              <div className="absolute top-3 left-3 bg-green-500 text-white px-4 py-2 rounded-full text-sm md:text-lg font-semibold">
                AFTER
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Small spacer before next box */}
      <div className="py-[3rem] md:py-[5rem]"></div>

      <div
        data-aos="fade-up"
        data-aos-duration="1000"
        className="overflow-hidden container relative"
        style={{ background: "linear-gradient(to right, #faecdb, #f9efdd)" }}
      >
        <div className=" flex max-xl:flex-wrap justify-stretch xl:justify-between place-items-center items-start md:items-center">
          <div className="self-start">
            <Img2
              src="../images/cropped-images/Vein Removal Group 2 Cropped.png"
              className=" w-[1100px] "
              alt="image"
            />
          </div>
          <div className=" py-0 z-10 xl:m-4 max-xl:mt-0">
            <Box className="md:min-w-[600px] !max-xl:max-w-full box-max-w">
              <div className="title text-center md:text-left">HOW DOES</div>
              <div className="mini-title text-center md:text-left">
                VEIN REMOVAL WORK?
              </div>
              <div className="line"></div>
              <div
                className="desc"
                style={{ fontSize: "1.3rem", lineHeight: "1.4" }}
              >
                <strong>
                  The <strong>Cynosure</strong> laser delivers pulses of light
                  energy that heat and{" "}
                  <strong>collapse the walls of the targeted veins</strong>.
                  These veins are then naturally reabsorbed by the body over
                  time and disappear,{" "}
                  <strong>
                    leaving your skin looking clearer and more even
                  </strong>
                  . This treatment is <strong>precise</strong> and{" "}
                  <strong>gentle</strong>, affecting only the{" "}
                  <strong>
                    targeted veins without harming the surrounding skin
                  </strong>
                  —making it ideal for areas like the{" "}
                  <strong>legs, face, and ankles</strong>.
                </strong>
              </div>

              <div
                className="title text-center md:text-left mt-[2rem]"
                style={{ fontSize: "1.5rem", lineHeight: "1.2" }}
              >
                WHAT TO EXPECT DURING YOUR
              </div>
              <div className="mini-title text-center md:text-left">
                SPIDER VEIN REMOVAL SESSION!
              </div>
              <div className="line"></div>
              <div
                className="desc text-left"
                style={{ fontSize: "1.3rem", lineHeight: "1.4" }}
              >
                <strong>
                  <ul className="list-disc pl-6 space-y-3 md:space-y-2">
                    <li>A consultation to assess your veins and skin type</li>
                    <li>
                      Treatment sessions last 15–30 minutes, depending on the
                      area
                    </li>
                    <li>
                      Mild redness or warmth may occur and typically fades
                      within a few hours
                    </li>
                    <li>
                      No incisions, no downtime — you can resume normal
                      activities right after
                    </li>
                    <li>
                      Most clients see noticeable improvement in 1 to 3
                      sessions, spaced about 4–6 weeks apart
                    </li>
                    <li>
                      The number of treatments depends on the size, depth, and
                      color of the veins, as well as individual response to
                      treatment
                    </li>
                  </ul>
                </strong>
              </div>
              <div className="mt-[0.75rem]"></div>
              <div
                className="desc font-bold text-center"
                style={{
                  fontSize: "1.7rem",
                  lineHeight: "1.4",
                  fontWeight: 800,
                }}
              >
                <strong>
                  Book your free consultation with us to see how we best can
                  help you!
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
        </div>
      </div>

      <Section id="consultation" last>
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
      </Section>

      <Footer />
    </>
  );
};

export default page;
