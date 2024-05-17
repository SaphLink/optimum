"use client";
import Slider from "@/components/Slider";
import Section, { SectionDescription, SectionTitle } from "@/components/layout/section";
import React from "react";
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

const Img3 = styled.img`
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
    <div className="pt-[1rem]">
      <BoxSection hero>
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
      </BoxSection>
      <FlowerSection>
        You don't have to live with sun spots or other sun damage thanks to the modern state-of-the-art laser treatment available at Optimum Laser
        Hair Removal in Manhasset, New York. The Cynosure Apogee Elite+TM laser offers the gentlest. fastest, and MOST effective sun spot removal
        option available. Use online booking or call the office at 516-495-4908 to schedule your appointment with us now!
      </FlowerSection>
      <div className="pt-[3rem] pb-[3rem] md:pt-[4rem] md:pb-[4rem] px-[1rem] md:px-[3rem] bg-white">
        <SectionTitle>FAQs</SectionTitle>
        <div className="flex flex-col justify-center items-center gap-[1rem] mb-[4rem]">
          <CollapseSection title="What is skin pigmentation removal?">
            <div className="desc">
              Skin pigmentation is deposits of melanin that rise to the surface of your skin. It appears as brown spots or blotches on your face,
              arms, chest, shoulders or other parts of your body. <br /> <br />
              Age spots, also called liver spots or sun spots, are the most common kind of skin pigmentation. Freckles are another common kind of
              this. Melasma, which normally appears as a mask covering your cheeks, forehead, and upper lip, is another form of pigmentation
            </div>
          </CollapseSection>
          <CollapseSection title="What causes skin pigmentation?">
            <div className="desc">
              The two main causes of unwanted skin pigmentation are sun damage and aging. Even if you now avoid the sun. years of sun exposure can
              take their toll on your skin as you age.
              <br /> <br />
              Although melasma is often triggered by sun exposure, it's often tied to hormone surges and is quite common during pregnancy.
            </div>
          </CollapseSection>
          <CollapseSection title="How does sun spot removal work?">
            <div className="desc">
              {" "}
              At Optimum Laser Hair Removal, our laser technicians uses the Cynosure® EliteTM Laser to remove unwanted pigmentation. Including sun
              spots. As your practitioner moves the Elite+ device gently over your skin, the laser pulses go directly into the unwanted pigment.
              <br /> <br />
              The laser energy heats and shatters the pigment into many tiny pieces. The pigment grows lighter and disappears in the next few weeks as
              your body's natural healing process takes over. It is important to reduce sun exposure during the healing phase.
            </div>
          </CollapseSection>
          <CollapseSection title="How many treatments do I need?">
            <div className="desc">
              The number of sessions depends on how large the treatment areas are. Most patients need just a few Elite treatments to greatly lessen or
              remove unwanted pigments and sun spots
              <br /> <br />
              Click the online appointment tool or call the office at 516-495-4908 to book now!
            </div>
          </CollapseSection>
        </div>
        <CustomButton className="inline-block" href="#consultation" type="secondary" center>
          BOOK A FREE CONSULTATION
        </CustomButton>
      </div>
      <BoxSection hero>
        <Img2 src="../images/cropped-images/Pigmentation Group 2 Cropped.png" alt="image" />
        <BoxSplitSection className="!hidden md:!flex"></BoxSplitSection>
        <BoxSplitSection>
          <Box className="!pt-[2rem] !pb-[3rem] !translate-y-0">
            <div className="title">HOW DOES</div>
            <div className="mini-title">PIGMENTATION REMOVAL WORK?</div>
            <div className="line"></div>
            <div className="desc">
              At Optimum Laser Hair Removal, our laser technicians use the Cynosure® Elite+TM laser to remove unwanted pigmentation, including sun
              spots. As your practitioner moves the Elite+ device gently over your skin, the laser pulses go directly into the unwanted pigment.
            </div>
            <CustomButton className="inline-block" href="#consultation" type="primary">BOOK A FREE CONSULTATION</CustomButton>
          </Box>
        </BoxSplitSection>
      </BoxSection>
      <div className="pt-[3rem] pb-[3rem] md:pt-[4rem] md:pb-[4rem] px-[1rem] md:px-[3rem] bg-white" id='consultation'>
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
      </div>
      <Footer />
    </div>
  );
};

export default page;
