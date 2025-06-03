import React from "react";
import styled from "styled-components";

const StyledBox = styled.div`
  z-index: 1;
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
    padding: 0.5rem 2.5rem 1.75rem 2.5rem;
    width: 100%;  /* Changed from calc */
    margin-left: 0;  /* Reset margin */
    margin-top: -3rem;
    position: relative;
    
    /* Container for content to maintain aspect ratio */
    &::after {
      content: '';
      display: block;
      padding-bottom: 2%;  /* Maintains some spacing */
    }

    @media only screen and (max-width: 768px) {
      padding: 4rem 1.5rem 1.5rem 1.5rem;
      width: 100%;
      margin-left: 0;
      margin-top: 0;
      border-radius: 0;
      margin: 0;
    }

    /* High zoom adjustments */
    @media screen and (min-width: 1200px) {
      width: calc(100% + 2vw);
      margin-left: -1vw;
      max-width: 90%;
      
      .title {
        font-size: 4rem;
      }
      
      .desc {
        font-size: 0.95rem;
      }
      
      padding: 0.5rem 2rem 1.5rem 2rem;
    }
  }

  & .title {
    font-size: clamp(3.5rem, 5vw, 5rem);  /* Responsive font size */
    color: white;
    letter-spacing: 0.1rem;
    @media only screen and (max-width: 768px) {
      font-size: 3.5rem;
    }
  }

  & .title2 {
    font-size: clamp(3rem, 4vw, 4rem);
    color: white;
    letter-spacing: 0.1rem;
  }
  
  & .mini-title {
    font-size: clamp(1.2rem, 1.5vw, 1.5rem);
    color: white;
    letter-spacing: 0.5rem;
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
    font-size: clamp(0.9rem, 1vw, 1rem);
    line-height: 1.4;
    font-weight: 300;
    font-family: Raleway, sans-serif;
    color: #fefffe;
    padding-top: 0.25rem;
    margin-bottom: 0.5rem;
    @media only screen and (max-width: 768px) {
      padding: 0.5rem;
      text-align: center;
      font-size: 0.9rem;
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
