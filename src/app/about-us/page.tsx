"use client";
import Slider from "@/components/Slider";
import Section, {
  SectionDescription,
  SectionTitle,
} from "@/components/layout/section";
import React from "react";
import VideoCard from "@/components/videoCard";
import CustomButton from "@/components/button";
import BoxSection, { BoxSplitSection } from "@/components/layout/boxSection";
import Box from "@/components/layout/box";
import styled from "styled-components";
import Input, { DoubleInput } from "@/components/Input";
import Footer from "@/components/footer";
// video thumbnail images



const Img3 = styled.img`
  position: absolute;
  bottom: 0;
  right: 0;
  height: 85%;
  object-fit: contain;
  object-position: bottom;
`;

const page = () => {
  return (
    <div className="pt-[1rem]">

      {/* <BoxSection hero>
        <BoxSplitSection>
          <Box className="!pt-[2rem] !pb-[3rem] !translate-y-0">
            <div className="title">ABOUT US</div>
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
            <CustomButton className="inline-block" href="#consultation" type="primary">
              BOOK A FREE CONSULTATION
            </CustomButton>
          </Box>
        </BoxSplitSection>
        <Img3
          src="../images/cropped-images/Homepage Group 3 Cropped.png"
          alt="image"
        />
      </BoxSection> */}


      <div className="about-us-banner h-[600px] mt-[9.4rem] md:mt-[9.5rem] sm:mt-[9.5rem] lg:mt-[9.5rem] container mx-auto bg-gradient-to-r from-[#faecdb] to-[#f9efdd] flex items-center justify-center">
        <div className="grid md:grid-cols-2 sm:grid-cols-2 place-items-center">
          <div className="md:py-10 py-0">
            <Box>
              <div className="title text-center md:text-left">ABOUT US</div>
              {/* <div className="mini-title text-center md:text-left">SERVICES</div> */}
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
            
            <CustomButton className="inline-block" href="#consultation" type="primary">
              BOOK A FREE CONSULTATION
            </CustomButton>

            </Box>
          </div>
          <div>
            <img src="../images/cropped-images/Homepage Group 3 Cropped.png" className="visible md:invisible h-auto max-w-full"
              alt="image" />

          </div>
        </div>
      </div>



      <div className="pt-[3rem] pb-[3rem] md:pt-[4rem] md:pb-[4rem] px-[1rem] md:px-[3rem] bg-white">
        <div
          className={
            "justify-center items-stretch min-h-[400px] flex flex-wrap p-[2rem]"
          }
        >
          <div className={"flex-1 p-[2rem] "}>
            <div
              className={"mb-[3rem]"}
              style={{
                fontFamily: "Raleway, sans-serif",
                fontSize: "1.2rem",
                fontWeight: 200,
              }}
            >
              <div className={"mb-[3rem]"}>
                Located in Manhasset, New York, the highly experienced{" "}
                <span
                  style={{
                    fontFamily: "Broadway",
                    fontSize: "1.3rem",
                  }}
                >
                  Optimum Laser Hair Removal
                </span>{" "}
                team emphasizes effective and immediate results all while
                ensuring the highest level of professionalism, cleanliness, and
                patient satisfaction.
              </div>
              <div className={"mb-[3rem]"}>
                <span
                  style={{
                    fontFamily: "Broadway",
                    fontSize: "1.3rem",
                  }}
                >
                  Optimum Laser Hair Removal
                </span>{" "}
                offers face and body treatments including laser hair removal,
                laser vein removal, pigmentation treatment, skin rejuvenation,
                anti-aging facials, and acne treatment. All treatments are
                executed to ensure maximum results in minimal time. Our team
                uses state-of-the-art FDA approved technology, such as the
                Cynosure Apogee Elite+ TM laser
              </div>
              <div className={"mb-[3rem]"}>
                Since 2009, the entire{" "}
                <span
                  style={{
                    fontFamily: "Broadway",
                    fontSize: "1.3rem",
                  }}
                >
                  Optimum Laser Hair Removal
                </span>{" "}
                team has been dedicated to helping patients receive the utmost
                results in the shortest time frames possible. Regardless of each
                patient's aesthetic goals, our caring and detail-oriented team
                will leverage a flexible approach to achieve the customer's
                desires. The team is ready to help men and women of all skin
                types, located in Manhasset and surrounding areas, look and feel
                fantastic.
              </div>
              Book an appointment online or call the office at 516-495-4908 to
              schedule a{" "}
              <span
                style={{
                  fontFamily: "Raleway, serif",
                  fontWeight: "500",
                  fontSize: "1.2rem",
                }}
              >
                FREE CONSULTATION{" "}
              </span>{" "}
              today!
            </div>
            <CustomButton className="inline-block" href="#consultation" type={"secondary"}>
              BOOK A FREE CONSULTATION
            </CustomButton>
          </div>
          <div className={"w-[40%] p-[2rem] flex justify-center items-start"}>
            <div
              className={
                "w-full max-w-[500px] h-[40rem] min-w-[450px] rounded-[2rem]"
              }
            >
              <img
                className={"w-full h-full object-cover rounded-[2rem]"}
                src={
                  "../images/cropped-images/Optimum Laser Office Cropped.png"
                }
              />
            </div>
          </div>
        </div>
      </div>
      <div className="pt-[3rem] pb-[3rem] md:pt-[4rem] md:pb-[4rem] px-[1rem] md:px-[3rem] bg-[#faecdb]">
        <div className={"pt-[3rem]"}>
          <SectionTitle>SEE SOME OF OUR WORK</SectionTitle>
          <SectionDescription>
            {" "}
            Take a look at some of our treatments we provide to our valued
            customers
          </SectionDescription>
          <Slider itemWidth={400}>
            <div className="relative">
              <img className="absolute h-full w-full" src="/images/thumbnail/2.png" />
              <VideoCard videoSrc="/videos/VID_25160429_100420_556.mp4" />
            </div>

            <div className="relative">
              <img className="absolute h-full w-full" src="/images/thumbnail/1.png" />
              <VideoCard videoSrc="/videos/VID-20230521-WA0028.mp4" />
            </div>

            <div className="relative">
              <img className="absolute h-full w-full" src="/images/thumbnail/3.png" />
              <VideoCard videoSrc="/videos/20230711_165633.mp4" />
            </div>

            <div className="relative">
              <img className="absolute h-full w-full" src="/images/thumbnail/4.png" />
              <VideoCard videoSrc="/videos/20230711_154308.mp4" />
            </div>

            <div className="relative">
              <img className="absolute h-full w-full" src="/images/thumbnail/5.png" />
              <VideoCard videoSrc="/videos/20230711_154234.mp4" />
            </div>

            <div className="relative">
              <img className="absolute h-full w-full" src="/images/thumbnail/6.png" />
              <VideoCard videoSrc="/videos/20230709_101634.mp4" />
            </div>

            <div className="relative">
              <img className="absolute h-full w-full" src="/images/thumbnail/7.png" />
              <VideoCard videoSrc="/videos/20230709_101621.mp4" />
            </div>

            <div className="relative">
              <img className="absolute h-full w-full" src="/images/thumbnail/8.png" />
              <VideoCard videoSrc="/videos/20230709_101523.mp4" />
            </div>

            <div className="relative">
              <img className="absolute h-full w-full" src="/images/thumbnail/9.png" />
              <VideoCard videoSrc="/videos/20230709_101444.mp4" />
            </div>

            <div className="relative">
              <img className="absolute h-full w-full" src="/images/thumbnail/10.png" />
              <VideoCard videoSrc="/videos/20230709_101418.mp4" />
            </div>

            <div className="relative">
              <img className="absolute h-full w-full" src="/images/thumbnail/11.png" />
              <VideoCard videoSrc="/videos/20230709_101333.mp4" />
            </div>

            <div className="relative">
              <img className="absolute h-full w-full" src="/images/thumbnail/12.png" />
              <VideoCard videoSrc="/videos/20230709_101312.mp4" />
            </div>

            <div className="relative">
              <img className="absolute h-full w-full" src="/images/thumbnail/13.png" />
              <VideoCard videoSrc="/videos/20230709_101301.mp4" />
            </div>

            <div className="relative">
              <img className="absolute h-full w-full" src="/images/thumbnail/14.png" />
              <VideoCard videoSrc="/videos/20230709_101148.mp4" />
            </div>

            <div className="relative">
              <img className="absolute h-full w-full" src="/images/thumbnail/15.png" />
              <VideoCard videoSrc="/videos/20230709_101138.mp4" />
            </div>


          </Slider>
        </div>
      </div>
      <div className="pt-[3rem] pb-[3rem] md:pt-[4rem] md:pb-[4rem] px-[1rem] md:px-[3rem] bg-white" id="consultation">
        <h2 className="text-[3rem] md:text-[5rem] font-[500] text-center text-[#35281e] px-2 md:px-0 leading-tight ">SECURE YOUR FREE CONSULTATION NOW</h2>
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
              <Input name="address" placeholder="Address" half />
            </DoubleInput>
            <Input name="date and time" placeholder="Date and Time" />
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
      </div>
      <Footer />
    </div>
  );
};

export default page;
