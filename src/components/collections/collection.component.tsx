import styled from "styled-components";
import goldStar from "../../assets/gold-star.svg";
import greyStar from "../../assets/grey-star.svg";
import { Collection, Price } from "./collection.type";

interface CollectionProps {
  item: Collection;
}

interface ImageProps {
  image: string;
}

interface ColorProps {
  color?: string;
  isWhite?: boolean;
}
interface SelectedItemColorProps {
  shownIdx: number;
}

const CollectionWrapper = styled.div`
  width: 30rem;
  height: 42rem;
  position: relative;
  padding-bottom: 3rem;
`;

const StatusFlag = styled.div<ColorProps>`
  position: absolute;
  background: ${(props) => `${props.color ? props.color : "none" }`};
  padding: 0.8rem 0;
  left: 2rem;
  top: 0;
`;

const CollectionBackground = styled.div`
  height: 29.5rem;
  background-color: ${(props) => props.theme.colors.bg.tertiary};
  display: flex;
  align-items: center;
  justify-content: center;
`;
const CollectionImage = styled.div<ImageProps>`
  width: 24rem;
  height: 22.8rem;
  background-image: ${(props) => `url(${props.image})`};
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
`;

const StarsWrapper = styled.div`
  display: flex;
`;

const StatusText = styled.p`
  font-size: 1.1rem; 
  letter-spacing: 1.1px;
  color: ${(props) => props.theme.colors.text.secondary};
  text-transform: uppercase;
  writing-mode: vertical-rl;
  padding-right: 0.3rem;
`;

const Star = styled.img`
  &:not(:last-child) {
    margin-right: 0.3rem;
  }
`;

const CollectionsAbout = styled.div`
  padding: 1.5rem 1.2rem;
  position: relative;
  height: 12.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const ItemText = styled.p`
  text-transform: uppercase;
  letter-spacing: 0.35px;
  color: ${(props) => props.theme.colors.text.primary};
  font-size: 1.4rem;
  margin-bottom: 2.8rem;
`;

const ItemPrice = styled.p`
  position: absolute;
  top: 5.5rem;
  text-transform: uppercase;
  letter-spacing: 0.35px;
  color: ${(props) => props.theme.colors.text.primary};
  font-size: 1.4rem;
`;

const PriceText = styled.p`
  font-family: Nunito;
  color: ${(props) => props.theme.colors.text.primary};
  font-size: 1.5rem;
  margin-bottom: 2.8rem;
`;

const CrossedPriceText = styled(PriceText)`
  color: ${(props) => props.theme.colors.text.tertiary};
  text-decoration: line-through;
  display: inline;
`;

const Colors = styled.div`
  display: flex;
  gap: 0.4rem;
`;

const SelectedItemColor = styled.div<SelectedItemColorProps>`
  border: ${(props) => (props.shownIdx === 0 ? `1px solid black`  : "none")};
  border-radius: 50%;
  padding:  2px;
`;

const ItemColor = styled.div<ColorProps>`
  background: ${(props) => `${props.color}`};
  border: ${(props) => (props.isWhite ? `1px solid #DEDEDE`  : "none")};
  width: 2.2rem;
  height: 2.2rem;
  border-radius: 50%;
`;

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
