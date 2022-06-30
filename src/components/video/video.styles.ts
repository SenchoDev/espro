import styled from "styled-components";

export const VideoWrapper = styled.section`
  background: ${(props) => props.theme.colors.bg.quaternary};
  position: relative;
  padding: 3rem 0 7.5rem 0;
`;

export const VideoMainText = styled.h1`
  font-family: Barlow Condensed;
  color: #d8e6eb;
  font-size: 10.5rem;
  letter-spacing: 2.63px;
  text-transform: uppercase;
  display: flex;
  margin: 0;
  padding-bottom: 4rem;
  width: 100%;
  justify-content: center;
  white-space: nowrap;
  overflow: hidden;
`;

export const BgVideo = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  position: relative;
`;

export const VideoHeaderWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  z-index: 1;
`;
export const ButtonWrapper = styled.div`
  padding-top: 1rem;
`;