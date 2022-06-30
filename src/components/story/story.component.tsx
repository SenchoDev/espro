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

import { useParallax } from "react-scroll-parallax";

const StoryWrapper = styled.section`
  padding: 6.6rem 7.7rem;
  display: flex;
  gap: 13rem;
  position: relative;
  background-color: ${(props) => props.theme.colors.ui.primary};
`;

const Grid1 = styled.div`
  height: 680px;
  max-width: 55rem;
  justify-content: center;
  display: grid;
  grid-template-columns: 2.4fr 0.7fr 1fr 1.6fr;
  grid-template-rows: 320px 40px 55px 160px 140px;
`;

const Grid2 = styled.div`
  height: 680px;
  display: grid;
  max-width: 55rem;
  grid-template-columns: 2fr 2.3fr 0.35fr 0.6fr 0.6fr;
  grid-template-rows: 65px 95px 165px 40px 250px;
`;

const GridWrapper = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
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
  const parallax1 = useParallax<HTMLImageElement>({
    speed: -5,
  });
  const parallax2 = useParallax<HTMLImageElement>({
    speed: -5,
  });
  const parallax3 = useParallax<HTMLImageElement>({
    speed: 5,
  });

  const parallax4 = useParallax<HTMLImageElement>({
    speed: -5,
  });
  const parallax5 = useParallax<HTMLImageElement>({
    speed: -5,
  });
  const parallax6 = useParallax<HTMLImageElement>({
    speed: 5,
  });

  return (
    <StoryWrapper>
      <GridWrapper>
        <Grid1>
          <Img1 src={story1} alt="Story 1" ref={parallax1?.ref} />
          <Img2 src={story2} alt="Story 2" ref={parallax2?.ref} />
          <Img3 src={story3} alt="Story 3" ref={parallax3?.ref} />
        </Grid1>
      </GridWrapper>
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
      <GridWrapper>
        <Grid2>
          <Img4 src={story4} alt="Story 4" ref={parallax4?.ref} />
          <Img5 src={story5} alt="Story 5" ref={parallax5?.ref} />
          <Img6 src={story6} alt="Story 6" ref={parallax6?.ref} />
        </Grid2>
      </GridWrapper>
    </StoryWrapper>
  );
};

export default Story;
