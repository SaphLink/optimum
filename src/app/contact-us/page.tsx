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

//

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
      <Section hero id="consultation">
        <SectionTitle>CONTACT US</SectionTitle>
        <SectionDescription>
          The Optimum Laser Hair Removal Team is available for all your
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
              <Input name="name" placeHolder="Your Name" half />
              <Input name="email" placeHolder="Email" half />
            </DoubleInput>
            <DoubleInput>
              <Input name="phone number" placeHolder="Phone Number" half />
              <Input name="date and time" placeHolder="Date and Time" half />
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
            className="md:min-w-[500px] mb-[2rem]"
            center
          >
            BOOK YOUR APPOINTMENT TODAY
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

      <BoxSection>
        <BoxSplitSection>
          <Box>
            <Logo src="../images/homepage/Optimum Laser Brown White.png" />
            <div className="line"></div>
            <div className="desc">
              <span
                style={{
                  fontFamily: "Broadway",
                  fontSize: "1.3rem",
                }}
              >
                Optimum Laser
              </span>{" "}
              is a medical spa that offers cutting-edge medical grade laser
              technology.
            </div>
            <CustomButton href="/about-us" type="primary">
              LEARN MORE
            </CustomButton>
          </Box>
        </BoxSplitSection>
        <Img
          src="../images/cropped-images/Homepage Group 1 Cropped.png"
          alt="image"
        />
        <CustomCircle
          labels={[
            {
              text: "BOOK",
              style: {
                fontSize: "16px",
                fontWeight: "200",
                letterSpacing: "3px",
              },
            },
            { text: "FREE", style: { fontSize: "40px", fontWeight: "bold" } },
            {
              text: "CONSULTATION NOW!",
              style: { fontSize: "12px", fontWeight: "200" },
            },
          ]}
          size={170}
        />
      </BoxSection>
      <Section last>
        <SectionTitle>WHAT USERS THINK</SectionTitle>
        <SectionDescription>
          See what our customers have to say about their experience at our
          medical spa
        </SectionDescription>

        <Slider>
          <ReviewCard
            img="images/testimonials/debbie-y.png"
            name="debbie y"
            time="6 months ago"
          >
            Optimum Laser is a professional pleasant company. I have started
            treatments more than 10 years ago and now my doughters enjoy the
            warm and welcoming service that we get there. Never a problem,
            always welcoming and accommodating and clean ! Thank you for making
            us smooth and happy :)
          </ReviewCard>
          <ReviewCard
            img="images/testimonials/zareen.png"
            name="Zareen Mistry"
            time="2 months ago"
          >
            Daniela is amazing! I have had the best experience and even better
            results. Very clean, very professional from the front desk to the
            technician. Always v accommodating also. The best place I've been to
            for laser hair removal, and hopefully the last bc the results are
            excellent so far!!
          </ReviewCard>
          <ReviewCard
            img="images/testimonials/urfa.png"
            name="Urfa Ajmal"
            time="5 months ago"
          >
            I have been getting laser hair removals and electrolysis for my face
            for months. This place is the best! I get my laser from Daniela and
            she is the best, I have seen my hair growth lessen so much and I an
            loving it. Definitely go to them! They are the best
          </ReviewCard>
          <ReviewCard
            img="images/testimonials/marissa.png"
            name="Marissa"
            time="5 months ago"
          >
            Been coming here for 10 years ! Pushp is the best!!! Dark hair and
            olive skin tone - never an issue. I come back once a year for touch
            ups.
          </ReviewCard>
          <ReviewCard
            img="images/testimonials/justin.png"
            name="Justin Gomez"
            time="1 year ago"
          >
            Optimum Laser is great - Eti is very helpful and makes scheduling
            appointments stress-free. Daniela is an awesome tech - not only is
            she great at what she does, but she also has a fun personality that
            makes you feel comfortable. I’ve seen greatly noticeable results so
            far, and look forward to seeing what future sessions will do for me!
          </ReviewCard>
          <ReviewCard
            img="images/testimonials/brendelyn.png"
            name="Brendelyn Lora"
            time="1 year ago"
          >
            I had an amazing experience at this place! My sister in law
            recommended them and you can truly see a difference in just one
            session! I previously did laser through a Groupon and wasted
            hundreds of dollars.. I’m so happy I finally came here. Eti & her
            staff are great, I highly recommend!!
          </ReviewCard>
          <ReviewCard
            img="images/testimonials/Mimmi.png"
            name="Mimmi Lindblad"
            time="2 years ago"
          >
            Absolutely LOVE this place!! Each experience has been great at
            Optimum Laser. Very professional & Nicole does a fantastic job, she
            makes you feel super comfortable and explain each part of the
            process as it happens. The place is very clean and the atmosphere is
            very pleasant. I highly recommend anyone who wants results and good
            service to come here!!
          </ReviewCard>
          <ReviewCard
            img="images/testimonials/caroline.png"
            name="Caroline Halimi"
            time="5 months ago"
          >
            Ety and her team have been amazing! They are very nice, and
            professional and the place is always very clean. The treatment
            worked very well for me, we adjusted it based on my skin and my
            sensitivity. I highly recommend it!
          </ReviewCard>
          <ReviewCard
            img="images/testimonials/frances.png"
            name="Frances S"
            time="2 years ago"
          >
            Excellent staff and totally worth it. They know the answers to any
            question I have regarding laser. Nicole the laser technician has
            amazing customer service and makes me feel at ease when I go. I am
            very happy with my experience here and would recommend it to anyone
            struggling with their hair!
          </ReviewCard>
          <ReviewCard
            img="images/testimonials/kim.png"
            name="Kim Lazar"
            time="3 years ago"
          >
            I got amazing results for my laser hair removal. The prices are
            reasonable, the owner is the nicest person, and no matter who I get
            one I come for a treatment, they all do a great job. Honestly, laser
            hair removal at optimum laser is some of the best money I’ve ever
            spent. I highly recommend!
          </ReviewCard>
        </Slider>
        <div className="w-fit mx-auto">
          <CustomButton href="#consultation" type="secondary">
            BOOK A FREE CONSULTATION
          </CustomButton>
        </div>
      </Section>
      <Footer />
    </>
  );
};

export default page;
