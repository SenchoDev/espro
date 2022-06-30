import styled, { keyframes } from "styled-components";

interface ImageProps {
  mainImage: string;
  hoverImage: string;
}

export const ExploreWrapper = styled.section`
  padding: 11rem 0 5.5rem 0;
`;

export const CollectionsHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const CardsWrapper = styled.div`
  display: flex;
  gap: 3rem;
  align-items: center;
  justify-content: center;
  padding-top: 4rem;
  padding-bottom: 4rem;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CollectionWrapper = styled.div`
  width: 41rem;
  height: 51.5rem;
  position: relative;
`;

export const imageTransitionAnimation = keyframes`
   0% { opacity: 0.5;  }
   100% { opacity: 1; }
  `;

export const ExploreCardImage = styled.div<ImageProps>`
  width: 100%;
  height: 100%;
  background-image: ${(props) => `url(${props.mainImage})`};
  background-size: cover;
  background-repeat: no-repeat;
  &:hover {
    animation-name: ${imageTransitionAnimation};
    animation-duration: 2s;
    background-image: ${(props) => `url(${props.hoverImage})`};
  }
`;

export const ImageLayer = styled.div`
  background-color: rgba(0, 0, 0, 0.25);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

export const CardHeading = styled.h3`
  position: absolute;
  left: 3rem;
  top: 4rem;
  margin: 0;
  font-size: 2.2rem;
  color: ${(props) => props.theme.colors.text.secondary};
  text-transform: uppercase;
`;

export const CardButtonWrapper = styled.div`
  padding-left: 3rem;
  padding-top: 8rem;
`;
