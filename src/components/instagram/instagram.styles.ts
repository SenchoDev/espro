import styled from "styled-components";

interface PictureProps {
  image: string;
}

export const HeroSection = styled.section`
  padding: 7.4rem 0;
  background: ${(props) => props.theme.colors.bg.quaternary};
`;

export const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  h2 {
    text-align: left;
  }
  p {
    text-align: left;
    width: 34rem;
  }
`;

export const HeaderTop = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 7.5rem;
`;

export const PicturesWrapper = styled.div`
  margin-top: 0.5rem;
  display: flex;
  gap: 3rem;
  margin-left: -15rem;
  overflow-y: hidden;
  overflow-x: hidden;
`;

export const Picture = styled.div<PictureProps>`
  box-sizing: border-box;
  width: 100%;
  min-width: 27rem;
  height: 27rem;
  background-image: ${(props) => `url(${props.image})`};
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
`;
