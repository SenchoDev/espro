import {
  HeaderInfo,
  HeaderMain,
  HeaderParagraph,
} from "../../theme/typography";
import {
  StoryWrapper,
  Grid1,
  Grid2,
  GridWrapper,
  StoryHeaderWrapper,
  ParagraphContainer,
  DottedBorder,
  Img1,
  Img2,
  Img3,
  Img4,
  Img5,
  Img6,
} from "./story.styles";

import {
  story1,
  story2,
  story3,
  story4,
  story5,
  story6,
} from "../../assets/story";

import { useParallax } from "react-scroll-parallax";

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
