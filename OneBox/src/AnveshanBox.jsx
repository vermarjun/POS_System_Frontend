import React from "react";
import styled from "styled-components";

const AnveshanBox = () => {
  return (
    <PageWrapper>
      {/* First Section */}
      <PageContainer>
        <ContentSection>
          <Heading>LakshmiBox</Heading>
          <Tagline>Developed by the CODAHOLICS Team</Tagline>
          <Description>
            Sell in-store, at retail events, pop-up stores, and even online.
            With all sales channels in one software, AnveshanBox manages
            all aspects of your retail business.
          </Description>
          <FeaturesList>
            <Feature>Sell in-store</Feature>
            <Feature>Sell on-the-go</Feature>
            <Feature>Sell online with integrated eCommerce</Feature>
            <Feature>Sell at Amazon marketplace</Feature>
          </FeaturesList>
        </ContentSection>
        <IllustrationSection>
          <img
            src="https://hikeup.com/wp-content/uploads/2021/12/channels-01.svg"
            alt="Illustration"
          />
        </IllustrationSection>
      </PageContainer>

      {/* Second Section */}
      <PageContainer light>
        <ImageSection>
          <img
            src="https://hikeup.com/wp-content/uploads/2021/12/retail_platform.svg"
            alt="Retail Platform"
          />
        </ImageSection>
        <AnimatedContentSection>
          <Heading>All-in-one Retail Platform</Heading>
          <Description>
            Hike includes everything you need to effectively run and grow your
            retail business.
          </Description>
          <GridFeaturesList>
            <AnimatedFeature>Point of sale</AnimatedFeature>
            <AnimatedFeature>Integrated eComm</AnimatedFeature>
            <AnimatedFeature>Integrated payments</AnimatedFeature>
            <AnimatedFeature>Inventory</AnimatedFeature>
            <AnimatedFeature>Gift cards</AnimatedFeature>
            <AnimatedFeature>Loyalty</AnimatedFeature>
            <AnimatedFeature>Inventory counts</AnimatedFeature>
            <AnimatedFeature>Customer profiles</AnimatedFeature>
            <AnimatedFeature>Multi-store</AnimatedFeature>
            <AnimatedFeature>Reporting</AnimatedFeature>
          </GridFeaturesList>
          <Button>View All Features</Button>
        </AnimatedContentSection>
      </PageContainer>
    </PageWrapper>
  );
};

export default AnveshanBox;

// Styled Components

const PageWrapper = styled.div`
  width: 100%;
`;

// Shared Section Styles
const PageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 50px;
  background-color: ${(props) => (props.light ? "#f9f9f9" : "#fff")};
  background-size: cover;
  background-position: center;
  min-height: 100vh;
  overflow: hidden;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const ContentSection = styled.div`
  max-width: 50%;

  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

const Heading = styled.h1`
  font-size: 3rem;
  font-weight: bold;
  color: #333;
  margin-bottom: 10px;
`;

const Tagline = styled.h3`
  font-size: 1.5rem;
  font-weight: 500;
  color: #007bff;
  margin-bottom: 20px;
`;

const Description = styled.p`
  font-size: 1.2rem;
  color: #555;
  margin-bottom: 30px;
  line-height: 1.8;
`;

const FeaturesList = styled.ul`
  list-style: none;
  padding: 0;
`;

const Feature = styled.li`
  font-size: 1.1rem;
  color: #444;
  margin-bottom: 10px;
  position: relative;

  &::before {
    content: "•";
    color: #007bff;
    font-size: 1.5rem;
    position: absolute;
    left: -25px;
    top: 0;
  }
`;

const IllustrationSection = styled.div`
  max-width: 40%;

  img {
    width: 100%;
    height: auto;
  }
`;

// Second Section Styles
const ImageSection = styled.div`
  max-width: 40%;

  img {
    width: 100%;
    height: auto;
  }
`;

const AnimatedContentSection = styled(ContentSection)`
  animation: slideIn 1.5s ease-out;

  @keyframes slideIn {
    0% {
      transform: translateX(100%);
      opacity: 0;
    }
    100% {
      transform: translateX(0);
      opacity: 1;
    }
  }
`;

const GridFeaturesList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); /* Flexible grid */
  gap: 20px;
  margin-top: 20px;
  color:#000;
`;

const AnimatedFeature = styled.div`
  background: #fff;
  padding: 15px;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s, box-shadow 0.3s;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 10px rgba(0, 0, 0, 0.15);
  }

  &::before {
    content: "✨";
    display: inline-block;
    margin-right: 8px;
  }
`;

const Button = styled.button`
  margin-top: 20px;
  padding: 10px 20px;
  font-size: 1rem;
  color: #fff;
  background-color: #007bff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0056b3;
  }
`;
