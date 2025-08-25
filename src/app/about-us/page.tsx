"use client";
import Slider from "@/components/Slider";
import Section, {
  SectionDescription,
  SectionTitle,
} from "@/components/layout/section";
import FlowerSection from "@/components/layout/flowerSection";
import "aos/dist/aos.css";
import ReviewCard from "@/components/ReviewCard";
import React from "react";
import VideoCard from "@/components/videoCard";
import CustomButton from "@/components/button";
import BoxSection, { BoxSplitSection } from "@/components/layout/boxSection";
import Box from "@/components/layout/box";
import styled from "styled-components";
import Input, { DoubleInput } from "@/components/Input";
import Footer from "@/components/footer";
// video thumbnail images
import Head from "next/head";
import dynamic from "next/dynamic";

// Lazy-load iPad-only banner client-side (reuse Contact page's component)
const ContactBannerIpad = dynamic(
  () => import("@/components/ContactBannerIpad"),
  {
    ssr: false,
  }
);

const Img4 = styled.img`
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
    height: 90%;
    object-fit: cover;
  }
  @media (min-width: 1024px) and (max-width: 1300px) {
    object-fit: cover;
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
    <div className="pt-0 md:pt-[1rem]">
      <Head>
        <title>About Us - Your Company Name</title>
        <meta
          name="description"
          content="Learn more about our company and what we do."
        />
        <meta property="og:title" content="About Us - Your Company Name" />
        <meta
          property="og:description"
          content="Learn more about our company and what we do."
        />
        <meta property="og:type" content="website" />
        <meta name="robots" content="index, follow" />
      </Head>

      <div className="bg-gradient-to-r from-[#faecdb] to-[#f9efdd]">
        <div
          data-aos="fade-up"
          data-aos-duration="1000"
          className="  relative lg:h-[725px] mt-[9rem] sm:mt-[7rem] md:mt-[9rem]  lg:mt-[4.5rem] 2xl:container mx-auto  flex items-baseline md:items-center justify-center"
        >
          <div className="grid lg:grid-cols-2 max-lg:place-items-center  z-10 w-full box-wrap">
            <div className="md:pt-10 mt-8 m-4 mb-0 laser-hero-left  md:w-[650px] lg:w-[670px]  2xl:w-[750px] md:translate-x-10 z-10 relative">
              <Box className="pigment-hero-box ">
                <div className="title text-center lg:text-left leading-tight">
                  ABOUT US
                </div>
                <div className="line"></div>
                <div className="desc text-center lg:text-left px-2 sm:px-4">
                  <strong>
                    For over 15 years, <strong>Optimum Laser NY</strong> has
                    proudly served{" "}
                    <strong>
                      Manhasset, Great Neck, Port Washington, Roslyn
                    </strong>{" "}
                    and surrounding <strong>Long Island, New York</strong> areas
                    with{" "}
                    <strong>
                      safe, effective laser hair removal, pigmentation removal,
                      and spider vein removal
                    </strong>{" "}
                    treatments using{" "}
                    <strong>FDA-approved Cynosure&nbsp;technology</strong>.
                    <br />
                    <br />
                    We deliver <strong>long-lasting results</strong> for men and
                    women of <strong>all skin types</strong>, with personalized
                    care from{" "}
                    <strong>highly certified trusted professionals</strong>—all
                    at <strong>fair, flexible pricing</strong> to make your
                    investment in yourself truly worth&nbsp;it.
                  </strong>
                </div>

                <CustomButton
                  className="inline-block mx-auto block"
                  href="#consultation"
                  type="primary"
                  center={true}
                >
                  BOOK A FREE CONSULTATION
                </CustomButton>
              </Box>
            </div>
            <div className="w-full ">
              <Img4
                src="../images/cropped-images/Homepage Group 3 Cropped.png"
                alt="image"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="pt-[1rem] pb-[0rem] md:pb-[3rem] md:pt-[3rem] px-[1rem] md:px-[3rem] bg-white about-details-section">
        <div
          className={
            "container justify-center items-stretch min-h-[400px] flex flex-wrap gap-8 p-[0rem] md:p-[2rem] about-details-row"
          }
        >
          <div
            className={
              "flex-1 min-w-[300px] py-[2rem] md:p-[2rem] text-black font-light about-text-col"
            }
          >
            <div
              className={"mb-[3rem]"}
              style={{
                fontFamily: "Raleway, sans-serif",
                fontSize: "1.24rem",
                fontWeight: 200,
                lineHeight: 1.55,
              }}
            >
              <div className={"mb-[1rem] mt-[6px] text-black font-light"}>
                <span className="font-bold">Since 2009,</span> our highly
                experienced and detail oriented caring team has helped men and
                women across{" "}
                <span className="font-bold">
                  Manhasset and surrounding Long Island areas
                </span>{" "}
                look and feel their best with over{" "}
                <span className="font-bold">200K treatments</span> performed. We
                create <span className="font-bold">custom treatment plans</span>{" "}
                to fit your specific unique goals.
              </div>
              <div className={"mb-[1.5rem] text-black font-light"}>
                At{" "}
                <span className="font-bold">Optimum Laser NY Hair Removal</span>
                , we specialize in advanced laser and body treatments designed
                to deliver{" "}
                <span className="font-bold">
                  maximum results in minimal time
                </span>
                . Our aesthetic services include:
              </div>
              <ul className="list-disc pl-6 space-y-2 text-black font-light">
                <li>
                  <span className="font-bold">
                    Laser Hair Removal Treatments
                  </span>
                </li>
                <li>
                  <span className="font-bold">
                    Laser Vein Removal Treatments
                  </span>
                </li>
                <li>
                  <span className="font-bold">
                    Pigmentation Removal Treatments
                  </span>
                </li>
                <li>
                  <span className="font-bold">
                    Laser Skin Rejuvenation Treatments
                  </span>
                </li>
                <li>
                  <span className="font-bold">
                    Anti-Aging Facials Treatments
                  </span>
                </li>
                <li>
                  <span className="font-bold">Acne Treatments</span>
                </li>
              </ul>
              <div className={"mt-[1.5rem] mb-[3rem] text-black font-light"}>
                Using state-of-the-art,{" "}
                <span className="font-bold">FDA-approved technology</span> like
                the{" "}
                <span className="font-bold">Cynosure Apogee Elite+™ laser</span>
                , we provide safe, effective aesthetic solutions for men and
                women of{" "}
                <span className="font-bold">all skin types and tones</span>.
              </div>
              <div className="text-black font-light">
                <span className="font-bold">
                  Call us at 516-495-4908 or book your FREE consultation online
                </span>{" "}
                today — and take the first step toward smooth, radiant,
                confident skin and investing in yourself!
              </div>
            </div>
            <CustomButton
              className="inline-block mx-auto block"
              href="#consultation"
              type={"secondary"}
              center={true}
            >
              BOOK A FREE CONSULTATION
            </CustomButton>
          </div>
          <div
            className={
              "flex-1 min-w-[450px] w-[40%] pt-[2rem] hidden md:flex justify-center items-start about-image-col"
            }
          >
            <div
              className={
                "w-full max-w-[500px] h-[40rem] rounded-[2rem] about-image-card"
              }
            >
              <img
                className={"w-full h-full object-cover rounded-[2rem]"}
                src={"/images/optimum office.jpg"}
                alt="Optimum Laser NY office"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="pt-[3rem] pb-[3rem] md:pt-[4rem] md:pb-[4rem] px-[1rem] md:px-[3rem] bg-[#faecdb]">
        <div className={"pt-[3rem] container"}>
          <SectionTitle>SEE SOME OF OUR WORK</SectionTitle>
          <SectionDescription>
            {" "}
            Take a look at some of our treatments we provide to our valued
            customers.
          </SectionDescription>
          <Slider itemWidth={400}>
            <div className="relative">
              <img
                className="absolute h-full w-full"
                src="/images/thumbnail/2.png"
                alt="Treatment thumbnail 2"
              />
              <VideoCard videoSrc="/videos/VID_25160429_100420_556.mp4" />
            </div>

            <div className="relative">
              <img
                className="absolute h-full w-full"
                src="/images/thumbnail/1.png"
                alt="Treatment thumbnail 1"
              />
              <VideoCard videoSrc="/videos/VID-20230521-WA0028.mp4" />
            </div>

            <div className="relative">
              <img
                className="absolute h-full w-full"
                src="/images/thumbnail/3.png"
                alt="Treatment thumbnail 3"
              />
              <VideoCard videoSrc="/videos/20230711_165633.mp4" />
            </div>

            <div className="relative">
              <img
                className="absolute h-full w-full"
                src="/images/thumbnail/4.png"
                alt="Treatment thumbnail 4"
              />
              <VideoCard videoSrc="/videos/20230711_154308.mp4" />
            </div>

            <div className="relative">
              <img
                className="absolute h-full w-full"
                src="/images/thumbnail/5.png"
                alt="Treatment thumbnail 5"
              />
              <VideoCard videoSrc="/videos/20230711_154234.mp4" />
            </div>

            <div className="relative">
              <img
                className="absolute h-full w-full"
                src="/images/thumbnail/6.png"
                alt="Treatment thumbnail 6"
              />
              <VideoCard videoSrc="/videos/20230709_101634.mp4" />
            </div>

            <div className="relative">
              <img
                className="absolute h-full w-full"
                src="/images/thumbnail/7.png"
                alt="Treatment thumbnail 7"
              />
              <VideoCard videoSrc="/videos/20230709_101621.mp4" />
            </div>

            <div className="relative">
              <img
                className="absolute h-full w-full"
                src="/images/thumbnail/8.png"
                alt="Treatment thumbnail 8"
              />
              <VideoCard videoSrc="/videos/20230709_101523.mp4" />
            </div>

            <div className="relative">
              <img
                className="absolute h-full w-full"
                src="/images/thumbnail/9.png"
                alt="Treatment thumbnail 9"
              />
              <VideoCard videoSrc="/videos/20230709_101444.mp4" />
            </div>

            <div className="relative">
              <img
                className="absolute h-full w-full"
                src="/images/thumbnail/10.png"
                alt="Treatment thumbnail 10"
              />
              <VideoCard videoSrc="/videos/20230709_101418.mp4" />
            </div>

            <div className="relative">
              <img
                className="absolute h-full w-full"
                src="/images/thumbnail/11.png"
                alt="Treatment thumbnail 11"
              />
              <VideoCard videoSrc="/videos/20230709_101333.mp4" />
            </div>

            <div className="relative">
              <img
                className="absolute h-full w-full"
                src="/images/thumbnail/12.png"
                alt="Treatment thumbnail 12"
              />
              <VideoCard videoSrc="/videos/20230711_101312.mp4" />
            </div>

            <div className="relative">
              <img
                className="absolute h-full w-full"
                src="/images/thumbnail/13.png"
                alt="Treatment thumbnail 13"
              />
              <VideoCard videoSrc="/videos/20230709_101301.mp4" />
            </div>

            <div className="relative">
              <img
                className="absolute h-full w-full"
                src="/images/thumbnail/14.png"
                alt="Treatment thumbnail 14"
              />
              <VideoCard videoSrc="/videos/20230709_101148.mp4" />
            </div>

            <div className="relative">
              <img
                className="absolute h-full w-full"
                src="/images/thumbnail/15.png"
                alt="Treatment thumbnail 15"
              />
              <VideoCard videoSrc="/videos/20230709_101138.mp4" />
            </div>
          </Slider>
        </div>
      </div>

      {/* Brown banner + testimonials */}
      {/* Desktop + mobile banner (hide on iPad widths) */}
      <div className="block ipad:hidden">
        <FlowerSection
          showMap={true}
          hideSmallLeaf={true}
          autoHideOverlappingLeaf={true}
        >
          <div className="text-[1.1rem] md:text-[1.5rem] leading-[1.4] text-center md:text-left px-2 md:px-0">
            With{" "}
            <strong>
              4.9 stars, 290+ reviews on Google, and over 15 years
            </strong>{" "}
            of trusted experience in the Long Island, New York area, we're
            committed to{" "}
            <strong>proven results, safety, and client satisfaction</strong>.
            Experience the difference with a team that truly cares!
          </div>
          <br />
          <br />
          <div className="consultation-text text-[1.05rem] md:text-[1.4rem] leading-[1.4] text-center md:text-left px-2 md:px-0">
            <strong>Book a free consultation</strong> with us to discuss a{" "}
            <strong>custom treatment plan</strong> tailored to your needs.
          </div>
        </FlowerSection>
      </div>

      {/* iPad-only banner, same as Contact Us iPad rebuild */}
      <div className="block md:hidden ipad:block">
        <ContactBannerIpad />
      </div>

      {/* Compact Review Slider Section */}
      <div className="container pt-[1rem] pb-[0.1rem] md:pt-[1.5rem] md:pb-[0.1rem] px-[0.75rem] md:px-[2rem] bg-white">
        <h3 className="text-[1.7rem] md:text-[3rem] font-[500] text-center text-[#35281e] px-2 md:px-0 leading-tight mb-[0.75rem]">
          PROVEN RESULTS, TRUSTED BY OUR CLIENTS
        </h3>
        <p className="text-center text-[#35281e] text-[1.05rem] md:text-[1.2rem] mb-[0.5rem] font-[Raleway]">
          With over 4.9 stars on Google, hear what our loyal clients say about
          their experience with our services.
        </p>

        <Slider itemWidth={260} compact={true} itemsPerSlideDesktop={5}>
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
            hair removal and am already seeing results in a short time.
          </ReviewCard>
          <ReviewCard
            img="/images/testimonials/marissa.png"
            name="Marissa A"
            compact={true}
          >
            Best laser hair removal place. The staff is extremely nice and
            professional and the results are amazing.
          </ReviewCard>
          <ReviewCard
            img="/images/testimonials/kim.png"
            name="Kim M"
            compact={true}
          >
            Wonderful and professional service! The office is clean and the
            staff are very knowledgeable. Highly recommend.
          </ReviewCard>
          <ReviewCard
            img="/images/testimonials/brendelyn.png"
            name="Brendelyn C"
            compact={true}
          >
            Amazing results and such a friendly team. Booking is easy and I’m so
            happy with my progress.
          </ReviewCard>
          <ReviewCard
            img="/images/testimonials/cat.jpg"
            name="Cat S"
            compact={true}
          >
            Orly is fantastic! She listens and adjusts treatments to your needs.
            I’ve recommended Optimum to all my friends.
          </ReviewCard>
          <ReviewCard
            img="/images/testimonials/debbie-y.png"
            name="Debbie Y"
            compact={true}
          >
            I feel comfortable and confident in every session. Results speak for
            themselves.
          </ReviewCard>
          <ReviewCard
            img="/images/testimonials/frances.png"
            name="Frances S"
            compact={true}
          >
            Excellent care and quick appointments. Results are consistent every
            time.
          </ReviewCard>
          <ReviewCard
            img="/images/testimonials/justin.png"
            name="Justin R"
            compact={true}
          >
            Highly professional team and effective treatments. Couldn’t be
            happier.
          </ReviewCard>
          <ReviewCard
            img="/images/testimonials/mimmi.png"
            name="Mimmi P"
            compact={true}
          >
            Clean office, kind staff, and great results. Five stars.
          </ReviewCard>
          <ReviewCard
            img="/images/testimonials/zareen.png"
            name="Zareen S"
            compact={true}
          >
            Truly the best laser experience I’ve had. Efficient and comfortable.
          </ReviewCard>
        </Slider>
      </div>

      <div className="h-[0.5rem] md:h-[1rem]"></div>

      <div
        className="pt-[3rem] pb-[3rem] md:pt-[4rem] md:pb-[4rem] px-[1rem] md:px-[3rem] bg-white"
        id="consultation"
      >
        <h2 className="text-[3rem] md:text-[5rem] font-[500] text-center text-[#35281e] px-2 md:px-0 leading-tight ">
          SCHEDULE YOUR FREE CONSULTATION APPOINTMENT
        </h2>
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
