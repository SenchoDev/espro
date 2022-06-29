import styled from "styled-components";
import {
  HeaderMain,
  HeaderParagraph,
  HeaderInfo,
} from "../../theme/typography";
import { ReactComponent as EsproLogoSvg } from "../../assets/espro-logo.svg";
import { ReactComponent as FacebookSvg } from "../../assets/facebook.svg";
import { ReactComponent as InstagramSvg } from "../../assets/instagram-white.svg";
import { ReactComponent as TwitterSvg } from "../../assets/twitter.svg";

const data = [
  {
    main: "LEARN",
    links: ["Blog", "Our Story", "Brew Guides", "Retailers"],
  },
  {
    main: "SUPPORT",
    links: ["FAQ", "Shipping & Returns", "Our Guarantee"],
  },
  {
    main: "COMPANY",
    links: ["Contact", "Join Us", "Press"],
  },
];

const FooterSection = styled.section`
  padding: 5rem 7rem 2rem 7rem;
  background: ${(props) => props.theme.colors.ui.tertiary};
`;

const TopFooterWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;

  h2 {
    text-align: left;
  }
  p {
    text-align: left;
    width: 41rem;
  }
`;

const InputWrapper = styled.div`
  position: relative;
`;

const Input = styled.input`
  font-size: 1.7rem;
  font-family: Nunito;
  color: ${(props) => props.theme.colors.bg.quaternary};
  padding: 2rem 3rem;
  border-radius: 0.6rem;
  background: ${(props) => props.theme.colors.ui.light};
  border: none;
  display: block;
  transition: 0.3s all;
  width: 74rem;
  &::-webkit-input-placeholder {
    color: ${(props) => props.theme.colors.bg.quaternary};
  }
  &:focus {
    outline: none;
    box-shadow: 0 1rem 2rem rgba(#000, 0.1);
  }
`;

const ActionText = styled.div`
  position: absolute;
  top: 1.5rem;
  right: 2rem;
`;

const DottedBorder = styled.div`
  padding: 3rem 50%;
  background-image: linear-gradient(
    to right,
    #fff 33%,
    rgba(255, 255, 255, 0) 0%
  );
  background-position: bottom;
  background-size: 20px 2px;
  background-repeat: repeat-x;
`;

const LinksWrapper = styled.div`
  display: grid;
  grid-template-columns: min-content repeat(4, 1fr);
  grid-column-gap: 15rem;
  padding-top: 6rem;
`;

const LogoSection = styled.div`
  display: flex;
  flex-direction: column;
`;
const LogoSectionText = styled.div`
  margin-top: 4rem;
  & > * {
    text-align: left;
    margin: 0;
  }
`;

const LinksSection = styled.div`
  display: flex;
  flex-direction: column;
`;

const IconWrapper = styled.div`
  display: flex;
  gap: 1rem;
`;

const IconLink = styled.div`
  width: 4rem;
  height: 4rem;
  display: flex;
  background-color: ${(props) => props.theme.colors.ui.light};
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  cursor: pointer;
`;

const LinkText = styled.a`
  font-family: Nunito;
  text-decoration: none;
  letter-spacing: 0.7px;
  text-decoration: none;
  font-size: 1.4rem;
  color: ${(props) => props.theme.colors.text.secondary};
  cursor: pointer;

  &:first-child {
    margin-bottom: 1.6rem;
  }
  &:not(:first-child) {
    margin-bottom: 1.3rem;
  }
`;

const OtherLinksWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 7.5rem;
`;

const Footer = () => {
  return (
    <FooterSection>
      <TopFooterWrapper>
        <HeaderWrapper>
          <HeaderMain color="secondary" variant="small">
            NEVER MISS A DROP.
          </HeaderMain>
          <HeaderParagraph color="secondary" variant="normal">
            Sign up to be the first to know about exclusive new deals, product
            launches and more.
          </HeaderParagraph>
        </HeaderWrapper>
        <InputWrapper>
          <Input
            type="text"
            placeholder="Enter your email address"
            id="Email"
            required
          />
          <ActionText>
            <HeaderInfo color="secondary">SIGN UP</HeaderInfo>
          </ActionText>
        </InputWrapper>
      </TopFooterWrapper>
      <DottedBorder />
      <LinksWrapper>
        <LogoSection>
          <EsproLogoSvg />
          <LogoSectionText>
            <HeaderParagraph color="secondary" variant="small">
              <b>We’re here to help.</b>
            </HeaderParagraph>
            <HeaderParagraph color="secondary" variant="small">
              service@espro.com
            </HeaderParagraph>
            <HeaderParagraph color="secondary" variant="small">
              1.844.377.7622
            </HeaderParagraph>
          </LogoSectionText>
        </LogoSection>
        {data.map((section, id) => (
          <LinksSection key={id}>
            <LinkText>
              <b>{section.main}</b>
            </LinkText>
            {section.links.map((link, id) => (
              <LinkText key={id}>{link}</LinkText>
            ))}
          </LinksSection>
        ))}
        <LinksSection>
          <LinkText>
            <b>CONNECT WITH US</b>
          </LinkText>
          <IconWrapper>
            <IconLink>
              <FacebookSvg />
            </IconLink>
            <IconLink>
              <InstagramSvg />
            </IconLink>
            <IconLink>
              <TwitterSvg />
            </IconLink>
          </IconWrapper>
        </LinksSection>
      </LinksWrapper>
      <OtherLinksWrapper>
        <LinkText>Copyright © 2021 Espro Inc.</LinkText>
        <div>
          <LinkText style={{ marginRight: '4rem' }}>Terms & Privacy</LinkText>
          <LinkText>Patents</LinkText>
        </div>
      </OtherLinksWrapper>
    </FooterSection>
  );
};

export default Footer;
