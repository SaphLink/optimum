"use client";
import ReviewCard from "@/components/ReviewCard";
import Slider from "@/components/Slider";
import CustomButton from "@/components/button";
import CustomCircle from "@/components/customCircle";
import Footer from "@/components/footer";
import ImageBox from "@/components/imageBox";
import Box from "@/components/layout/box";
import BoxSection, { BoxSplitSection } from "@/components/layout/boxSection";
import Section, {
  SectionDescription,
  SectionTitle,
} from "@/components/layout/section";
import styled from "styled-components";
import Popup from "./popup";
import Head from "next/head";
//#region

const Logo = styled.img`
  object-fit: contain;
  margin: 0 auto;
  height: 100px;
`;

const Img = styled.img`
  position: absolute;
  bottom: 0;
  right: -45px;
  height: 100%;
  object-fit: contain;
  object-position: bottom;

  // @media only screen and (max-width: 768px) {
  //   height: 350px;
  //   width: 350px;
  //   left: 0;
  // }
`;
const Img2 = styled.img`
  position: absolute;
  bottom: 0;
  left: 0;
  height: 100%;
  object-fit: contain;
  object-position: bottom;

  @media only screen and (max-width: 768px) {
    height: 350px;
    width: 350px;
    left: 0;
  }
`;
const Img3 = styled.img`
  position: absolute;
  bottom: 0;
  right: 0;
  height: 100%;
  object-fit: contain;
  object-position: bottom;

  @media only screen and (max-width: 768px) {
    height: 350px;
    width: 350px;
    right: 0;
  }
`;

const Title = styled.h2`
  font-size: 3rem;
  color: white;
  text-align: center;
  font-weight: bold;
  align-items: center;
  justify-content: center;
  padding-top: 0.7rem;
  font-family: "Russo One", sans-serif;
`;

const Description = styled.p`
  font-size: 1.5rem;
  color: white;
  font-weight: normal;
  text-align: center;
  font-family: "Raleway", sans-serif;
`;
const Line = styled.div`
  height: 2px;
  background-color: white;
  margin-top: 0.5rem;
  margin-bottom: 1rem;
  width: 100%;
  z-index: 3;
`;
const ServiceButton = styled.button`
  display: flex;
  justify-content: space-around;
  gap: 10px;
  align-items: center;
  width: 100%;
  padding: 0.8rem;
  border-radius: 20px;
  background-color: #fefffe;
  margin-bottom: 0.3rem;
  color: #35281e;
  font-weight: bold;

  .price {
    font-size: 2rem;
    font-weight: bold;
    max-width: 120px;
  }

  .service-name {
    font-size: 1rem;
    font-weight: bold;
    font-family: "Raleway", sans-serif;
    margin-right: 0.3rem;
    margin-left: 0.3rem;
    text-align: start;
  }

  .service-name div {
    display: flex;
    justify-content: flex-start;
    gap: 5px;
  }

  .old-price {
    font-size: 1.2rem;
    text-decoration: line-through;
    color: red;
  }
`;

const ServiceDescription = styled.p`
  font-size: 1rem;
  color: white;
  margin-top: 0.5rem;
  margin-bottom: 1rem;
  font-family: "Raleway", sans-serif;
  width: 100%;
  text-align: left;
`;

const inputStyle = {
  width: "100%",
  padding: "1rem",
  margin: "1px 0",
  display: "inline-block",
  border: "1px solid #ccc",
  color: "black",
  backgroundColor: "white",
};

const textareaStyle = {
  ...inputStyle,
  height: "110px",
  width: "100%",
};
const Row = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 1rem;

  @media only screen and (max-width: 1200px) {
    width: 100%;
  }
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
//#endregion

