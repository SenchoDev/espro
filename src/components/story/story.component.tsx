import styled from "styled-components";
import {
  HeaderInfo,
  HeaderMain,
  HeaderParagraph,
} from "../../theme/typography";

import {
  story1,
  story2,
  story3,
  story4,
  story5,
  story6,
} from "../../assets/story";

const StoryWrapper = styled.section`
  padding: 6.6rem 7.7rem;
  display: flex;
  gap: 13rem;
  position: relative;
  background-color: ${(props) => props.theme.colors.ui.primary};
`;

const Grid1 = styled.div`
  height: 680px;
  display: grid;
  grid-template-columns: 246px 75px 105px 160px;
  grid-template-rows: 320px 40px 55px 160px 140px;
`;

const Grid2 = styled.div`
  height: 680px;
  display: grid;
  grid-template-columns: 200px 230px 35px 60px 60px;
  grid-template-rows: 65px 95px 165px 40px 250px;
`;

const StoryHeaderWrapper = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 8rem;
  left: 50%;
  transform: translate(-50%, 0);
`;

const ParagraphContainer = styled.div`
  width: 41rem;
`;

const DottedBorder = styled.div`
  float: left;
  padding: 27rem 1px;
  background: ${(props) =>
    `linear-gradient(to bottom, ${props.theme.colors.ui.tertiary} 10%, rgba(255, 255, 255, 0) 0%)`};
  background-position: left;
  background-size: 2px 1.9rem;
  background-repeat: repeat-y;
`;

const GridImage = styled.img`
  width: 100%;
`;

const Img1 = styled(GridImage)`
  grid-area: 1 / 1 / 3 / 2;
`;

const Img2 = styled(GridImage)`
  grid-area: 2 / 3 / 5 / 5;
  z-index: 10;
`;

const Img3 = styled(GridImage)`
  grid-area: 4 / 1 / 6 / 4;
`;

const Img4 = styled(GridImage)`
  grid-area: 2 / 2 / 5 / 3;
  z-index: 10;
`;

const Img5 = styled(GridImage)`
  grid-area: 1 / 4 / 3 / 6;
`;

const Img6 = styled(GridImage)`
  grid-area: 4 / 1 / 6 / 5;
`;

const Story = () => {
  return (
    <StoryWrapper>
      <Grid1>
        <Img1 src={story1} alt="Story 1" />
        <Img2 src={story2} alt="Story 2" />
        <Img3 src={story3} alt="Story 3" />
      </Grid1>
      <StoryHeaderWrapper>
        <HeaderInfo color="primary">DESIGNED FOR REAL LIFE</HeaderInfo>
        <HeaderMain variant="big" color="primary">
          COFFEE MADE FOR <br /> YOUR LIFE ON THE GO.
        </HeaderMain>
        <ParagraphContainer>
          <HeaderParagraph variant="small" color="primary">
            We understand coffee is a big part of your busy, active life. That’s
            why we create and develop products that allow you to bring your
            passion for <b>coffee-when you want it-</b> and wherever life takes
            you.
          </HeaderParagraph>
        </ParagraphContainer>
        <DottedBorder />
      </StoryHeaderWrapper>
      <Grid2>
        <Img4 src={story4} alt="Story 4" />
        <Img5 src={story5} alt="Story 5" />
        <Img6 src={story6} alt="Story 6" />
      </Grid2>
    </StoryWrapper>
  );
};

export default Story;
