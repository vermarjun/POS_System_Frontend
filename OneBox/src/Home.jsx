import React from 'react';
import styled from 'styled-components';
import { motion } from "framer-motion"; // For animations
import HeroSection from './HeroSection';



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





const FeatureSection = styled.section`
  padding: 60px 20px;
  background-color: #f9f9f9; /* Light gray background for better contrast */
  text-align: center;
  border-radius: 8px;
`;

const FeatureHeading = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  color: #333; /* Dark gray for contrast */
`;

const FeatureList = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 20px;
  max-width: 1200px;
  margin: 0 auto;
`;

const FeatureCard = styled.div`
  flex: 1 1 30%;
  padding: 20px;
  background: white;
  border-radius: 8px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease-in-out;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
  }

  img {
    width: 100%;
    height: 250px; /* Set consistent height */
    border-radius: 8px;
    object-fit: cover;
    margin-bottom: 20px;
  }

  h3 {
    font-size: 1.5rem;
    font-weight: 600;
    color: #333;
    margin-bottom: 10px;
    }
    
    p {
      font-size: 1rem;
      color: #555;
  }
`;

// OverviewSection
const SectionWrapper = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 50px;
  background-color: #f9f9f9;
  border-radius: 10px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
  margin: 5px 0;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 30px;
  }
`;

const Content = styled.div`
  max-width: 50%;

  @media (max-width: 768px) {
    max-width: 100%;
    text-align: center;
    margin-bottom: 20px;
  }
`;

const SectionHeadings = styled.h2`
  font-size: 2.5rem;
  font-weight: bold;
  color: #333;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const Description = styled.p`
  font-size: 1.5rem;
  color: #555;
  line-height: 1.6;
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const ImageContainer = styled.div`
  max-width: 40%;

  img {
    width: 100%;
    height: auto;
    border-radius: 10px;
  }

  @media (max-width: 768px) {
    max-width: 100%;
  }
`;


const CallToActionSection = styled.section`
  padding: 40px 20px;
  background: linear-gradient(120deg, #007bff, #28a745);
  color: white;
  text-align: center;
`;

const FooterSection = styled.footer`
  background-color: #343a40;
  color: white;
  text-align: center;
  padding: 20px;
`;

const HomePage = () => {
  return (
    <div>
<HeroSection/>
{/* <HeroSection>
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
        Empower your business with <strong>SmartBiz Box</strong>—seamless
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
      <AnimatedOverlay />
    </HeroSection> */}
{/* for overview section */}
<SectionWrapper>
      <Content>
        <SectionHeadings>What is LakshmiBox?</SectionHeadings>
        <Description>
        <strong> LakshmiBox </strong> allows your business to accept payments from customers and keep track of sales. It's software also helps you handle online orders and inventory, reach your customers, and manage your team.
        </Description>
      </Content>
      <ImageContainer>
        <img
          src="https://cdn.shopify.com/b/shopify-brochure2-assets/8c8854d3a0c367a75c42aa12ef57bd44.webp"
          alt="AnveshanBox Illustration"
        />
        <p style={{ fontSize: "12px", color: "#555", marginTop: "8px", textAlign: "left" }}>
          *This image is AI generated for reference purposes and does not represent a real product.
        </p>
      </ImageContainer>
    </SectionWrapper>


      <FeatureSection>
      <FeatureHeading>Key Features to Grow Your Business</FeatureHeading>
      <FeatureList>
        <FeatureCard>
          <img src="https://img.freepik.com/free-photo/high-angle-hands-holding-smartphones_23-2149340956.jpg?ga=GA1.1.1310929021.1706160487&semt=ais_hybrid" alt="Seamless Payments" />
          <h3>Seamless Payments</h3>
          <p>UPI & Card Integration for fast, secure payments.</p>
        </FeatureCard>
        <FeatureCard>
          <img src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="AI-Powered Insights" />
          <h3>AI-Powered Insights</h3>
          <p>Smart analytics for inventory and sales management.</p>
        </FeatureCard>
        <FeatureCard>
          <img src="https://img.freepik.com/free-vector/business-people-with-magnifying-glass-charts_1262-18918.jpg?t=st=1735974273~exp=1735977873~hmac=424abb38d5e22efb9d5e6904d7ce39c0448c6ffa33caf8aa10acac032e4562a3&w=740" />
          <h3>Enhanced Business Visibility</h3>
          <p>Heat maps that track sales and show latest sale data to customers for real time product availability</p>
        </FeatureCard>
        <FeatureCard>
          <img src="https://waysandmeanstechnology.com/blog/wp-content/uploads/2023/01/Smart-Inventory-Management-System-by-Ways-and-Means-Technology-1-400x250.jpg" />
          <h3>Track Your Inventory</h3>
          <p>Track changes to your inventory and get low-stock notifications.</p>
        </FeatureCard>
      </FeatureList>
    </FeatureSection>

      <CallToActionSection>
        <h2>Transform Your Rural Business Today</h2>
        <CTAButton bgColor="#007bff" hoverColor="#0056b3" href="/sign-up">Get Started</CTAButton>
        <CTAButton bgColor="#28a745" hoverColor="#218838" href="/learn-more">Learn More</CTAButton>
      </CallToActionSection>


    </div>
  );
};

export default HomePage;
