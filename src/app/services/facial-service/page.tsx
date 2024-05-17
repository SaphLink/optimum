"use client";
import Input, { DoubleInput } from "@/components/Input";
import CustomButton from "@/components/button";
import Footer from "@/components/footer";
import Box from "@/components/layout/box";
import BoxSection, { BoxSplitSection } from "@/components/layout/boxSection";
import Section, { SectionDescription, SectionTitle } from "@/components/layout/section";
import React from "react";
import ImageBox from "@/components/imageBox";
import { StyledIcons } from "@/components/styledIcons";
import { BiLogoFacebook } from "react-icons/bi";
import { AiOutlineInstagram } from "react-icons/ai";
import { FaPhoneAlt } from "react-icons/fa";
import { GrMail } from "react-icons/gr";
import styled from "styled-components";
const Img2 = styled.img`
  position: absolute;
  bottom: 0;
  left: 0;
  height: 100%;
  object-fit: contain;
  object-position: bottom;

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
    `
  ;

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
    <>
      <BoxSection hero className="!min-h-[700px] md:!min-h-[max(110vh,800px)]">
        <BoxSplitSection>
          <Box className="!pt-[2rem] !pb-[3rem] !translate-y-0">
            <div className="title text-center md:text-left">FACIAL</div>
            <div className="mini-title text-center md:text-left">SERVICES</div>
            <div className="line"></div>
            <div className="desc">Facial services work by replenishing the skin's moisture and improving its overall health and appearance. It typically involves cleansing the skin, applying a hydrating mask with nourishing ingredients, and using serums to address specific skin concerns like dryness or fine lines. The specific techniques and products used are customized to the individual's skin type and needs. </div>
            <CustomButton className="inline-block" href="#consultation" type="primary">BOOK A FREE CONSULTATION</CustomButton>
          </Box>
        </BoxSplitSection>
        <Img src={'../images/facial-service/Facial.png'} alt="image" />
        <BoxSplitSection
          className="!hidden md:!flex"
        >
        </BoxSplitSection>
      </BoxSection>

      <div className="pt-[3rem] pb-[3rem] md:pt-[4rem] md:pb-[4rem] px-[1rem] md:px-[3rem] bg-white">
        <ImagesContainer>
          <ImageBox
            image="/images/cropped-images/Acne Photo.png"
            title="ACNE"
            description="REMOVAL"
            style={{ backgroundColor: "#f8efdd", overflow: "hidden", flex: 1 }}
            imgposition="left"
          />
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", flex: 1.5, gap: "1rem" }}>
            <ImageBox
              image="/images/cropped-images/Chemical Photo.png"
              title="CHEMICAL"
              description="PEELS"
              style={{ flex: 1, width: "100%", backgroundColor: "#f8efdd", overflow: "hidden" }}
              imgposition={"middle1"}
            />
            <ImageBox
              image="/images/cropped-images/Deep Cleaning Photo.png"
              title="DEEP CLEANING"
              description="MASSAGE"
              style={{ flex: 1, backgroundColor: "#f8efdd", width: "100%", overflow: "hidden" }}
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
          <CustomButton className="inline-block" href="#consultation" type="secondary">BOOK A FREE CONSULTATION</CustomButton>
        </div>
      </div>
      <BoxSection>

        <Img2 src="../images/cropped-images/Homepage Group 2 Cropped.png" alt="image" />
        <BoxSplitSection
          className="!hidden md:!flex"
        >
        </BoxSplitSection>
        <BoxSplitSection>
          <Box className="!pt-[2rem] !pb-[3rem] !translate-y-0">
            <div className="title text-center md:text-left">HOW DO</div>
            <div className="mini-title text-center md:text-left">FACIAL SERVICES WORK?</div>
            <div className="line"></div>
            <div className="desc">
              Facial services are a specialized skincare service designed to rejuvenate and moisturize the skin on the face, leaving it refreshed, radiant, and supple. This treatment is ideal for individuals seeking to combat dryness, fine lines, and the effects of environmental stressors on their skin.
            </div>
            <CustomButton className="inline-block" href="#consultation" type="primary">BOOK A FREE CONSULTATION</CustomButton>
          </Box>
        </BoxSplitSection>
      </BoxSection>
      <div className="pt-[3rem] pb-[3rem] md:pt-[4rem] md:pb-[4rem] px-[1rem] md:px-[3rem] bg-white" id="consultation">
        <SectionTitle>
          GRAB YOUR FREE CONSULTATION NOW
        </SectionTitle>
        <SectionDescription>
          Please provide your contact information to help us schedule your free consultation
        </SectionDescription>
        <form action={`https://formsubmit.co/${process.env.NEXT_PUBLIC_EMAIL}`} method="POST">
          <div
            className="w-full mb-[4rem] flex flex-col gap-[1rem] justify-center items-center"
          >
            <DoubleInput>
              <Input name='name' placeholder="Your Name" half />
              <Input name='email' placeholder="Email" half />
            </DoubleInput>
            <DoubleInput>
              <Input name='phone number' placeholder="Phone Number" half />
              <Input name='date and time' placeholder="Date and Time" half />
            </DoubleInput>
            <Input name='service' placeholder="Service" />
          </div>
          <CustomButton submit type="secondary" className="md:min-w-[500px] mb-[2rem]" center >
            BOOK NOW
          </CustomButton>
        </form>
        <div className="flex justify-center items-center gap-4 mt-4">
          <a href="https://www.facebook.com/OptimumLaserInc/" target="_blank">
            <StyledIcons iconColor="black" borderColor="black">
              <BiLogoFacebook size={30} />
            </StyledIcons>
          </a>
          <a href="https://www.instagram.com/optimum_laser/?utm_source=ig_web_button_share_sheet&igshid=OGQ5ZDc2ODk2ZA==" target="_blank">
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