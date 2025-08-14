"use client";
import React from "react";
import styled from "styled-components";
import MapWidget from "./MapWidget";
import CustomerSatisfaction from "./CustomerSatisfaction";

// iPad-only, self-contained banner that mirrors the web layout but scaled for iPad
const Banner = styled.section`
  display: none; /* hidden by default – iPad only */
  background: #35281e;
  color: #fff;
  position: relative;
  padding: 3rem 1.5rem 4rem 1.5rem;
  text-align: center;
  /* allow leaves to extend beyond the banner without being clipped */
  overflow: visible;

  @media (min-width: 740px) and (max-width: 1035px) {
    display: block;
  }

  .inner {
    max-width: 980px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.25rem;
  }

  .google-row {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.75rem;
  }

  .google-logo {
    width: 130px;
    height: auto;
  }

  .copy {
    font-family: Raleway, sans-serif;
    font-size: 1.08rem;
    line-height: 1.48;
    max-width: 860px;
  }

  .map-wrap {
    margin-top: 1rem;
    transform: scale(0.9);
    transform-origin: center;
  }

  .leaf-left,
  .leaf-right {
    position: absolute;
    z-index: 1;
    pointer-events: none;
  }

  .leaf-left {
    left: -60px;
    top: -20px;
    width: 180px;
  }

  .leaf-right {
    right: -60px;
    top: -10px;
    bottom: auto;
    width: 180px;
  }
`;

const ContactBannerIpad: React.FC = () => {
  return (
    <Banner aria-label="Contact banner – iPad only">
      <img
        className="leaf-left"
        src="/images/flowers/Medium_pink_leaf.png"
        alt=""
      />
      <img
        className="leaf-right"
        src="/images/flowers/Large_pink_leaf.png"
        alt=""
      />
      <div className="inner">
        <div className="google-row">
          <CustomerSatisfaction />
          <img
            className="google-logo"
            src="/images/Google-Review-Logo.png"
            alt="Google Reviews"
          />
        </div>

        <div className="copy">
          With <strong>4.9 stars, 290+ reviews on Google, and over 15 years</strong> of
          trusted experience in the Long Island, New York area, we're committed to
          <strong> proven results, safety, and happy patients</strong>. Experience the
          difference with a team that truly cares!
        </div>

        <div className="copy">
          <strong>Book a free consultation</strong> with us to assess if you are a
          <strong> good candidate</strong> for treatment.
        </div>

        <div className="map-wrap">
          <MapWidget width="300px" height="230px" />
        </div>
      </div>
    </Banner>
  );
};

export default ContactBannerIpad;


