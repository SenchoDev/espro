import styled from "styled-components";
import logo from "../../assets/logo.png";
import search from "../../assets/search.svg";
import account from "../../assets/account.svg";
import shop from "../../assets/shop.svg";
import downArrow from "../../assets/down-arrow.svg";

const HeaderLayout = styled.section`
  position: relative;
  display: flex;
  padding: 0 7.5rem;
  align-items: center;
  justify-content: space-between;
  height: 6.6rem;
  background-color: ${(props) => props.theme.colors.bg.primary};
`;

const LeftNav = styled.div`
  display: flex;
`;

const RightNav = styled.div`
  display: flex;
  align-items: center;
`;

const Img = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 12.1rem;
  height: 2.8rem;
`;

const Link = styled.a`
  text-transform: uppercase;
  text-decoration: none;
  display: flex;
  align-items: center;
  color: ${(props) => props.theme.colors.text.primary};
  font-size: 1.3rem;
  &:not(:last-child) {
    margin-right: 5rem;
  }
`;
const IconLayout = styled.div`
  display: flex;
`;

const SvgImg = styled.img`
  cursor: pointer;
  &:not(:last-child) {
    margin-right: 2.4rem;
  }
`;

const ShopIconWrapper = styled.div`
  display: flex;
  align-items: center;
`

const ShopCounter = styled.div`
  cursor: pointer;
  font-size: 1.3rem;
  height: 2.1rem;
  width: 2.1rem;
  border-radius: 50%;
  background-color: rgba(101, 154, 177, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: -2rem;
`;

const DownArrowIcon = styled.img`
  margin-left: 1rem;
  opacity: 0.5rem;
`

const Header = () => {
  return (
    <HeaderLayout>
      <LeftNav>
        <Link href="/">SHOP <DownArrowIcon src={downArrow} alt="arrow icon"/></Link>
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
