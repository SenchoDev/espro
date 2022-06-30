import logo from "../../assets/logo.png";
import search from "../../assets/search.svg";
import account from "../../assets/account.svg";
import shop from "../../assets/shop.svg";
import downArrow from "../../assets/down-arrow.svg";
import {
  HeaderLayout,
  LeftNav,
  RightNav,
  Img,
  Link,
  IconLayout,
  SvgImg,
  ShopIconWrapper,
  ShopCounter,
  DownArrowIcon,
} from "./header.styles";

const Header = () => {
  return (
    <HeaderLayout>
      <LeftNav>
        <Link href="/">
          SHOP <DownArrowIcon src={downArrow} alt="arrow icon" />
        </Link>
        <Link href="/">OUR STORY</Link>
      </LeftNav>
      <Img src={logo} alt="Logo" />
      <RightNav>
        <Link href="/">BREW GUIDES</Link>
        <Link href="/">BLOG</Link>
        <IconLayout>
          <SvgImg src={search} alt="search icon" />
          <SvgImg src={account} alt="user icon" />
          <ShopIconWrapper>
            <SvgImg src={shop} alt="shop icon" />
            <ShopCounter>0</ShopCounter>
          </ShopIconWrapper>
        </IconLayout>
      </RightNav>
    </HeaderLayout>
  );
};

export default Header;
