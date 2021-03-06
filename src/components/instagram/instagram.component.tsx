import { HeaderMain, HeaderParagraph } from "../../theme/typography";
import CustomButton from "../button/button.component";
import { ReactComponent as InstagramSvg } from "../../assets/instagram.svg";
import {
  HeroSection,
  HeaderWrapper,
  HeaderTop,
  PicturesWrapper,
  Picture,
} from "./instagram.styles";

const images = [
  "https://i.ibb.co/sqnL1gJ/instagram1.png",
  "https://i.ibb.co/k1SfbPb/instagram2.png",
  "https://i.ibb.co/HnYbcHw/instagram3.png",
  "https://i.ibb.co/0ZFmTFm/instagram4.png",
  "https://i.ibb.co/3czy7hn/instagram5.png",
];

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
