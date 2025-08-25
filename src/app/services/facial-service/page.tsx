"use client";
import Input, { DoubleInput } from "@/components/Input";
import CustomButton from "@/components/button";
import { Helmet } from "react-helmet";
import Footer from "@/components/footer";
import Box from "@/components/layout/box";
import BoxSection, { BoxSplitSection } from "@/components/layout/boxSection";
import Section, {
  SectionDescription,
  SectionTitle,
} from "@/components/layout/section";
import FlowerSection from "@/components/layout/flowerSection";
import "aos/dist/aos.css";
import Slider from "@/components/Slider";
import ReviewCard from "@/components/ReviewCard";
import React from "react";
import ImageBox from "@/components/imageBox";
import { StyledIcons } from "@/components/styledIcons";
import { BiLogoFacebook } from "react-icons/bi";
import { AiOutlineInstagram } from "react-icons/ai";
import { FaPhoneAlt } from "react-icons/fa";
import { GrMail } from "react-icons/gr";
import styled from "styled-components";
const Img3 = styled.img`
  position: absolute;
  bottom: 0;
  right: 0;
  height: 90%;
  object-fit: contain;
  // object-position: center;
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
    margin-bottom: -16px; /* close beige gap */
  }

  @media only screen and (max-width: 1024px) {
    position: relative !important;
    object-position: bottom right !important;
  }

  @media (min-width: 1024px) and (max-width: 1200px) {
    height: 100%;
    right: 0;
    bottom: unset;
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
const Img2 = styled.img`
  // position: absolute;
  // bottom: 0;
  // left: 0;
  // height: 100%;
  // object-fit: contain;
  // object-position: bottom;
