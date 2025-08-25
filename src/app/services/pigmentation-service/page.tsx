"use client";
import Slider from "@/components/Slider";
import Section, {
  SectionDescription,
  SectionTitle,
} from "@/components/layout/section";
import React from "react";
import { Helmet } from "react-helmet";
import VideoCard from "@/components/videoCard";
import CustomButton from "@/components/button";
import BoxSection, { BoxSplitSection } from "@/components/layout/boxSection";
import Box from "@/components/layout/box";
import styled from "styled-components";
import Input, { DoubleInput } from "@/components/Input";
import Footer from "@/components/footer";
import FlowerSection from "@/components/layout/flowerSection";
import CollapseSection from "@/components/layout/collapseSection";
import { StyledIcons } from "@/components/styledIcons";
import { BiLogoFacebook } from "react-icons/bi";
import { AiOutlineInstagram } from "react-icons/ai";
import { FaPhoneAlt } from "react-icons/fa";
import { GrMail } from "react-icons/gr";
import PigmentationBeforeAfterCarousel from "../../../components/PigmentationBeforeAfterCarousel";
import ReviewCard from "@/components/ReviewCard";
import "aos/dist/aos.css"; // single AOS import

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
    right: -17%;
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
    bottom: 0;
    left: -17%;
    // width: 80%;
    // height: auto;
  }
