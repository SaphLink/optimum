"use client";
import Input, { DoubleInput } from "@/components/Input";
import CustomButton from "@/components/button";
import Footer, { FooterIcon, SocialIcons } from "@/components/footer";
import Box from "@/components/layout/box";
import BoxSection, { BoxSplitSection } from "@/components/layout/boxSection";
import FlowerSection from "@/components/layout/flowerSection";
import Section, {
  SectionDescription,
  SectionTitle,
} from "@/components/layout/section";
import React from "react";
import ImageBox from "@/components/imageBox";
import { StyledIcons } from "@/components/styledIcons";
import { BiLogoFacebook } from "react-icons/bi";
import { AiOutlineInstagram } from "react-icons/ai";
import { FaPhoneAlt } from "react-icons/fa";
import { GrMail } from "react-icons/gr";
import CollapseSection from "@/components/layout/collapseSection";
import styled from "styled-components";

const Img3 = styled.img`
  position: absolute;
  bottom: 0;
  right: 0;
  height: 85%;
  object-fit: contain;
  object-position: bottom;
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
  return (
    <>
      <div className="laser-hair-removal relative h-[700px] mt-[9.4rem] md:mt-[10.8rem] sm:mt-[10.5rem] lg:mt-[10.5rem] container mx-auto bg-gradient-to-r from-[#faecdb] to-[#f9efdd] flex items-baseline md:items-center justify-center">
        <div className="grid md:grid-cols-2 sm:grid-cols-2 place-items-center">
          <div className="md:py-10 py-0">
            <Box>
              <div className="title text-center md:text-left">LASER</div>
              <div className="mini-title text-center md:text-left">
                HAIR REMOVAL
              </div>
              <div className="line"></div>
              <div className="desc">
                Shaving, plucking, tweezing, waxing are all temporary fixes for
                unwanted hair. Over time these temporary fixes increase painful
                ingrown hairs, further irritating the skin, NOT budget friendly
                and costly.{" "}
              </div>
              <div className="desc">
                Laser hair removal is a permanent method of hair reduction that
                removes ingrown hairs and shadows, while lightening and
                smoothening the skin at the same time.
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
            <img
              src="../images/cropped-images/Homepage Group 3 Cropped.png"
              className="visible md:invisible h-auto max-w-full"
              alt="image"
            />
          </div>
        </div>
      </div>

      <FlowerSection>
        With our FDA approved Cynosure Apogee Elite + machine. the laser hair
        removal treatments performed by our certified laser technicians quickly
        and easily reduce unwanted hair on your body by targeting deep within
        the skin, providing longer-lasting and permanent results.
      </FlowerSection>

      <div className="px-5 bg-[#35281e] p-[2rem] mt-[100px]">
        <div className="px-[30px] md:px-[200px]">
          <div className="title text-center md:text-left text-white font-bold text-[2rem] md:text-[5rem] m-0 font-[Russo One] uppercase tracking-[0.2rem]">
            Electrolysis
          </div>
          <div className="mini-title text-center md:text-left text-[1.5rem] font-semibold text-white font-[Raleway] uppercase tracking-[0.5rem]">
            Hair Removal
          </div>
          <div className="line bg-white w-full h-1 mt-3 mb-3 font-[Raleway]"></div>
          <p className="text-white font-light text-[1.1rem] font-[Raleway] text-center md:text-left">
            Electrolysis hair removal permanently removes and destroys unwanted
            hair follicles from the face or body by using an electrical current
            using a sterile tiny needle. This method is safe for all skin types,
            and highly effective for those with gray hairs, blonde hairs, thin
            hair and peach fuzz.{" "}
            </p>
            <br/>
            <p className="text-white font-light text-[1.1rem] font-[Raleway] text-center md:text-left">
            At Optimum Laser NY Inc in Manhasset NY, we use state-of-the-art
            technology in addition to our 15-year expertise with hair removal to
            provide maximum results to achieve your goal of being hair-free.
            </p>
            <br/>
            <p className="text-white font-light text-[1.1rem] font-[Raleway] text-center md:text-left">
            Our trained electrologist assesses clients thoroughly and creates
            their unique treatment plan. Appointments are usually every 1-3
            weeks at 15-minute intervals. Prices vary based on time intervals.
            Shaving is not needed prior to your appointment. NO downtime!
            </p>
            <br/>
            <p className="text-white font-light text-[1.1rem] font-[Raleway] text-center md:text-left">
            Contact us for more information on how you can start electrolysis
            today!
          </p>
        </div>
      </div>

     

      <div className="pt-[3rem] pb-[3rem] md:pt-[4rem] md:pb-[4rem] px-[1rem] md:px-[3rem] bg-white">
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
              Our team at Optimum Laser NY recommends to avoid direct sun exposure,
              intense physical activity, and harsh moisturizers at least for one
              day post treatment. Apply sunscreen to treatment areas. Redness or
              red bumps is normal after treatment that subsides within 2-3 hours
              of treatment you may apply hydrocortisone.{" "}
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
        The team at{" "}
        <span
          style={{
            fontFamily: "Broadway",
            fontSize: "1.3rem",
          }}
        >
          Optimum Laser NY
        </span>{" "}
        strives and takes pride in providing maximum results to our clients.
        Finding the right medical spa is difficult, and it is our promise at{" "}
        <span
          style={{
            fontFamily: "Broadway",
            fontSize: "1.3rem",
          }}
        >
          Optimum Laser NY
        </span>{" "}
        to provide safe, consistent, effective, and affordable treatments for
        ALL skin types! Common areas include underarms, bikini line, legs and
        face, as the possibilities are endless! The average time for treatments
        ranges from 5 minutes to one hour. Wave goodbye to ingrown hairs, razors
        and waxing and say hello to smooth flawless skin!{" "}
      </FlowerSection>
      <div
        className="pt-[3rem] pb-[3rem] md:pt-[4rem] md:pb-[4rem] px-[1rem] md:px-[3rem] bg-white"
        id="consultation"
      >
        <h2 className="text-[3rem] md:text-[5rem] font-[500] text-center text-[#35281e] px-2 md:px-0 leading-tight ">
          SECURE YOUR FREE CONSULTATION NOW
        </h2>
        <SectionDescription>
          Please provide your contact information to help us schedule your free
          consultation
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
