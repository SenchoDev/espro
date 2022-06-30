import goldStar from "../../assets/gold-star.svg";
import greyStar from "../../assets/grey-star.svg";
import { Collection, Price } from "./collection.type";
import {
  CollectionWrapper,
  StatusFlag,
  CollectionBackground,
  CollectionsAbout,
  CollectionImage,
  StarsWrapper,
  StatusText,
  Star,
  ItemText,
  ItemPrice,
  PriceText,
  CrossedPriceText,
  Colors,
  SelectedItemColor,
  ItemColor,
} from "./collections.styles";

interface CollectionProps {
  item: Collection;
}

const renderText = (price: Price) => {
  if (price.range) {
    return <PriceText>{`${price.default} - ${price.range}`}</PriceText>;
  }
  if (price.old) {
    return (
      <PriceText>
        {price.default} <CrossedPriceText>{price.old}</CrossedPriceText>
      </PriceText>
    );
  }
  return <PriceText>{price.default}</PriceText>;
};

const CollectionItem = ({ item }: CollectionProps) => {
  return (
    <CollectionWrapper>
      <StatusFlag color={item.status?.color}>
        <StatusText>{item.status?.text}</StatusText>
      </StatusFlag>
      <CollectionBackground>
        <CollectionImage image={item.image} />
      </CollectionBackground>
      <CollectionsAbout>
        <div>
          <StarsWrapper>
            {Array.from({ length: 5 }, (_, idx) => (
              <Star
                src={idx + 1 > item.stars ? greyStar : goldStar}
                key={idx}
                alt="star"
              />
            ))}
          </StarsWrapper>
          <ItemText>{item.name}</ItemText>
        </div>
        <Colors>
          {item.colors?.map((color, id) => (
            <SelectedItemColor shownIdx={id} key={id}>
              <ItemColor color={color} isWhite={color === "#FFFFFF"} />
            </SelectedItemColor>
          ))}
        </Colors>
        <ItemPrice>{renderText(item.price)}</ItemPrice>
      </CollectionsAbout>
    </CollectionWrapper>
  );
};

export default CollectionItem;
