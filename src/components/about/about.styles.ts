import styled, { keyframes } from "styled-components";

export const AboutLayout = styled.section`
  padding: 12rem 9rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 4rem;
`;

export const AboutTextWrapper = styled.div`
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
export const ImageWrapper = styled.div`
  position: relative;
`;

export const AboutImage = styled.div`
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

export const BlueWrapper = styled.div`
  position: absolute;
  height: 50rem;
  width: 63rem;
  top: 4rem;
  left: 4rem;
  background: ${(props) => props.theme.colors.ui.light};
`;

export const rotateAnimation = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const Spinner = styled.img`
  position: absolute;
  top: -7.5rem;
  z-index: 2;
  right: -6rem;
  animation: ${rotateAnimation} 10s linear infinite;
  transform-origin: center;
`;
