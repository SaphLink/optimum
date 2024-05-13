"use client";
import Input, { DoubleInput } from "@/components/Input";
import CustomButton from "@/components/button";
import Footer, { FooterIcon, SocialIcons } from "@/components/footer";
import Box from "@/components/layout/box";
import BoxSection, { BoxSplitSection } from "@/components/layout/boxSection";
import FlowerSection from "@/components/layout/flowerSection";
import Section, { SectionDescription, SectionTitle } from "@/components/layout/section";
import React from "react";
import styled from "styled-components";
import { StyledIcons } from "@/components/styledIcons";
import { BiLogoFacebook } from "react-icons/bi";
import { AiOutlineInstagram } from "react-icons/ai";
import { FaPhoneAlt } from "react-icons/fa";
import { GrMail } from "react-icons/gr";

const Img = styled.img`
  position: absolute;
  bottom: 0;
  right: 0;
  height: 100%;
  object-fit: contain;
  object-position: bottom;
`;

const Img2 = styled.img`
  position: absolute;
  bottom: 0;
  left: 0;
  height: 100%;
  object-fit: contain;
  object-position: bottom;
`;
const page = () => {
  return (
    <>
      <BoxSection hero>
        <BoxSplitSection>
          <Box className="!pt-[2rem] !pb-[3rem] !translate-y-0">
            <div className="title">VEIN</div>
            <div className="mini-title">REMOVAL</div>
            <div className="line"></div>
            <div className="desc">Spider veins are a common problem in many people. as it is affects one in three women and one in five men</div>
            <CustomButton className="inline-block" href="#consultation" type="primary">BOOK A FREE CONSULTATION</CustomButton>
          </Box>
        </BoxSplitSection>
        <Img src="../images/cropped-images/Vein Removal Group 1 Cropped.png" alt="image" />
      </BoxSection>
      <FlowerSection>
        If the tiny veins on your face or legs make you self-conscious or unhappy, Optimum Laser
        Hair Removal in Manhasset, New York, has a state-of-the-art solution for you.
      </FlowerSection>
      <BoxSection>
        <Img2 style={{}} src="../images/cropped-images/Vein Removal Group 2 Cropped.png" alt="image" />
        <BoxSplitSection className="!hidden md:!flex"></BoxSplitSection>
        <BoxSplitSection>
          <Box className="!pt-[2rem] !pb-[3rem] !translate-y-0">
            <div className="title">HOW DOES</div>
            <div className="mini-title">VEIN REMOVAL WORK?</div>
            <div className="line"></div>
            <div className="desc">
              Laser vein removal with the advanced Cynosure® Elite+TM system gives you fast results
              with no downtime. To find out more, contact a member of the experienced Optimum Laser
              Hair Removal team online or by phone now at 516-495-4908.
            </div>
            <CustomButton className="inline-block" href="#consultation" type="primary">BOOK A FREE CONSULTATION</CustomButton>
          </Box>
        </BoxSplitSection>
      </BoxSection>
      <Section id='consultation' >
        <SectionTitle>SECURE YOUR FREE CONSULTATION NOW</SectionTitle>
        <SectionDescription>Please provide your contact information to help us schedule your free consultation</SectionDescription>
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
          <CustomButton submit type="secondary" className="md:min-w-[500px] mb-[2rem]" center>
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
      </Section>

      <Footer />
    </>
  );
};

export default page;
