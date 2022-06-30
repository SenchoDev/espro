import styled from "styled-components";

export const FooterSection = styled.section`
  padding: 5rem 7rem 2rem 7rem;
  background: ${(props) => props.theme.colors.ui.tertiary};
`;

export const TopFooterWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const HeaderWrapper = styled.div`
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

export const InputWrapper = styled.div`
  position: relative;
`;

export const Input = styled.input`
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

export const ActionText = styled.div`
  position: absolute;
  top: 1.5rem;
  right: 2rem;
`;

export const DottedBorder = styled.div`
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

export const LinksWrapper = styled.div`
  display: grid;
  grid-template-columns: min-content repeat(4, 1fr);
  grid-column-gap: 15rem;
  padding-top: 6rem;
`;

export const LogoSection = styled.div`
  display: flex;
  flex-direction: column;
`;
export const LogoSectionText = styled.div`
  margin-top: 4rem;
  & > * {
    text-align: left;
    margin: 0;
  }
`;

export const LinksSection = styled.div`
  display: flex;
  flex-direction: column;
`;

export const IconWrapper = styled.div`
  display: flex;
  gap: 1rem;
`;

export const IconLink = styled.div`
  width: 4rem;
  height: 4rem;
  display: flex;
  background-color: ${(props) => props.theme.colors.ui.light};
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  cursor: pointer;
`;

export const LinkText = styled.a`
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

export const OtherLinksWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 7.5rem;
`;
