import styled, { keyframes } from "styled-components";
import CustomButton from "../button/button.component";
import hero from "../../assets/hero.png";
import downArrow from "../../assets/down-arrow-2.svg";
import { Link } from "react-scroll";

const HeroSection = styled.section`
  height: 86vh;
  background-image: url(${hero});
  background-size: cover;
  background-position: 0% 90%;
  position: relative;
`;

const Layer = styled.div`
  background-color: rgba(0, 0, 0, 0.2);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

const HeadingWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  align-items: center;
  justify-content: center;
  height: inherit;
`;
const Header1 = styled.h1`
  font-family: Barlow Condensed;
  font-size: 7rem;
  text-transform: uppercase;
  color: ${(props) => props.theme.colors.text.secondary};
  margin: 0;
`;

const Header4 = styled.p`
  font-family: Nunito;
  font-size: 1.7rem;
  color: ${(props) => props.theme.colors.text.secondary};
  text-align: center;
`;

const bounceAnimation = keyframes`
0% {transform: translateY(0);} 
50% {transform: translateY(-10px);} 
100% {transform: translateY(-0);} 

`;

const ActionButtonWrapper = styled(Link)`
  position: absolute;
  bottom: 3rem;
  cursor: pointer;
  animation: ${bounceAnimation} 2s linear infinite;
`;

const ActionText = styled.a`
  text-transform: uppercase;
  letter-spacing: 2.1px;
  text-decoration: none;
  font-size: 1.4rem;
  color: ${(props) => props.theme.colors.text.secondary};
`;

const ActionImage = styled.img`
  margin-left: 1rem;
`;

const Hero = () => {
  return (
    <HeroSection>
      <Layer />
      <HeadingWrapper>
        <Header1>BREW ANYWHERE. BE ANYWHERE.</Header1>
        <Header4>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut <br /> labore et dolore magna
          aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo.
        </Header4>
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
