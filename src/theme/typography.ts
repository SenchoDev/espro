import styled from "styled-components";

interface HeaderMainProps {
  variant: "big" | "normal" | "small";
  color: "primary" | "secondary";
}

interface HeaderParagraphProps {
  color: "primary" | "secondary";
}

interface HeaderInfoProps {
  color: "primary" | "secondary";
}

export const HeaderMain = styled.h2<HeaderMainProps>`
  font-family: Barlow Condensed;
  font-size: ${(props) => props.variant === 'big' ? '4.8rem' : props.variant === 'normal' ? '4rem' : "3.6rem"};
  color: ${(props) => props.color === 'primary' ? props.theme.colors.text.primary : props.theme.colors.text.secondary };
  text-transform: uppercase;
  margin: 0;
  text-align: center;
`;

export const HeaderInfo = styled.p<HeaderInfoProps>`
  text-transform: uppercase;
  display: flex;
  align-items: center;
  color: ${(props) => props.color === 'primary' ? props.theme.colors.text.primary : props.theme.colors.text.secondary };
  font-size: 1.2rem;
  letter-spacing: 1.2px;
`;

export const HeaderParagraph = styled.p<HeaderParagraphProps>`
  font-family: Nunito;
  color: ${(props) => props.color === 'primary' ? props.theme.colors.text.primary : props.theme.colors.text.secondary};
  font-size: 1.6rem;
  text-align: center;
`;

export const HeaderSemiParagraph = styled.h3`
  font-family: Nunito;
  color: ${(props) => props.theme.colors.text.primary };
  font-size: 2.2rem;
  line-height: 4rem;
  text-align: center;
`;
