import styled from "styled-components";

export const TopHeaderLayout = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 3.7rem;
  background-color: ${(props) => props.theme.colors.brand.primary};
`;

export const Header3 = styled.h3`
  font-size: 1.1rem; 
  letter-spacing: 1.65px;
  color: ${(props) => props.theme.colors.text.secondary};
  text-transform: uppercase;
`;