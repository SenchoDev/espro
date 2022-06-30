import styled from "styled-components";
import CollectionItem from "./collection.component";
import { data } from "./collections.data";
import { HeaderInfo, HeaderMain } from "../../theme/typography";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CollectionsWrapper = styled.section`
  padding: 7.5rem;
`;

const CollectionsHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 5rem;
`;

const CollectionItems = styled.section`
  display: flex;
  gap: 3rem;
  flex-wrap: wrap;
  &.slickSlider {
    display: grid;
  }
`;

const CustomSlider = styled(Slider)`
  width: 100%;
  .slick-slide > div {
    margin: 0 0.6rem !important;
    padding: 1.5rem !important;
  }
  .slick-next:before,
  .slick-prev:before {
    color: ${props => props.theme.colors.ui.tertiary};
    font-size: 3.8rem !important;
  }
`;

const Collections = () => {
  return (
    <CollectionsWrapper>
      <CollectionsHeader>
        <HeaderInfo color="primary">POUR YOUR BEST CUP WITH</HeaderInfo>
        <HeaderMain variant="normal" color="primary">
          OUR BEST SELLERS
        </HeaderMain>
      </CollectionsHeader>
      <CollectionItems>
        <CustomSlider
          dots={false}
          infinite
          speed={1000}
          variableWidth
          swipeToSlide
          arrows
          slidesToScroll={4}
          easing="ease-in-out"
        >
          {data.map((item, id) => (
            <CollectionItem key={id} item={item} />
          ))}
        </CustomSlider>
      </CollectionItems>
    </CollectionsWrapper>
  );
};

export default Collections;
