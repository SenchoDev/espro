import { useState } from "react";
import CustomButton from "../button/button.component";
import { ExploreCard } from "./explore-card.type";
import {
  CollectionWrapper,
  ExploreCardImage,
  ImageLayer,
  CardHeading,
  CardButtonWrapper,
} from "./explore-cards.styles";

interface ExploreCardProps {
  card: ExploreCard;
}

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
