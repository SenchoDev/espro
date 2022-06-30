import CustomButton from "../button/button.component";
import downArrow from "../../assets/down-arrow-2.svg";
import {
  HeroSection,
  Layer,
  HeadingWrapper,
  Header1,
  Header4,
  ActionButtonWrapper,
  ActionText,
  ActionImage,
  Header4Wrapper,
} from "./hero.styles";

const Hero = () => {
  return (
    <HeroSection>
      <Layer />
      <HeadingWrapper>
        <Header1>BREW ANYWHERE. BE ANYWHERE.</Header1>
        <Header4Wrapper>
          <Header4>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo.
          </Header4>
        </Header4Wrapper>
        <CustomButton variant="normal">POUR ON THE GO</CustomButton>
        <ActionButtonWrapper to="explore" smooth={true}>
          <ActionText>EXPLORE</ActionText>
          <ActionImage src={downArrow} alt="down arrow" />
        </ActionButtonWrapper>
      </HeadingWrapper>
    </HeroSection>
  );
};

export default Hero;
