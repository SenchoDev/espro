import styled from "styled-components";

const TopHeaderLayout = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 3.7rem;
  background-color: ${(props) => props.theme.colors.brand.primary};
`;

const Header3 = styled.h3`
  font-size: 1.1rem; 
  letter-spacing: 1.65px;
  color: ${(props) => props.theme.colors.text.secondary};
  text-transform: uppercase;
`;

const TopHeader = () => {
  return (
    <TopHeaderLayout>
      <Header3>FREE SHIPPING ON ALL U.S. ORDERS $49+</Header3>
    </TopHeaderLayout>
  );
};

export default TopHeader;
