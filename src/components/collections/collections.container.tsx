import styled from "styled-components";
import CollectionItem from "./collection.component";
import { data } from "./collections.data";
import { HeaderInfo, HeaderMain } from '../../theme/typography'

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
`;

const Collections = () => {
  return (
    <CollectionsWrapper>
      <CollectionsHeader>
        <HeaderInfo color="primary">POUR YOUR BEST CUP WITH</HeaderInfo>
        <HeaderMain variant="normal" color="primary">OUR BEST SELLERS</HeaderMain>
      </CollectionsHeader>
      <CollectionItems>
        {data.map((item, id) => (
          <CollectionItem key={id} item={item} />
        ))}
      </CollectionItems>
    </CollectionsWrapper>
  );
};

export default Collections;
