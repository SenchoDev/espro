import { useState } from "react";
import styled, { keyframes } from "styled-components";
import CustomButton from "../button/button.component";
import { ExploreCard } from "./explore-card.type";

interface ExploreCardProps {
  card: ExploreCard;
}

interface ImageProps {
  mainImage: string;
  hoverImage: string;
  open: boolean;
}

const CollectionWrapper = styled.div`
  width: 41rem;
  height: 51.5rem;
  position: relative;
`;

const imageTransitionAnimation = keyframes`
 0% { opacity: 0.5;  }
 100% { opacity: 1; }
`;

const ExploreCardImage = styled.div<ImageProps>`
  width: 100%;
  height: 100%;
  background-image: ${(props) => `url(${props.mainImage})`};
  background-size: cover;
  background-repeat: no-repeat;
  &:hover {
    animation-name: ${imageTransitionAnimation};
    animation-duration: 1s;
    background-image: ${(props) => `url(${props.hoverImage})`};
  }
`;

const ImageLayer = styled.div`
  background-color: rgba(0, 0, 0, 0.25);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

const CardHeading = styled.h3`
  position: absolute;
  left: 3rem;
  top: 4rem;
  margin: 0;
  font-size: 2.2rem;
  color: ${(props) => props.theme.colors.text.secondary};
  text-transform: uppercase;
`;

const CardButtonWrapper = styled.div`
  padding-left: 3rem;
  padding-top: 8rem;
`

const ExploreCardItem = ({ card }: ExploreCardProps) => {
  const [open, setOpen] = useState(false);

  return (
    <CollectionWrapper
      onMouseOver={() => setOpen(true)}
      onMouseOut={() => setOpen(false)}
    >
      <ExploreCardImage
        mainImage={card.mainImage}
        hoverImage={card.hoverImage}
        open={open}
        style={{
          backgroundPosition: card.name.includes("french") ? "10%" : "50%",
        }}
      >
        <ImageLayer style={{ display: open ? "none" : "block" }} />
        <CardHeading>{card.name}</CardHeading>
        {open && (
          <CardButtonWrapper>
            <CustomButton variant="normal">SHOP NOW</CustomButton>
          </CardButtonWrapper>
        )}
      </ExploreCardImage>
    </CollectionWrapper>
  );
};

export default ExploreCardItem;