export default function Home() {
  return (
    <>
      <div
        style={{
          backgroundImage: "linear-gradient(to bottom, #faecdb, #f9efdd)",
          scrollbarWidth: "none",
        }}
      >
        <Popup />

        <div className="deskop-view">
          <div className="w-full relative h-screen md:h-[700px] lg:h-[580px] mt-[9.4rem] md:mt-[10.8rem] sm:mt-[10.5rem] lg:mt-[10.5rem] container mx-auto bg-gradient-to-r from-[#faecdb] to-[#f9efdd] flex items-baseline md:items-center justify-center">
            <div className="grid md:grid-cols-2 lg:grid-cols-2 sm:grid-cols-2 place-items-center">
              <div className="md:py-10 py-0 z-10">
                <Box>
                  <Logo src="../images/homepage/Optimum Laser Brown White.png" />

                  <div className="line"></div>
                  <div className="desc text-center">
                    <span
                      style={{
                        fontFamily: "Broadway",
                        fontSize: "1.3rem",
                      }}
                    >
                      Optimum Laser NY
                    </span>{" "}
                    is a medical spa that offers cutting-edge medical grade
                    lasers technology.
                  </div>
                  <CustomButton href="/about-us" type="primary">
                    LEARN MORE
                  </CustomButton>
                </Box>

                {/* <CustomCircle
              labels={[
                {
                  text: "BOOK",
                  style: {
                    fontSize: "16px",
                    fontWeight: "400",
                    letterSpacing: "3px",
                  },
                },
                { text: "FREE", style: { fontSize: "40px", fontWeight: "bold" } },
                {
                  text: "CONSULTATION NOW!",
                  style: { fontSize: "10px", fontWeight: "400" },
                },
              ]}
              size={140}
            /> */}
              </div>
              <div>
                <div className="custom-circle flex flex-col items-center justify-center h-[170px] w-[170px]">
                  <p>Book</p>
                  <p>FREE</p>
                  <p>CONSULTATION NOW!</p>
                </div>
                <Img
                  src="../images/cropped-images/Homepage Group 1 Cropped.png"
                  alt="image"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="mobile-view">
          <div className="w-full mt-[9.4rem] md:mt-[10.8rem] sm:mt-[10.5rem] lg:mt-[10.5rem] container mx-auto bg-gradient-to-r from-[#faecdb] to-[#f9efdd] flex items-baseline md:items-center justify-center">
            <div className="grid md:grid-cols-3 lg:grid-cols-3 sm:grid-cols-3 place-items-center">
              <div className="md:py-10 py-0 z-10">
                <Box>
                  <Logo src="../images/homepage/Optimum Laser Brown White.png" />

                  <div className="line"></div>
                  <div className="desc text-center">
                    <span
                      style={{
                        fontFamily: "Broadway",
                        fontSize: "1.3rem",
                      }}
                    >
                      Optimum Laser NY
                    </span>{" "}
                    is a medical spa that offers cutting-edge medical grade
                    laser technology.
                  </div>
                  <CustomButton href="/about-us" type="primary">
                    LEARN MORE
                  </CustomButton>
                </Box>
              </div>

              <div className="lg:block md:block mt-[40px] mb-[15px]">
                <div className="custom-circle-mb flex flex-col items-center justify-center h-[170px] w-[170px]">
                  <p>Book</p>
                  <p>FREE</p>
                  <p>CONSULTATION NOW!</p>
                </div>
              </div>

              <div className="p-0">
                <img
                  src="../images/cropped-images/home-banner.png"
                  alt="image"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="pt-[3rem] pb-[3rem] md:pt-[4rem] md:pb-[4rem] px-[1rem] md:px-[3rem] bg-white">
          <SectionTitle>SERVICES</SectionTitle>
          <SectionDescription>
            Benefit from our offerings to achieve the look of your dreams.
          </SectionDescription>
          <ImagesContainer>
            <ImageBox
              href="/services/laser-service"
              image="/images/cropped-images/Laser Hair Pohot.png"
              title="LASER HAIR"
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
                href="/services/pigmentation-service"
                image="/images/cropped-images/Skin Pigmentation Photo.png"
                title="PIGMENTATION"
                description="REMOVAL"
                style={{
                  flex: 1,
                  width: "100%",
                  backgroundColor: "#f8efdd",
                  overflow: "hidden",
                }}
                imgposition={"middle1"}
              />
              <ImageBox
                href="/services/vein-removal"
                image="/images/cropped-images/Vein Removal Photo.png"
                title="VEIN"
                description="REMOVAL"
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
              style={{
                backgroundColor: "#f8efdd",
                overflow: "hidden",
                flex: 1,
              }}
              imgposition="right"
              href={"/services/facial-service"}
            />
          </ImagesContainer>
          <div className="w-fit mx-auto">
            <CustomButton
              className="inline-block"
              href="contact-us"
              type="secondary"
            >
              BOOK A FREE CONSULTATION
            </CustomButton>
          </div>
        </div>

        <BoxSection
          style={{
            backgroundColor: "linear-gradient(to right, #faecdb, #f9efdd)",
          }}
        >
          <Img2
            className="translate-y-[7%]"
            src="../images/cropped-images/Homepage Group 2 Cropped.png"
            alt="image"
          />
          <BoxSplitSection className="!hidden md:!flex"></BoxSplitSection>
          <BoxSplitSection>
            <img
              src="../images/cropped-images/optimumSale.PNG"
              alt="optimum"
              className="rounded-md"
            />
          </BoxSplitSection>

          {/* <CustomCircle
            labels={[
              {
                text: "DISCOUNT",
                style: {
                  fontSize: "16px",
                  fontWeight: "200",
                  letterSpacing: "3px",
                },
              },
              { text: "15%", style: { fontSize: "50px", fontWeight: "600" } },
              {
                text: "FOR NEW CUSTOMERS",
                style: {
                  fontSize: "12px",
                  fontWeight: "200",
                  marginTop: "0.2rem",
                },
              },
            ]}
            size={170}
          /> */}
        </BoxSection>

        <div className="pt-[3rem] pb-[3rem] md:pt-[4rem] md:pb-[4rem] px-[1rem] md:px-[3rem] bg-white">
          <h2 className="text-[3rem] md:text-[5rem] font-[500] text-center text-[#35281e] px-5 md:px-0 leading-tight ">
            WHAT USERS THINK
          </h2>
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
              Optimum Laser NY is a professional pleasant company. I have
              started treatments more than 10 years ago and now my doughters
              enjoy the warm and welcoming service that we get there. Never a
              problem, always welcoming and accommodating and clean ! Thank you
              for making us smooth and happy :)
            </ReviewCard>
            <ReviewCard
              img="images/testimonials/zareen.png"
              name="Zareen Mistry"
              time="2 months ago"
            >
              Daniela is amazing! I have had the best experience and even better
              results. Very clean, very professional from the front desk to the
              technician. Always v accommodating also. The best place I've been
              to for laser hair removal, and hopefully the last bc the results
              are excellent so far!!
            </ReviewCard>
            <ReviewCard
              img="images/testimonials/urfa.png"
              name="Urfa Ajmal"
              time="5 months ago"
            >
              I have been getting laser hair removals and electrolysis for my
              face for months. This place is the best! I get my laser from
              Daniela and she is the best, I have seen my hair growth lessen so
              much and I an loving it. Definitely go to them! They are the best
            </ReviewCard>
            <ReviewCard
              img="images/testimonials/marissa.png"
              name="Marissa"
              time="5 months ago"
            >
              Been coming here for 10 years ! Pushp is the best!!! Dark hair and
              olive skin tone - never an issue. I come back once a year for
              touch ups.
            </ReviewCard>
            <ReviewCard
              img="images/testimonials/justin.png"
              name="Justin Gomez"
              time="1 year ago"
            >
              Optimum Laser NY is great - Eti is very helpful and makes
              scheduling appointments stress-free. Daniela is an awesome tech -
              not only is she great at what she does, but she also has a fun
              personality that makes you feel comfortable. I’ve seen greatly
              noticeable results so far, and look forward to seeing what future
              sessions will do for me!
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
              Optimum Laser NY. Very professional & Nicole does a fantastic job,
              she makes you feel super comfortable and explain each part of the
              process as it happens. The place is very clean and the atmosphere
              is very pleasant. I highly recommend anyone who wants results and
              good service to come here!!
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
              very happy with my experience here and would recommend it to
              anyone struggling with their hair!
            </ReviewCard>
            <ReviewCard
              img="images/testimonials/kim.png"
              name="Kim Lazar"
              time="3 years ago"
            >
              I got amazing results for my laser hair removal. The prices are
              reasonable, the owner is the nicest person, and no matter who I
              get one I come for a treatment, they all do a great job. Honestly,
              laser hair removal at optimum laser NY is some of the best money
              I’ve ever spent. I highly recommend!
            </ReviewCard>
          </Slider>
          <div className="w-fit mx-auto">
            <CustomButton
              className="inline-block"
              href="contact-us"
              type="secondary"
            >
              BOOK A FREE CONSULTATION
            </CustomButton>
          </div>
        </div>

        <div className="container mx-auto bg-gradient-to-r from-[#faecdb] to-[#f9efdd]">
          <div className="grid md:grid-cols-2 sm:grid-cols-2 place-items-center">
            <div className="md:py-10 py-0">
              <Box>
                <div>
                  <Title>CHAT WITH US</Title>
                </div>
                <form
                  action={`https://formsubmit.co/${process.env.NEXT_PUBLIC_EMAIL}`}
                  method="POST"
                >
                  <Row className="mb-[1rem]">
                    <input
                      name="name"
                      type="text"
                      placeholder="Name"
                      style={inputStyle}
                    />
                    <input
                      name="email"
                      type="email"
                      placeholder="Email"
                      style={inputStyle}
                    />
                  </Row>

                  <Row className="mb-[1rem]">
                    <input
                      name="phone number"
                      type="text"
                      placeholder="Phone Number"
                      style={inputStyle}
                    />
                    <input
                      name="address"
                      type="text"
                      placeholder="Address"
                      style={inputStyle}
                    />
                  </Row>

                  <textarea
                    name="message"
                    placeholder="Message"
                    style={textareaStyle}
                  ></textarea>

                  <CustomButton submit center type="primary">
                    SUBMIT
                  </CustomButton>
                </form>
              </Box>
            </div>
            <div>
              <img
                src="../images/cropped-images/Homepage Group 3 Cropped.png"
                alt="image"
              />
            </div>
          </div>
        </div>

        {/* <BoxSection className="hidden !min-h-[700px] md:!min-h-[max(110vh,800px)]">
        <BoxSplitSection className="w-1/2">
          <Box>
            <div>
              <Title>CHAT WITH US</Title>
            </div>
            <form
              action={`https://formsubmit.co/${process.env.NEXT_PUBLIC_EMAIL}`}
              method="POST"
            >
              <Row className="mb-[1rem]">
                <input
                  name="name"
                  type="text"
                  placeholder="Name"
                  style={inputStyle}
                />
                <input
                  name="email"
                  type="email"
                  placeholder="Email"
                  style={inputStyle}
                />
              </Row>

              <Row className="mb-[1rem]">
                <input
                  name="phone number"
                  type="text"
                  placeholder="Phone Number"
                  style={inputStyle}
                />
                <input
                  name="address"
                  type="text"
                  placeholder="Address"
                  style={inputStyle}
                />
              </Row>

              <textarea
                name="message"
                placeholder="Message"
                style={textareaStyle}
              ></textarea>

              <CustomButton submit center type="primary">
                SUBMIT
              </CustomButton>
            </form>
          </Box>
        </BoxSplitSection>
        <BoxSplitSection>

        </BoxSplitSection>
        <Img3
          src="../images/cropped-images/Homepage Group 3 Cropped.png"
          alt="image"
        />
      </BoxSection> */}

        <Footer />
      </div>
    </>
  );
}
