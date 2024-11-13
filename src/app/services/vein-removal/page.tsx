"use client";
import Input, { DoubleInput } from "@/components/Input";
import CustomButton from "@/components/button";
import Footer, { FooterIcon, SocialIcons } from "@/components/footer";
import Box from "@/components/layout/box";
import { Helmet } from 'react-helmet';
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
      <div className="relative h-[700px] mt-[9.4rem] md:mt-[10.8rem] sm:mt-[10.5rem] lg:mt-[10.5rem] container mx-auto bg-gradient-to-r from-[#faecdb] to-[#f9efdd] flex items-baseline md:items-center justify-center">
        <div className="grid md:grid-cols-2 sm:grid-cols-2 place-items-center">
          <div className="md:py-10 py-0 z-10">
            <Box>
              <div className="text-[3rem] text-white text-center md:text-left">VEIN</div>
              <div className="mini-title text-center md:text-left">REMOVAL</div>
              <div className="line"></div>
              <div className="desc">Spider veins are a common problem in many people. as it is affects one in three women and one in five men.</div>
              <CustomButton className="inline-block" href="#consultation" type="primary">BOOK A FREE CONSULTATION</CustomButton>
            </Box>
          </div>
          <div>
            <Img src="../images/cropped-images/vein.png" className="h-auto max-w-full" alt="image" />
          </div>
        </div>
      </div>


      <FlowerSection>
        If the tiny veins on your face or legs make you self-conscious or unhappy, Optimum Laser NY
        Hair Removal in Manhasset, New York, has a state-of-the-art solution for you.
      </FlowerSection>


      <div className="relative h-[700px] container mx-auto bg-gradient-to-r from-[#faecdb] to-[#f9efdd] flex items-baseline md:items-center justify-center]">
        <div className="grid md:grid-cols-2 sm:grid-cols-2 place-items-center">
          <div>
            <Img2 src="../images/cropped-images/Vein Removal Group 2 Cropped.png" className="h-auto max-w-full" alt="image" />
          </div>
          <div className="md:py-10 py-0 z-10">
            <Box>
              <div className="title text-center md:text-left">HOW DOES</div>
              <div className="mini-title text-center md:text-left">VEIN REMOVAL WORK?</div>
              <div className="line"></div>
              <div className="desc">
                Laser vein removal with the advanced Cynosure® Elite+TM system gives you fast results
                with no downtime. To find out more, contact a member of the experienced Optimum Laser NY
                Hair Removal team online or by phone now at 516-495-4908.
              </div>
              <CustomButton className="inline-block" href="#consultation" type="primary">BOOK A FREE CONSULTATION</CustomButton>
            </Box>
          </div>

        </div>
      </div>

      <Section id='consultation' >
      <h2 className="text-[3rem] md:text-[5rem] font-[500] text-center text-[#35281e] px-2 md:px-0 leading-tight ">SECURE YOUR FREE CONSULTATION NOW</h2>
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
