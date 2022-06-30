import { HeaderMain } from "../../theme/typography";
import ExploreCardItem from "./explore-card.component";
import CustomButton from "../button/button.component";
import { data } from "./explore-cards.data";
import {
  ExploreWrapper,
  CollectionsHeader,
  CardsWrapper,
  ButtonWrapper,
} from "./explore-cards.styles";

const ExploreCards = () => {
  return (
    <ExploreWrapper id="explore">
      <CollectionsHeader>
        <HeaderMain variant="normal" color="primary">
          EXPLORE OUR PRODUCTS
        </HeaderMain>
      </CollectionsHeader>
      <CardsWrapper>
        {data.map((card, id) => (
          <ExploreCardItem key={id} card={card} />
        ))}
      </CardsWrapper>
      <ButtonWrapper>
        <CustomButton variant="outline">SHOP ALL PRODUCTS</CustomButton>
      </ButtonWrapper>
    </ExploreWrapper>
  );
};

export default ExploreCards;
