import styled from "styled-components";
import feature1 from "../../assets/feature/feature1.png";
import { HeaderMain, HeaderParagraph } from "../../theme/typography";
import CustomButton from "../button/button.component";
import ImagesSlider from "./slider.component";

const FeaturesWrapper = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  min-height: 70rem;
`;

const AboutImage = styled.div`
  width: 100%;
  background-image: url(${feature1});
  background-size: cover;
  background-position: center 70%;
  background-repeat: no-repeat;
  position: relative;
`;

const AboutHeaderWrapper = styled.div`
  position: absolute;
  top: 13.7rem;
  display: flex;
  flex-direction: column;
  width: inherit;
  height: inherit;
  align-items: center;
`;

const ParagraphContainer = styled.div`
  width: 55rem;
  margin-bottom: 2.5rem;
`;

const ImageSliderWrapper = styled.div`
  background: ${(props) => props.theme.colors.ui.secondary};
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  padding-bottom: 4rem;
  position: relative;
`;

const SlidesText = styled.h1`
  font-family: Barlow Condensed;
  color: ${(props) => props.theme.colors.text.quaternary};
  font-size: 8.4rem;
  letter-spacing: 2.1px;
  text-transform: uppercase;
  margin: 0;
  position: absolute;
  bottom: 2.6rem;
`;

const Features = () => {
  return (
    <FeaturesWrapper>
      <AboutImage>
        <AboutHeaderWrapper>
          <HeaderMain variant="big" color="secondary">
            MAKE EVERY CUP AN EXPERIENCE.
          </HeaderMain>
          <ParagraphContainer>
            <HeaderParagraph variant="small" color="secondary">
              Have your French pressed coffee anywhere with ESPRO’s Travel
              Press. A double micro-filter eliminates grit for your smoothest
              cup on the go, and the mug fits right in a car cup holder or
              bike’s water bottle cage.
            </HeaderParagraph>
          </ParagraphContainer>
          <CustomButton variant="normal">SHOP TRAVEL PRESS</CustomButton>
        </AboutHeaderWrapper>
      </AboutImage>
      <ImageSliderWrapper>
        <ImagesSlider />
        <SlidesText>PRESS. SIP. ENJOY.</SlidesText>
      </ImageSliderWrapper>
    </FeaturesWrapper>
  );
};

export default Features;
