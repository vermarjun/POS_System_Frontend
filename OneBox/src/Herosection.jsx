import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <Section>
      <Content>
        <HeroHeading
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Elevate Your <span>Rural Business</span> Today
        </HeroHeading>
        <HeroTagline
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          Empower your business with <strong>AnveshanBox</strong>—seamless
          payments, AI-driven insights, and efficient inventory tracking.
        </HeroTagline>
        <CTAButtons>
          <CTAButton
            bgColor="#007bff"
            hoverColor="#0056b3"
            href="/sign-up"
            whileHover={{ scale: 1.1 }}
          >
            Get Started
          </CTAButton>
          <CTAButton
            bgColor="#28a745"
            hoverColor="#218838"
            href="/learn-more"
            whileHover={{ scale: 1.1 }}
          >
            Learn More
          </CTAButton>
          <CTAButton
            bgColor="#fd7e14"
            hoverColor="#e76c05"
            href="/explore-solutions"
            whileHover={{ scale: 1.1 }}
          >
            Explore Solutions
          </CTAButton>
        </CTAButtons>
      </Content>
      <ImageContainer>
        <img
          src="https://cdn.shopify.com/b/shopify-brochure2-assets/28aabbded1024e67c000ec8aad514653.png?originalWidth=2300&originalHeight=2300"
          alt="AnveshanBox Illustration"
        />
      </ImageContainer>
      <AnimatedOverlay />
    </Section>
  );
};

export default HeroSection;

// Styled Components
const Section = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100vh;
  padding: 0 50px;
  position: relative;
  background: linear-gradient(
      rgba(0, 0, 0, 0.6),
      rgba(0, 0, 0, 0.6)
    ),
    url("https://cdn.shopify.com/b/shopify-brochure2-assets/28aabbded1024e67c000ec8aad514653.png")
      no-repeat center center/cover;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 20px;
    height: auto;
  }
`;

const Content = styled.div`
  color: #fff;
  max-width: 50%;
  z-index: 2;
  text-align: left;

  @media (max-width: 768px) {
    max-width: 100%;
    text-align: center;
  }
`;

const HeroHeading = styled(motion.h1)`
  font-size: 4rem;
  font-weight: bold;
  margin-bottom: 1rem;
  line-height: 1.2;

  span {
    color: #28a745;
  }

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const HeroTagline = styled(motion.p)`
  font-size: 1.5rem;
  margin-bottom: 2rem;
  max-width: 700px;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const CTAButtons = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const CTAButton = styled(motion.a)`
  display: inline-block;
  padding: 0.8rem 1.5rem;
  font-size: 1.2rem;
  font-weight: 600;
  border-radius: 5px;
  text-decoration: none;
  color: #fff;
  background-color: ${(props) => props.bgColor};
  transition: background-color 0.3s ease, transform 0.3s ease;

  &:hover {
    background-color: ${(props) => props.hoverColor};
    transform: scale(1.05);
  }
`;

const ImageContainer = styled.div`
  max-width: 40%;
  z-index: 2;

  img {
    width: 100%;
    height: auto;
    border-radius: 10px;
  }

  @media (max-width: 768px) {
    max-width: 100%;
    margin-top: 20px;
  }
`;

const AnimatedOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: -1;
  background: url("https://media.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif")
    no-repeat center center/cover;
  opacity: 0.2;
`;
