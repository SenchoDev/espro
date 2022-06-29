import styled from "styled-components";
import { HeaderMain } from "../../theme/typography";
import ExploreCardItem from "./explore-card.component";
import CustomButton from "../button/button.component";
import { data } from "./explore-cards.data";

const ExploreWrapper = styled.section`
  padding: 11rem 0 5.5rem 0;
`;

const CollectionsHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const CardsWrapper = styled.div`
  display: flex;
  gap: 3rem;
  align-items: center;
  justify-content: center;
  padding-top: 4rem;
  padding-bottom: 4rem;
`;

const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ExploreCards = () => {
  return (
    <ExploreWrapper>
      <CollectionsHeader>
        <HeaderMain variant="normal" color="primary">EXPLORE OUR PRODUCTS</HeaderMain>
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