`;
const ImagesContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: stretch;
  gap: 1rem;
  height: 600px;
  width: 100%;
  margin: 4rem auto 4rem auto;

  @media only screen and (max-width: 1200px) {
    flex-direction: column;
    height: 100%;
    width: 100%;
  }
`;
const Img = styled.img`
  position: absolute;
  bottom: 0;
  right: 0;
  height: 100%;
  object-fit: contain;
  object-position: bottom;
`;
const page = () => {
  return (
    <div
      style={{
        // backgroundImage: "linear-gradient(to bottom, #faecdb, #f9efdd)",
        scrollbarWidth: "none",
      }}
    >
      <Helmet>
        <title>Laser Hair Removal in New York - Optimum Laser</title>
        <meta name="description" content="This is the description of my page" />
      </Helmet>
      <div
        // data-aos="fade-up"
        // data-aos-duration="1000"
        className="   bg-gradient-to-r from-[#faecdb] to-[#f9efdd]  2xl:bg-gradient-to-r 2xl:from-[#faecdb] 2xl:to-[#f9efdd]"
      >
        <div className=" 2xl:container relative  items-baseline md:items-center justify-center lg:h-[725px] mt-[9rem] sm:mt-[7rem] md:mt-[9rem]  lg:mt-[5.6rem]  mx-auto grid lg:grid-cols-2 max-lg:place-items-center  z-10 w-full box-wrap">
          <div className="md:pt-10 mt-8 m-4 mb-0 laser-hero-left  md:w-[650px] lg:w-[670px]  2xl:w-[750px] md:translate-x-10 z-10 relative max-lg:!w-[96%] max-lg:!translate-x-0 max-lg:!mx-auto">
            <Box className="pigment-hero-box md:min-w-[600px] lg:ml-12 xl:ml-auto !py-4 !px-8">
              <div className="title text-center md:text-left">FACIAL</div>
              <div className="mini-title text-center md:text-left">
                SERVICES
              </div>
              <div className="line"></div>
              <div
                className="desc"
                style={{ fontSize: "1.35rem", lineHeight: "1.4" }}
              >
                <strong>
                  At Optimum Laser NY we offer{" "}
                  <strong>
                    personalized deep cleaning hydration facials, chemical
                    peels, and advanced Laser Genesis facials
                  </strong>{" "}
                  to <strong>hydrate, brighten, and treat concerns</strong> like{" "}
                  <strong>
                    acne, fine lines, uneven skin tone, and rosacea
                  </strong>
                  .
                  <br />
                  <br />
                  Using <strong>medical-grade skin products</strong> and{" "}
                  <strong>cutting-edge laser technology</strong>, we help{" "}
                  <strong>restore clear, radiant skin</strong> to{" "}
                  <strong>
                    tighten and strengthen skin and pores, boost collagen,
                    reduce redness
                  </strong>{" "}
                  — tailored to your unique needs. Call us now at{" "}
                  <strong>516-495-4908</strong> to inquire about pricing and
                  your customized treatment plan.
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
          <div>
            <Img3 src="/images/facial-service/Facial.png" alt="image" />
            {/* <img
              src="../images/facial-service/Facial.png"
              className="visible lg:invisible h-auto max-w-full"
              alt="image"
            /> */}
          </div>
        </div>
      </div>

      <div
        data-aos="fade-up"
        data-aos-duration="1000"
        className="pt-[3rem] pb-[3rem] md:pt-[4rem] md:pb-[4rem] px-[1rem] md:px-[3rem] bg-white"
      >
        <ImagesContainer>
          <ImageBox
            imgStyles={{ height: "90%" }}
            image="/images/cropped-images/Acne Photo.png"
            title="ACNE"
            description="REMOVAL"
            style={{
              backgroundColor: "#f8efdd",
              overflow: "hidden",
              flex: 1,
            }}
            imgposition="left"
          />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              flex: 1.5,
              gap: "1rem",
            }}
          >
            <ImageBox
              image="/images/cropped-images/Chemical Photo.png"
              title="CHEMICAL"
              description="PEELS"
              style={{
                flex: 1,
                width: "100%",
                backgroundColor: "#f8efdd",
                overflow: "hidden",
              }}
              imgposition={"middle1"}
            />
            <ImageBox
              image="/images/cropped-images/Deep Cleaning Photo.png"
              title="DEEP CLEANING"
              description="MASSAGE"
              style={{
                flex: 1,
                backgroundColor: "#f8efdd",
                width: "100%",
                overflow: "hidden",
              }}
              imgposition={"middle2"}
            />
          </div>
          <ImageBox
            image="/images/cropped-images/Facial Hydration Photo.png"
            title="FACIAL"
            description="SERVICES"
            style={{ backgroundColor: "#f8efdd", overflow: "hidden", flex: 1 }}
            imgposition="right"
          />
        </ImagesContainer>
        <div className="w-fit mx-auto">
          <CustomButton
            className="inline-block"
            href="#consultation"
            type="secondary"
          >
            BOOK A FREE CONSULTATION
          </CustomButton>
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
          committed to <strong>proven results, safety, and clear skin</strong>.
          Experience the difference with a team that truly cares!
        </div>
        <br />
        <br />
        <div
          style={{ fontSize: "1.4rem", lineHeight: "1.4" }}
          className="consultation-text"
        >
          <strong>Book a free consultation</strong> with us to assess if you are
          a <strong>good candidate</strong> for facial treatments.
        </div>
      </FlowerSection>

      {/* Compact Review Slider Section */}
      <div className="container pt-[1rem] pb-[0rem] md:pt-[1.5rem] md:pb-[0rem] px-[1rem] md:px-[2rem] bg-white">
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

      <div
        className=" "
        style={{ background: "linear-gradient(to right, #faecdb, #f9efdd)" }}
      >
        <div className="container flex gap-4 max-lg:flex-wrap overflow-hidden xl:justify-between">
          <Img2
            className="max-lg:translate-y-[12vw] translate-y-[3vw] w-[90%] lg:w-[600px]"
            src="../images/cropped-images/Homepage Group 2 Cropped.png"
            alt="image"
          />
          {/* <BoxSplitSection className="!hidden lg:!flex"></BoxSplitSection> */}
          {/* <BoxSplitSection style={{ paddingTop: 0 }}> */}
          <Box className="!m-4 self-center lg:absolute xl:relative lg:right-4 lg:w-[400px] xl:w-auto">
            <div className="title text-center md:text-left">HOW DO</div>
            <div className="mini-title text-center md:text-left">
              FACIAL SERVICES WORK?
            </div>
            <div className="line"></div>
            <div
              className="desc"
              style={{ fontSize: "1.35rem", lineHeight: "1.4" }}
            >
              <strong>
                Facial services are a{" "}
                <strong>specialized skincare service</strong> designed to{" "}
                <strong>rejuvenate and moisturize</strong> the skin on the face,
                leaving it <strong>refreshed, radiant, and supple</strong>. This
                treatment is ideal for individuals seeking to{" "}
                <strong>combat dryness, fine lines</strong>, and the effects of{" "}
                <strong>environmental stressors</strong> on their skin.
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
        {/* </BoxSplitSection> */}
      </div>

      {/* <BoxSection style={{ minHeight: "1024px" }}>
        <Img2
          src="../images/cropped-images/Homepage Group 2 Cropped.png"
          alt="image"
        />
        <BoxSplitSection className="!hidden lg:!flex"></BoxSplitSection>
        <BoxSplitSection style={{ paddingTop: 0 }}>
          <Box className="!pt-[2rem] !pb-[3rem] !translate-y-0">
            <div className="title text-center md:text-left">HOW DO</div>
            <div className="mini-title text-center md:text-left">
              FACIAL SERVICES WORK?
            </div>
            <div className="line"></div>
            <div
              className="desc"
              style={{ fontSize: "1.35rem", lineHeight: "1.4" }}
            >
              <strong>
                Facial services are a{" "}
                <strong>specialized skincare service</strong> designed to{" "}
                <strong>rejuvenate and moisturize</strong> the skin on the face,
                leaving it <strong>refreshed, radiant, and supple</strong>. This
                treatment is ideal for individuals seeking to{" "}
                <strong>combat dryness, fine lines</strong>, and the effects of{" "}
                <strong>environmental stressors</strong> on their skin.
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
        </BoxSplitSection>
      </BoxSection> */}
      <div
        className="pt-[3rem] pb-[3rem] md:pt-[4rem] md:pb-[4rem] px-[1rem] md:px-[3rem] bg-white"
        id="consultation"
      >
        <SectionTitle>SCHEDULE YOUR FREE CONSULTATION APPOINTMENT</SectionTitle>
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
    </div>
  );
};

export default page;
