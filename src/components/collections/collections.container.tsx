import CollectionItem from "./collection.component";
import { data } from "./collections.data";
import { HeaderInfo, HeaderMain } from "../../theme/typography";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  CollectionsWrapper,
  CollectionsHeader,
  CollectionItems,
  CustomSlider,
} from "./collections.styles";

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
