// 6.19.25
"use client";
import Input, { DoubleInput } from "@/components/Input";
import CustomButton from "@/components/button";
import Footer from "@/components/footer";
import Box from "@/components/layout/box";
import BoxSection, { BoxSplitSection } from "@/components/layout/boxSection";
import Section, {
  SectionDescription,
  SectionTitle,
} from "@/components/layout/section";
import React from "react";
import { BiLogoFacebook } from "react-icons/bi";
import { AiOutlineInstagram } from "react-icons/ai";
import { FaPhoneAlt } from "react-icons/fa";
import { GrMail } from "react-icons/gr";
import { StyledIcons } from "@/components/styledIcons";
import CustomCircle from "@/components/customCircle";
import styled from "styled-components";
import Slider from "@/components/Slider";
import ReviewCard from "@/components/ReviewCard";
import FlowerSection from "@/components/layout/flowerSection";
import "aos/dist/aos.css";
import dynamic from "next/dynamic";

// Lazy-load iPad-only banner client-side
const ContactBannerIpad = dynamic(
  () => import("@/components/ContactBannerIpad"),
  {
    ssr: false,
  }
);

const textareaStyle = {
  maxWidth: "1000px",
  width: "100%",
  padding: "2rem 2rem",
  margin: "1px 0",
  fontFamily: "Raleway, sans-serif",
  fontSize: "1.3rem",
  color: "black",
  backgroundColor: "#f9eedc",
  border: "none",
  outline: "none",
  height: "20rem",
  placeholderColor: "#000000",
};

//#region

const Logo = styled.img`
  object-fit: contain;
  margin: 0 auto;
  height: 150px;
`;

const Img = styled.img`
  position: absolute;
  bottom: 0;
  right: 0;
  height: 100%;
  object-fit: contain;
  object-position: bottom;
`;

////

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 1rem;

  @media only screen and (max-width: 768px) {
    flex-direction: column;
  }
`;
//#endregion
const page = () => {
  return (
    <>
      <Section
        hero
        last
        id="consultation"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <SectionTitle data-aos="fade-up" data-aos-duration="1000">
          CONTACT US
        </SectionTitle>
        <SectionDescription className="text-[1.2rem] md:text-[1.4rem]">
          The Optimum Laser NY Hair Removal Team is available for all your
          questions, concerns and scheduling. Please contact us at your earliest
          convenience during our business hours! We will get back to you as soon
          as possible.
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
            <textarea
              name="message"
              placeholder="Message"
              className={"placeholder-black px-[2rem] py-[1rem] "}
              style={textareaStyle}
            ></textarea>
          </div>
          <CustomButton
            submit
            type="secondary"
            className="mb-[2rem] px-[2.2rem] py-[1.2rem] text-[1.6rem] leading-tight md:px-[6rem] md:py-[1.1rem] md:text-[2rem]"
            center
          >
            <span className="md:hidden">
              <span className="block">BOOK YOUR</span>
              <span className="block">APPOINTMENT TODAY</span>
            </span>
            <span className="hidden md:inline">
              BOOK YOUR APPOINTMENT TODAY
            </span>
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

      <div className="container pt-[1rem] pb-[2rem] md:pt-[1.5rem] md:pb-[3rem] px-[1rem] md:px-[2rem] bg-white">
        <SectionTitle>PROVEN RESULTS, TRUSTED BY OUR CLIENTS</SectionTitle>
        <SectionDescription className="text-[1.2rem] md:text-[1.4rem]">
          With over 4.9 stars on Google, hear what our loyal clients say about
          their experience with our services.
        </SectionDescription>

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
            name="debbie y"
            time="6 months ago"
            compact={true}
          >
            Optimum Laser NY is a professional pleasant company. I have started
            treatments more than 10 years ago and now my doughters enjoy the
            warm and welcoming service that we get there. Never a problem,
            always welcoming and accommodating and clean ! Thank you for making
            us smooth and happy :)
          </ReviewCard>
          <ReviewCard
            img="/images/testimonials/zareen.png"
            name="Zareen Mistry"
            time="2 months ago"
            compact={true}
          >
            Daniela is amazing! I have had the best experience and even better
            results. Very clean, very professional from the front desk to the
            technician. Always v accommodating also. The best place I've been to
            for laser hair removal, and hopefully the last bc the results are
            excellent so far!!
          </ReviewCard>
          <ReviewCard
            img="/images/testimonials/urfa.png"
            name="Urfa Ajmal"
            time="5 months ago"
            compact={true}
          >
            I have been getting laser hair removals and electrolysis for my face
            for months. This place is the best! I get my laser from Daniela and
            she is the best, I have seen my hair growth lessen so much and I an
            loving it. Definitely go to them! They are the best
          </ReviewCard>
          <ReviewCard
            img="/images/testimonials/marissa.png"
            name="Marissa"
            time="5 months ago"
            compact={true}
          >
            Been coming here for 10 years ! Pushp is the best!!! Dark hair and
            olive skin tone - never an issue. I come back once a year for touch
            ups.
          </ReviewCard>
          <ReviewCard
            img="/images/testimonials/justin.png"
            name="Justin Gomez"
            time="1 year ago"
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
            time="1 year ago"
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
            time="2 years ago"
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
            time="5 months ago"
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
            time="2 years ago"
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
            time="3 years ago"
            compact={true}
          >
            I got amazing results for my laser hair removal. The prices are
            reasonable, the owner is the nicest person, and no matter who I get
            one I come for a treatment, they all do a great job. Honestly, laser
            hair removal at optimum laser is some of the best money I've ever
            spent. I highly recommend!
          </ReviewCard>
        </Slider>
        <div className="w-fit mx-auto mt-[2rem] md:mt-[2.5rem]">
          <CustomButton
            className="inline-block text-[1.8rem] md:text-[2rem] py-[0.9rem] px-[2.8rem] md:py-[1.1rem] md:px-[6rem] rounded-[1.25rem]"
            href="#consultation"
            type="secondary"
          >
            BOOK A FREE CONSULTATION
          </CustomButton>
        </div>
      </div>

      {/* Desktop + Mobile banner (hide only on iPad widths) */}
      <div className="block ipad:hidden">
        <FlowerSection
          showMap={true}
          hideSmallLeaf={true}
          compact={true}
          shrinkLeftLeaf={true}
          shrinkRightLeafDesktop={true}
          nudgeLargeRightLeafDesktop={true}
          autoHideOverlappingLeaf={true}
          mobileSatisfaction={true}
        >
          <div style={{ fontSize: "1.5rem", lineHeight: "1.4" }}>
            With{" "}
            <strong>
              4.9 stars, 290+ reviews on Google, and over 15 years
            </strong>{" "}
            of trusted experience in the Long Island, New York area, we're
            committed to{" "}
            <strong>proven results, safety, and happy patients</strong>.
            Experience the difference with a team that truly cares!
          </div>
          <br />
          <br />
          <div
            style={{ fontSize: "1.4rem", lineHeight: "1.4" }}
            className="consultation-text"
          >
            <strong>Book a free consultation</strong> with us to assess if you
            are a <strong>good candidate</strong> for treatment.
          </div>
        </FlowerSection>
      </div>

      {/* iPad-only banner */}
      <div className="block md:hidden ipad:block">
        <ContactBannerIpad />
      </div>

      <Footer />
    </>
  );
};

export default page;
