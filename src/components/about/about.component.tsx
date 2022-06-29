import styled, { keyframes } from "styled-components";
import {
  HeaderInfo,
  HeaderMain,
  HeaderParagraph,
} from "../../theme/typography";
import CustomButton from "../button/button.component";
import SpinnerSvg from "../../assets/Spinner.svg";

const AboutLayout = styled.section`
  padding: 12rem 9rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 4rem;
`;

const AboutTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-self: center;
  max-width: 50rem;
  & > * {
    text-align: left;
  }
  p {
    padding: 1.5rem 0;
  }
  button {
    width: 18rem;
  }
`;
const ImageWrapper = styled.div`
  position: relative;
`;

const AboutImage = styled.div`
  position: relative;
  height: 50rem;
  width: 63rem;
  justify-self: center;
  background-image: url(https://i.ibb.co/Xs616L6/coffee.png);
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  z-index: 1;
`;

const BlueWrapper = styled.div`
  position: absolute;
  height: 50rem;
  width: 63rem;
  top: 4rem;
  left: 4rem;
  background: #84aec1;
`;

const rotateAnimation = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const Spinner = styled.img`
  position: absolute;
  top: -7.5rem;
  z-index: 2;
  right: -6rem;
  animation: ${rotateAnimation} 10s linear infinite;
  transform-origin: center;
`;

const About = () => {

  return (
    <AboutLayout>
      <AboutTextWrapper>
        <HeaderInfo color="primary">THE ULTIMATE BREW GUIDES</HeaderInfo>
        <HeaderMain color="primary" variant="normal">
          COFFEE TO WATER RATIOS: HOW TO MEASURE COFFEE LIKE A PRO
        </HeaderMain>
        <HeaderParagraph color="primary">
          <b>
            You can taste it when you’ve brewed with the perfect coffee to water
            ratio.
          </b>
          The acidity pops every so slightly, enhancing the rich flavors and
          aromas. Your coffee’s mouthfeel is smooth and satisfying. And the
          flavor is just strong enough that you can sense all its nuances across
          your 10,000 taste buds, but not so strong that it’s uncomfortable.
          <div style={{ marginBottom: "2rem" }}></div>
          It’s an incredible experience—and too often, a hard one to come by.
        </HeaderParagraph>
        <CustomButton variant="outline">LEARN MORE</CustomButton>
      </AboutTextWrapper>
      <ImageWrapper>
        <AboutImage>
      
            <Spinner src={SpinnerSvg} alt="Spinner" />
    
        </AboutImage>
        <BlueWrapper />
      </ImageWrapper>
    </AboutLayout>
  );
};

export default About;