`;
const page = () => {
  return (
    <div>
      {/* <BoxSection hero>
        <BoxSplitSection>
          <Box className="!pt-[2rem] !pb-[3rem] !translate-y-0">
            <div className="text-[3.5rem] text-white text-center md:text-left">PIGMENTATION</div>
            <div className="mini-title text-center md:text-left">REMOVAL</div>
            <div className="line"></div>
            <div className="desc">Unwanted pigmentation is a result of sun damage from incremental exposure to the sun over many years.</div>
            <CustomButton className="inline-block" href="#consultation" type="primary">BOOK A FREE CONSULTATION</CustomButton>
          </Box>
        </BoxSplitSection>
        <Img3 src="../images/cropped-images/Pigmentation Group 1 Cropped.png" alt="image" />
      </BoxSection> */}

      <Helmet>
        <title>Laser Hair Removal in New York - Optimum Laser</title>
        <meta name="description" content="This is the description of my page" />
      </Helmet>
      {/* <div className="grid md:grid-cols-2 place-items-center z-10 w-full " data-aos="fade-up" data-aos-duration="1000"> */}
      <div className="bg-gradient-to-r from-[#faecdb] to-[#f9efdd] ">
        <div
          data-aos="fade-up"
          className=" !overflow-hidden relative lg:h-[750px] mt-[9rem] sm:mt-[7rem] md:mt-[9rem]  lg:mt-[5.5rem] 2xl:container mx-auto flex items-baseline md:items-center justify-center"
        >
          <div className="grid lg:grid-cols-2 max-lg:place-items-center  z-10 w-full box-wrap">
            <div className="py-0 m-4 mb-0 laser-hero-left  md:w-full lg:w-[670px]  2xl:w-[750px] lg:translate-x-10 z-10 relative">
              <Box className="pigment-hero-box max-md:p-0">
                <div className="title text-white text-center md:text-left max-md:!text-4xl ">
                  PIGMENTATION
                </div>
                <div className="mini-title text-center md:text-left">
                  REMOVAL
                </div>
                <div className="line"></div>
                <div
                  className="desc"
                  style={{ fontSize: "1.3rem", lineHeight: "1.4" }}
                >
                  <strong>
                    Target and reduce{" "}
                    <strong>
                      dark spots, sun damage, and uneven skin tone
                    </strong>{" "}
                    with <strong>quick, safe, non-invasive</strong> laser
                    pigmentation removal treatments on skin types I-III
                    utilizing advanced <strong>Cynosure technology</strong>{" "}
                    performed by our specialized technicians.
                  </strong>
                </div>
                <div
                  className="desc"
                  style={{ fontSize: "1.3rem", lineHeight: "1.4" }}
                >
                  <strong>
                    <strong>Booking a free consultation</strong> for assessment
                    of skin type is crucial to determine if you are a{" "}
                    <strong>candidate</strong> for pigmentation removal
                    treatment.
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
              <Img3
                src="../images/cropped-images/Pigmentation Group 1 Cropped.png"
                alt="image"
              />
            </div>
          </div>
        </div>
      </div>
      {/* Inline tablet overrides to ensure immediate effect on iPad Mini */}
      <style>{`
        @media (min-width: 740px) and (max-width: 820px) {
          // .pigment-hero-box { padding: 0.55rem 0.9rem !important; border-radius: 12px !important; }
          .pigment-hero-box .title { font-size: 2rem !important; line-height: 1.05 !important; white-space: normal !important; }
          .pigment-hero-box .mini-title { font-size: 1rem !important; letter-spacing: 0.3rem !important; }
          .pigment-hero-box .desc { font-size: 0.9rem !important; line-height: 1.4 !important; }
          .pigment-hero-box .custom-button a { padding: 0.55rem 2.2rem !important; font-size: 1.1rem !important; }
        }
        /* iPad Air: force smaller image without touching the brown box */
        @media (min-width: 810px) and (max-width: 840px) {
          .pigment-img { height: 56% !important; transform: none !important; object-position: bottom right; }
        }
        /* Desktop narrow band (1201–1279px): make hero brown box smaller so it fits fully in beige area */
        @media (min-width: 1201px) and (max-width: 1279px) {
          .pigment-hero-box { transform: scale(0.72) !important; transform-origin: top left !important; max-width: 560px !important; }
        }
      `}</style>

      <FlowerSection
        showMap={true}
        hideSmallLeaf={true}
        autoHideOverlappingLeaf={true}
      >
        <div
          style={{ fontSize: "1.5rem", lineHeight: "1.4" }}
          data-aos="fade-up"
        >
          With{" "}
          <strong>4.9 stars, 290+ reviews on Google, and over 15 years</strong>{" "}
          of trusted experience in the Long Island, New York area, we're
          committed to <strong>proven results, safety, and clear skin</strong>.
          Experience the difference with a team that truly cares!
        </div>
        <br />
        <br />
        <div
          style={{ fontSize: "1.4rem", lineHeight: "1.4" }}
          className="consultation-text"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <strong>Book a free consultation</strong> with us to assess if you are
          a <strong>good candidate</strong> for pigmentation removal treatment.
        </div>
      </FlowerSection>

      {/* Compact Review Slider Section */}
      <div className="container  pt-[1rem] pb-[0.1rem] md:pt-[1.5rem] md:pb-[0.1rem] px-[1rem] md:px-[2rem] bg-white">
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

      <PigmentationBeforeAfterCarousel />

      <div className="pt-[3rem] pb-[3rem] md:pt-[4rem] md:pb-[4rem] px-[1rem] md:px-[3rem] bg-white">
        <SectionTitle data-aos="fade-up">FAQs</SectionTitle>
        <div
          className="flex flex-col justify-center items-center gap-[1rem] mb-[4rem]"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <CollapseSection title="What is skin pigmentation removal?">
            <div className="desc">
              Skin pigmentation is deposits of melanin that rise to the surface
              of your skin. It appears as brown spots or blotches on your face,
              arms, chest, shoulders or other parts of your body. <br /> <br />
              Age spots, also called liver spots or sun spots, are the most
              common kind of skin pigmentation. Freckles are another common kind
              of this. Melasma, which normally appears as a mask covering your
              cheeks, forehead, and upper lip, is another form of pigmentation
            </div>
          </CollapseSection>
          <CollapseSection title="What causes skin pigmentation?">
            <div className="desc">
              The two main causes of unwanted skin pigmentation are sun damage
              and aging. Even if you now avoid the sun. years of sun exposure
              can take their toll on your skin as you age.
              <br /> <br />
              Although melasma is often triggered by sun exposure, it's often
              tied to hormone surges and is quite common during pregnancy.
            </div>
          </CollapseSection>
          <CollapseSection title="How does sun spot removal work?">
            <div className="desc">
              {" "}
              At Optimum Laser NY Hair Removal, our laser technicians uses the
              Cynosure® EliteTM Laser to remove unwanted pigmentation. Including
              sun spots. As your practitioner moves the Elite+ device gently
              over your skin, the laser pulses go directly into the unwanted
              pigment.
              <br /> <br />
              The laser energy heats and shatters the pigment into many tiny
              pieces. The pigment grows lighter and disappears in the next few
              weeks as your body's natural healing process takes over. It is
              important to reduce sun exposure during the healing phase.
            </div>
          </CollapseSection>
          <CollapseSection title="How many treatments do I need?">
            <div className="desc">
              The number of sessions varies based on the amount of pigmentation
              spots. Most patients need 1-3 <strong>Cynosure Elite+™</strong>{" "}
              treatments to significantly reduce or completely remove unwanted
              pigmentation and sun spots.
              <br /> <br />
              <strong>Call us at 516-495-4908</strong> or{" "}
              <strong>book your appointment online</strong> today to get
              started!
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

      <div
        data-aos="fade-up"
        data-aos-duration="1000"
        className="overflow-hidden"
        style={{ background: "linear-gradient(to right, #faecdb, #f9efdd)" }}
      >
        <div className="container relative flex max-xl:flex-wrap justify-stretch xl:justify-between place-items-center items-start md:items-center">
          <div className="self-start">
            <Img2
              src="../images/cropped-images/pig.png"
              className="w-[1100px]"
              alt="image"
            />
          </div>
          <div className="py-0 z-10 m-4 max-xl:mt-0">
            <Box className="md:min-w-[600px] !max-xl:max-w-full box-max-w xl:!w-[750px] 2xl:!w-auto">
              <div className="title text-center md:text-left">HOW DOES</div>
              <div className="mini-title text-center md:text-left">
                PIGMENTATION REMOVAL WORK?
              </div>
              <div className="line"></div>
              <div
                className="desc"
                style={{ fontSize: "1.3rem", lineHeight: "1.4" }}
              >
                <strong>
                  At <strong>Optimum Laser NY Hair Removal</strong>, our laser
                  technicians use the <strong>Cynosure® Elite+TM</strong> laser
                  to <strong>remove unwanted pigmentation</strong>, including
                  sun spots. As your practitioner moves the Elite+ device gently
                  over your skin, the laser pulses go directly into the unwanted
                  pigment.
                </strong>
                <br />
                <br />
                <strong>
                  You{" "}
                  <strong>
                    don't have to live with sun spots or other sun damage
                  </strong>{" "}
                  thanks to the modern state-of-the-art laser{" "}
                  <strong>
                    treatment available at Optimum Laser NY Hair Removal in
                    Manhasset, New York
                  </strong>
                  .
                </strong>
              </div>

              <div
                className="title text-center md:text-left mt-[2rem]"
                style={{ fontSize: "1.5rem", lineHeight: "1.2" }}
              >
                WHAT TO EXPECT DURING YOUR
              </div>
              <div className="mini-title text-center md:text-left">
                PIGMENTATION REMOVAL SESSION!
              </div>
              <div className="line"></div>
              <div
                className="desc text-left"
                style={{ fontSize: "1.3rem", lineHeight: "1.4" }}
              >
                <strong>
                  <ul className="list-disc pl-6 space-y-3 md:space-y-2">
                    <li>
                      A consultation to assess your skin type and pigmentation
                      concerns
                    </li>
                    <li>
                      Treatment sessions typically last 15-30 minutes, depending
                      on the treatment area
                    </li>
                    <li>
                      Mild redness or warmth may occur and typically subsides
                      within a few hours
                    </li>
                    <li>
                      No downtime — you can resume normal activities immediately
                      after treatment
                    </li>
                    <li>
                      Most clients see significant improvement in 1-3 sessions,
                      spaced about 4-6 weeks apart
                    </li>
                    <li>
                      The number of treatments depends on the type and severity
                      of pigmentation, as well as individual response to
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

      {/* <div className="h-[725px] mt-[9.4rem] md:mt-[10.8rem] sm:mt-[10.5rem] lg:mt-[10.5rem] container mx-auto bg-gradient-to-r from-[#faecdb] to-[#f9efdd] flex items-center justify-center">
        <div className="grid md:grid-cols-2 sm:grid-cols-2 place-items-center">

          <div>
            <img src="../images/cropped-images/Pigmentation Group 2 Cropped.png" className="object-contain object-bottom h-full w-full" alt='alt' />
          </div>
          <div className="md:py-10 py-0">
            <Box>
              <div className="title text-center md:text-left">HOW DOES</div>
              <div className="mini-title text-center md:text-left">PIGMENTATION REMOVAL WORK?</div>
              <div className="line"></div>
              <div className="desc">At Optimum Laser Hair Removal, our laser technicians use the Cynosure® Elite+TM laser to remove unwanted pigmentation, including sun spots. As your practitioner moves the Elite+ device gently over your skin, the laser pulses go directly into the unwanted pigment.</div>
              <CustomButton className="inline-block" href="#consultation" type="primary">BOOK A FREE CONSULTATION</CustomButton>
            </Box>
          </div>
        </div>
      </div> */}

      <div
        className="pt-[3rem] pb-[3rem] md:pt-[4rem] md:pb-[4rem] px-[1rem] md:px-[3rem] bg-white"
        id="consultation"
      >
        <h2
          className="text-[3rem] md:text-[5rem] font-[500] text-center text-[#35281e] px-2 md:px-0 leading-tight"
          data-aos="fade-up"
        >
          SCHEDULE YOUR FREE CONSULTATION APPOINTMENT
        </h2>
        <SectionDescription data-aos="fade-up" data-aos-delay="100">
          Please provide your contact information to help us schedule your free
          consultation.
        </SectionDescription>
        <form
          action={`https://formsubmit.co/${process.env.NEXT_PUBLIC_EMAIL}`}
          method="POST"
        >
          <div
            className="w-full mb-[4rem] flex flex-col gap-[1rem] justify-center items-center"
            data-aos="fade-up"
            data-aos-delay="200"
          >
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
    </div>
  );
};

export default page;
