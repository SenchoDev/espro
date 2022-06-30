import styled from "styled-components";
import { device } from "../../theme/device";

export const StoryWrapper = styled.section`
  padding: 6.6rem 7.7rem;
  display: flex;
  gap: 13rem;
  position: relative;
  background-color: ${(props) => props.theme.colors.ui.primary};
  @media only screen and ${device.tabPort} {
    padding: 3rem;
    gap: 3rem;
  } ;
`;

export const Grid1 = styled.div`
  height: 68rem;
  max-width: 55rem;
  display: grid;
  grid-template-columns: 2.4fr 0.7fr 1fr 1.6fr;
  grid-template-rows: 320px 40px 55px 160px 140px;
  @media only screen and ${device.tabPort} {
    grid-template-columns: minmax(25rem, 1fr);
    grid-template-rows: min-content;
    height: 50rem;
  }
  @media only screen and ${device.phone} {
    height: 45rem;
    padding: 2rem;
  } ;
`;

export const Grid2 = styled.div`
  height: 68rem;
  display: grid;
  max-width: 55rem;
  grid-template-columns: 2fr 2.3fr 0.35fr 0.6fr 0.6fr;
  grid-template-rows: 65px 95px 165px 40px 250px;

  @media only screen and ${device.tabPort} {
    grid-template-columns: minmax(25rem, 1fr);
    grid-template-rows: auto;
    height: 50rem;
    justify-content: end;
  }
  @media only screen and ${device.phone} {
    height: 45rem;
    margin-right: 7rem;
  } ;
`;

export const GridWrapper = styled.div`
  width: 50%;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  @media only screen and ${device.tabPort} {
    margin-top: 25rem;
  }

  @media only screen and ${device.phone} {
    margin-top: 20rem;
  } ;
`;

export const StoryHeaderWrapper = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 8rem;
  left: 50%;
  transform: translate(-50%, 0);

  @media only screen and ${device.phone} {
    top: 2rem;
  } ;
`;

export const ParagraphContainer = styled.div`
  width: 41rem;
`;

export const DottedBorder = styled.div`
  float: left;
  padding: 27rem 1px;
  background: ${(props) =>
    `linear-gradient(to bottom, ${props.theme.colors.ui.tertiary} 10%, rgba(255, 255, 255, 0) 0%)`};
  background-position: left;
  background-size: 2px 1.9rem;
  background-repeat: repeat-y;
`;

export const GridImage = styled.img`
  width: 100%;
`;

export const Img1 = styled(GridImage)`
  grid-area: 1 / 1 / 3 / 2;
  @media only screen and ${device.tabPort} {
    display: none;
  } ;
`;

export const Img2 = styled(GridImage)`
  grid-area: 2 / 3 / 5 / 5;
  z-index: 10;
  @media only screen and ${device.tabPort} {
    display: none;
  } ;
`;

export const Img3 = styled(GridImage)`
  grid-area: 4 / 1 / 6 / 4;
`;

export const Img4 = styled(GridImage)`
  grid-area: 2 / 2 / 5 / 3;
  z-index: 10;
  @media only screen and ${device.tabPort} {
    display: none;
  } ;
`;

export const Img5 = styled(GridImage)`
  grid-area: 1 / 4 / 3 / 6;
  @media only screen and ${device.tabPort} {
    display: none;
  } ;
`;

export const Img6 = styled(GridImage)`
  grid-area: 4 / 1 / 6 / 5;
`;
