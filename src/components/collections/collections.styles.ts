import styled from "styled-components";
import Slider from "react-slick";
import { device } from "../../theme/device";

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

export const CollectionsWrapper = styled.section`
  padding: 7.5rem;
  @media only screen and ${device.phone} {
    padding: 6.5rem;
  } ;
`;

export const CollectionsHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 5rem;
`;

export const CollectionItems = styled.section`
  display: flex;
  &.slickSlider {
    display: grid;
  }
`;

export const CustomSlider = styled(Slider)`
  width: 100%;
  @media only screen and ${device.phone} {
    height: 50rem;
    display: flex;
    width: 100%;
  } ;
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

  
  export const CollectionWrapper = styled.div`
    width: 30rem;
    height: 42rem;
    position: relative;
    padding-bottom: 3rem;
    @media only screen and ${device.phone} {
        width: 25rem;
        height: 32rem;
      } ;
  `;
  
  export const StatusFlag = styled.div<ColorProps>`
    position: absolute;
    background: ${(props) => `${props.color ? props.color : "none" }`};
    padding: 0.8rem 0;
    left: 2rem;
    top: 0;
  `;
  
  export const CollectionBackground = styled.div`
    height: 29.5rem;
    background-color: ${(props) => props.theme.colors.bg.tertiary};
    display: flex;
    align-items: center;
    justify-content: center;
  `;
  
  export const CollectionImage = styled.div<ImageProps>`
    width: 24rem;
    height: 22.8rem;
    background-image: ${(props) => `url(${props.image})`};
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
  `;
  
  export const StarsWrapper = styled.div`
    display: flex;
  `;
  
  export const StatusText = styled.p`
    font-size: 1.1rem; 
    letter-spacing: 1.1px;
    color: ${(props) => props.theme.colors.text.secondary};
    text-transform: uppercase;
    writing-mode: vertical-rl;
    padding-right: 0.3rem;
  `;
  
  export const Star = styled.img`
    &:not(:last-child) {
      margin-right: 0.3rem;
    }
  `;
  
  export const CollectionsAbout = styled.div`
    padding: 1.5rem 1.2rem;
    position: relative;
    height: 12.5rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  `;
  
  export const ItemText = styled.p`
    text-transform: uppercase;
    letter-spacing: 0.35px;
    color: ${(props) => props.theme.colors.text.primary};
    font-size: 1.4rem;
    margin-bottom: 2.8rem;
  `;
  
  export const ItemPrice = styled.p`
    position: absolute;
    top: 5.5rem;
    text-transform: uppercase;
    letter-spacing: 0.35px;
    color: ${(props) => props.theme.colors.text.primary};
    font-size: 1.4rem;
  `;
  
  export const PriceText = styled.p`
    font-family: Nunito;
    color: ${(props) => props.theme.colors.text.primary};
    font-size: 1.5rem;
    margin-bottom: 2.8rem;
  `;
  
  export const CrossedPriceText = styled(PriceText)`
    color: ${(props) => props.theme.colors.text.tertiary};
    text-decoration: line-through;
    display: inline;
  `;
  
  export const Colors = styled.div`
    display: flex;
    gap: 0.4rem;
  `;
  
  export const SelectedItemColor = styled.div<SelectedItemColorProps>`
    border: ${(props) => (props.shownIdx === 0 ? `1px solid black`  : "none")};
    border-radius: 50%;
    padding:  2px;
  `;
  
  export const ItemColor = styled.div<ColorProps>`
    background: ${(props) => `${props.color}`};
    border: ${(props) => (props.isWhite ? `1px solid #DEDEDE`  : "none")};
    width: 2.2rem;
    height: 2.2rem;
    border-radius: 50%;
  `;