import styled from "styled-components";
import feature1 from "../../assets/feature/feature1.png";

export const FeaturesWrapper = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  min-height: 70rem;
`;

export const AboutImage = styled.div`
  width: 100%;
  background-image: url(${feature1});
  background-size: cover;
  background-position: center 70%;
  background-repeat: no-repeat;
  position: relative;
`;

export const AboutHeaderWrapper = styled.div`
  position: absolute;
  top: 13.7rem;
  display: flex;
  flex-direction: column;
  width: inherit;
  height: inherit;
  align-items: center;
`;

export const ParagraphContainer = styled.div`
  width: 55rem;
  margin-bottom: 2.5rem;
`;

export const ImageSliderWrapper = styled.div`
  background: ${(props) => props.theme.colors.ui.secondary};
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  padding-bottom: 4rem;
  position: relative;
`;

export const SlidesText = styled.h1`
  font-family: Barlow Condensed;
  color: ${(props) => props.theme.colors.text.quaternary};
  font-size: 8.4rem;
  letter-spacing: 2.1px;
  text-transform: uppercase;
  margin: 0;
  position: absolute;
  bottom: 2.6rem;
`;
