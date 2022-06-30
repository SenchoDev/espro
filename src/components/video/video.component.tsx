import { useRef, useState, useEffect } from "react";
import styled from "styled-components";
import ReactPlayer from "react-player";
import screenfull from "screenfull";
import {
  HeaderInfo,
  HeaderMain,
  HeaderParagraph,
} from "../../theme/typography";
import CustomButton from "../button/button.component";
import { ReactComponent as PlayButtonSvg } from "../../assets/play-button.svg";

const VideoWrapper = styled.section`
  background: ${(props) => props.theme.colors.bg.quaternary};
  position: relative;
  padding: 3rem 0 7.5rem 0;
`;

const VideoMainText = styled.h1`
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

const BgVideo = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  position: relative;
`;

const VideoHeaderWrapper = styled.div`
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
const ButtonWrapper = styled.div`
  padding-top: 1rem;
`;

const Video = () => {
  const [replay, setReplay] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const playerRef = useRef<any>(null);
  const fullscreenPlayerRef = useRef<any>(null);

  useEffect(() => {
    playerRef.current?.seekTo(10);
    const slideInterval = setInterval(() => {
      setReplay((value) => !value);
    }, 10000);
    return () => clearInterval(slideInterval);
  }, [replay]);

  useEffect(() => {
    screenfull.on("change", () => {
      setIsFullscreen(screenfull.isFullscreen);
    });
  }, []);

  const handleClickFullscreen = () => {
    setTimeout(() => {
      setIsFullscreen(true);
      if (screenfull.isEnabled) {
        screenfull.request(fullscreenPlayerRef.current.wrapper);
      }
    }, 100);
  };

  return (
    <VideoWrapper>
      <VideoMainText>FRESH GROUNDS. 01 FRESH GROUNDS. 01 </VideoMainText>
      <BgVideo>
        <ReactPlayer
          ref={playerRef}
          loop={true}
          style={{
            borderRadius: "1.5rem",
            overflow: "hidden",
            display: isFullscreen ? "none" : "block",
          }}
          width="120rem"
          height="68rem"
          url="https://vimeo.com/574425747/e180e54244"
          playing={true}
          volume={0}
          onReady={() => setReplay(true)}
        />
        <ReactPlayer
          ref={fullscreenPlayerRef}
          style={{
            borderRadius: "0rem",
            overflow: "hidden",
            display: !isFullscreen ? "none" : "block",
          }}
          url="https://vimeo.com/574425747/e180e54244"
          playing={!isFullscreen ? false : true}
          controls
        />

        <VideoHeaderWrapper onClick={handleClickFullscreen}>
          <HeaderInfo color="secondary">
            EPISODE 01: THE GREAT MIGRATION
          </HeaderInfo>
          <HeaderMain color="secondary" variant="big">
            FRESH GROUNDS
          </HeaderMain>
          <HeaderParagraph variant="small" color="secondary">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
            <br /> sed diam nonumy eirmod tempor invidunt ut labore et.
          </HeaderParagraph>
          <ButtonWrapper>
            <CustomButton variant="outline" inverse>
              <PlayButtonSvg />
              WATCH FILM
            </CustomButton>
          </ButtonWrapper>
        </VideoHeaderWrapper>
      </BgVideo>
    </VideoWrapper>
  );
};

export default Video;
