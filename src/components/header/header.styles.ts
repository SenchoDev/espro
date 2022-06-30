import styled from "styled-components";
import { device } from "../../theme/device";

export const HeaderLayout = styled.section`
  position: relative;
  display: flex;
  padding: 0 7.5rem;
  align-items: center;
  justify-content: space-between;
  height: 6.6rem;
  background-color: ${(props) => props.theme.colors.bg.primary};

  @media only screen and ${device.tabPort} {
    padding: 0 3rem 1rem 0;
    height: 8rem;
    align-items: flex-end;
    justify-content: center;
  } ;
`;

export const LeftNav = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  @media only screen and ${device.tabPort} {
    padding-bottom: 0.7rem;
    margin-right: 5rem;
  } ;
`;

export const RightNav = styled.div`
  display: flex;
  align-items: center;
`;

export const Img = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 12.1rem;
  height: 2.8rem;
  @media only screen and ${device.tabPort} {
    top: 30%;
  } ;
`;

export const Link = styled.a`
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
export const IconLayout = styled.div`
  display: flex;
`;

export const SvgImg = styled.img`
  cursor: pointer;
  &:not(:last-child) {
    margin-right: 2.4rem;
  }
`;

export const ShopIconWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const ShopCounter = styled.div`
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

export const DownArrowIcon = styled.img`
  margin-left: 1rem;
  opacity: 0.5rem;
`;
