import {
  HeaderInfo,
  HeaderMain,
  HeaderParagraph,
} from "../../theme/typography";
import CustomButton from "../button/button.component";
import SpinnerSvg from "../../assets/Spinner.svg";
import {
  AboutLayout,
  AboutTextWrapper,
  ImageWrapper,
  AboutImage,
  BlueWrapper,
  Spinner,
} from "./about.styles";

const About = () => {
  return (
    <AboutLayout>
      <AboutTextWrapper>
        <HeaderInfo color="primary">THE ULTIMATE BREW GUIDES</HeaderInfo>
        <HeaderMain color="primary" variant="normal">
          COFFEE TO WATER RATIOS: HOW TO MEASURE COFFEE LIKE A PRO
        </HeaderMain>
        <HeaderParagraph color="primary" variant="small">
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
