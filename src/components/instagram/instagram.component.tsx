import styled from "styled-components";
import { HeaderMain, HeaderParagraph } from "../../theme/typography";

const HeroSection = styled.section`
  padding: 7.4rem 0;
  background: ${(props) => props.theme.colors.bg.quaternary};
`;

const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  h2 {
    text-align: left;
  }
  p {
    text-align: left;
    width: 34rem;
  }
`;

const HeaderTop = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 7.5rem;
`;

const InstagramPictures = () => {
  return (
    <HeroSection>
      <HeaderTop>
        <HeaderWrapper>
          <HeaderMain color="primary" variant="small">
            SHOW US YOUR BEST POUR.
          </HeaderMain>
          <HeaderParagraph color="primary">
            Making coffee better — one cup at a time. Share your best ☕ moments
            with us <b>#ESPRO</b>
          </HeaderParagraph>
        </HeaderWrapper>
      </HeaderTop>
    </HeroSection>
  );
};

export default InstagramPictures;
