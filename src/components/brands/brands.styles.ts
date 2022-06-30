import styled from "styled-components";
import { animated } from "react-spring";

export const BrandsWrapper = styled.section`
  padding: 9rem 12rem;
`;

export const BrandsHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 5rem;
`;

export const BrandLogos = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  justify-items: center;
  align-items: center;
  grid-column-gap: 9rem;
  margin: -6rem 0;
`;

export const ParagraphWrapper = styled(animated.div)`
  width: 85rem;
`;

export const BrandItemWrapper = styled.div`
  &:hover svg {
    fill: ${(props) => props.theme.colors.ui.tertiary};
    cursor: pointer;
    transition: all 0.3s;
  }
`;