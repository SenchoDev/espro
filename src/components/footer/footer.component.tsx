import {
  HeaderMain,
  HeaderParagraph,
  HeaderInfo,
} from "../../theme/typography";
import { ReactComponent as EsproLogoSvg } from "../../assets/espro-logo.svg";
import { ReactComponent as FacebookSvg } from "../../assets/facebook.svg";
import { ReactComponent as InstagramSvg } from "../../assets/instagram-white.svg";
import { ReactComponent as TwitterSvg } from "../../assets/twitter.svg";
import {
  FooterSection,
  TopFooterWrapper,
  HeaderWrapper,
  InputWrapper,
  Input,
  ActionText,
  DottedBorder,
  LinksWrapper,
  LogoSection,
  LogoSectionText,
  LinksSection,
  IconWrapper,
  IconLink,
  LinkText,
  OtherLinksWrapper,
} from "./footer.styles";

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
          <LinkText style={{ marginRight: "4rem" }}>Terms & Privacy</LinkText>
          <LinkText>Patents</LinkText>
        </div>
      </OtherLinksWrapper>
    </FooterSection>
  );
};

export default Footer;
