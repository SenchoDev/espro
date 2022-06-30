import { HeaderMain, HeaderParagraph } from "../../theme/typography";
import CustomButton from "../button/button.component";
import ImagesSlider from "./slider.component";
import {
  FeaturesWrapper,
  AboutImage,
  AboutHeaderWrapper,
  ParagraphContainer,
  ImageSliderWrapper,
  SlidesText,
} from "./features.styles";

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
