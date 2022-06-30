import styled, { keyframes } from "styled-components";
import hero from "../../assets/hero.png";
import { Link } from "react-scroll";
import { device } from "../../theme/device";

export const HeroSection = styled.section`
  height: 86vh;
  background-image: url(${hero});
  background-size: cover;
  background-position: 0% 90%;
  position: relative;
`;

export const Layer = styled.div`
  background-color: rgba(0, 0, 0, 0.2);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

export const HeadingWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  align-items: center;
  justify-content: center;
  height: inherit;
`;
export const Header1 = styled.h1`
  font-family: Barlow Condensed;
  font-size: 7rem;
  text-transform: uppercase;
  color: ${(props) => props.theme.colors.text.secondary};
  margin: 0;
  text-align: center;
  @media only screen and ${device.phone} {
    font-size: 6rem;
  } ;
`;

export const Header4 = styled.p`
  font-family: Nunito;
  font-size: 1.7rem;
  color: ${(props) => props.theme.colors.text.secondary};
  text-align: center;
`;

export const Header4Wrapper = styled.div`
  max-width: 77rem;
`

export const bounceAnimation = keyframes`
  0% {transform: translateY(0);} 
  50% {transform: translateY(-10px);} 
  100% {transform: translateY(-0);} 
`;

export const ActionButtonWrapper = styled(Link)`
  position: absolute;
  bottom: 3rem;
  cursor: pointer;
  animation: ${bounceAnimation} 2s linear infinite;
`;

export const ActionText = styled.a`
  text-transform: uppercase;
  letter-spacing: 2.1px;
  text-decoration: none;
  font-size: 1.4rem;
  color: ${(props) => props.theme.colors.text.secondary};
`;

export const ActionImage = styled.img`
  margin-left: 1rem;
`;
