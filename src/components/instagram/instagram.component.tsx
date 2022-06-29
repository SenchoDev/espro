import styled from "styled-components";
import { HeaderMain, HeaderParagraph } from "../../theme/typography";
import CustomButton from "../button/button.component";
import { ReactComponent as InstagramSvg } from "../../assets/instagram.svg";

const images = [
  "https://i.ibb.co/sqnL1gJ/instagram1.png",
  "https://i.ibb.co/k1SfbPb/instagram2.png",
  "https://i.ibb.co/HnYbcHw/instagram3.png",
  "https://i.ibb.co/0ZFmTFm/instagram4.png",
  "https://i.ibb.co/3czy7hn/instagram5.png",
];

interface PictureProps {
  image: string;
}

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

const PicturesWrapper = styled.div`
  margin-top: 0.5rem;
  display: flex;
  gap: 3rem;
  margin-left: -15rem;
  overflow-y: hidden;
  overflow-x: hidden;
`;

const Picture = styled.div<PictureProps>`
  box-sizing: border-box;
  width: 100%;
  min-width: 27rem;
  height: 27rem;
  background-image: ${(props) => `url(${props.image})`};
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
`;

const InstagramPictures = () => {
  const randomIntFromInterval = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  return (
    <HeroSection>
      <HeaderTop>
        <HeaderWrapper>
          <HeaderMain color="primary" variant="small">
            SHOW US YOUR BEST POUR.
          </HeaderMain>
          <HeaderParagraph variant="small" color="primary">
            Making coffee better — one cup at a time. Share your best ☕ moments
            with us <b>#ESPRO</b>
          </HeaderParagraph>
        </HeaderWrapper>
        <CustomButton variant="outline" inverseBlack>
          <InstagramSvg />
          FOLLOW US ON INSTAGRAM
        </CustomButton>
      </HeaderTop>
      <PicturesWrapper>
        {images.map((image, id) => (
          <Picture
            style={{
              marginTop:
                id % 2 === 1
                  ? `${randomIntFromInterval(20, 40)}px`
                  : `${randomIntFromInterval(0, 10)}px`,
            }}
            key={id}
            image={image}
          />
        ))}
      </PicturesWrapper>
    </HeroSection>
  );
};

export default InstagramPictures;
