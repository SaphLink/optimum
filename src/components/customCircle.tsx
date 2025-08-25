import React, { CSSProperties } from "react";
import styled from "styled-components";

const CircleContainer = styled.div`
  flex: 1;
  position: absolute;
  bottom: 10px;
  zindex: 100;
  left: 0;
  min-width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  @media only screen and (max-width: 768px) {
    position: relative;
    align-items: flex-start;
    transform: scale(0.8) translateY(-40px) ;
  }

`;

const Circle = styled.div`
  background-color: #35281e;
  color: #fefffe;
  font-family: Raleway, sans-serif;
  margin: 0 auto;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const CustomCircle = ({ labels, onClick, size, style }: any) => {
  return (
    <CircleContainer>
      <Circle
        onClick={onClick}
        style={{
          width: `${size}px`,
          height: `${size}px`,
        }}
      >
        {labels.map((label: any, index: any) => (
          <span key={index} style={{ margin: "-5px 0", ...label.style }}>
            {label.text}
          </span>
        ))}
      </Circle>
    </CircleContainer>
  );
};

export default CustomCircle;
