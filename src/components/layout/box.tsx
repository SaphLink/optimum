import React from "react";
import styled from "styled-components";

const StyledBox = styled.div`
  z-index: 1;
  background-color: #35281e;
  border-radius: 10px;
  padding: 3rem 3rem;
  max-width: 650px;
  justify-content: center;
  gap: 1rem;
  @media only screen and (max-width: 768px) {
    padding: 2rem;
    max-width: 100%;
    border-radius: 0;
  }

  .hero & {
    padding-top: 6rem !important;
  }

  & .title {
    font-size: 5rem;
    color: white;
    letter-spacing: 0.1rem;
  }

  & .title2 {
    font-size: 4rem;
    color: white;
    letter-spacing: 0.1rem;
  }
  & .mini-title {
    font-size: 1.5rem;
    color: white;
    letter-spacing: 0.5rem;
    font-weight: bold;
    font-family: Raleway, sans-serif;
  }

  & .line {
    width: 100%;
    height: 2px;
    background-color: white;
    margin: 1rem 0;
  }

  & .custom-button {
    margin-top: 1rem;
  }

  & .desc {
    font-size: 1.2rem;
    font-weight: 200;
    font-family: Raleway, sans-serif;
    color: #fefffe;
    padding-top: 0.5rem;
    margin-bottom: 1rem;
    @media only screen and (max-width: 768px) {
      padding: 1rem;
      text-align: center;
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
