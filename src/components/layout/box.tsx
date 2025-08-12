import React from "react";
import styled from "styled-components";

const StyledBox = styled.div`
  z-index: 20;
  background-color: #35281e;
  border-radius: 10px;
  padding: 1.75rem 3.5rem;
  max-width: 950px;
  justify-content: center;
  gap: 0.75rem;
  margin-right: 1rem;
  transform-origin: center top;
  
  @media only screen and (max-width: 768px) {
    padding: 1.5rem;
    max-width: 100%;
    border-radius: 0;
    margin-right: 0;
  }

  .hero & {
    padding-top: 3rem !important;
  }

  &.about-box {
    padding: 1.75rem 3rem;
    width: 100%;
    max-width: 880px;
    margin: 0; /* remove negative offset on desktop */
    position: relative;

    @media only screen and (max-width: 768px) {
      padding: 4rem 1.5rem 1.5rem 1.5rem;
      width: 100%;
      margin-left: 0;
      margin-top: 0;
      border-radius: 0;
      margin: 0;
    }
  }

  & .title {
    font-size: clamp(3.5rem, 5vw, 5rem);  /* Responsive font size */
    color: white;
    letter-spacing: 0.1rem;
          @media only screen and (max-width: 768px) {
        font-size: 3.6rem;
      }
  }

  & .title2 {
    font-size: clamp(3rem, 4vw, 4rem);
    color: white;
    letter-spacing: 0.1rem;
  }
  
  & .mini-title {
    font-size: clamp(1.3rem, 2.5vw, 1.6rem);
    color: white;
    letter-spacing: 0.45rem;
    font-weight: bold;
    font-family: Raleway, sans-serif;
  }

  & .line {
    width: 100%;
    height: 2px;
    background-color: white;
    margin: 0.5rem 0;
  }

  & .custom-button {
    margin-top: 0.5rem;
  }

  & .desc {
    font-size: clamp(0.98rem, 1.18vw, 1.10rem);
    line-height: 1.45;
    font-weight: 300;
    font-family: Raleway, sans-serif;
    color: #fefffe;
    padding-top: 0.25rem;
    margin-bottom: 0.5rem;
    @media only screen and (max-width: 768px) {
      padding: 0.5rem 0.75rem;
      text-align: center;
      font-size: 1rem;
      line-height: 1.5;
    }
  }

  &.laser-service-box {
    max-width: 1400px;
    width: 100%;
    
    @media only screen and (max-width: 768px) {
      max-width: 100%;
      padding: 1.5rem;
      padding-bottom: 1.5rem;
      
      .title {
        font-size: 2.5rem !important;
        white-space: normal !important;
        line-height: 1.2;
        text-align: center;
      }
      
      .mini-title {
        font-size: 1.2rem !important;
        text-align: center;
        letter-spacing: 0.3rem;
      }
    }
  }
`;

const Box = (props: any) => {
  return (
    <StyledBox {...props} className={"box " + props.className}>
      {props.children}
    </StyledBox>
  );
};

export default Box;
