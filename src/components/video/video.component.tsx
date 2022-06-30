import { useRef, useState, useEffect } from "react";
import ReactPlayer from "react-player";
import screenfull from "screenfull";
import {
  HeaderInfo,
  HeaderMain,
  HeaderParagraph,
} from "../../theme/typography";
import CustomButton from "../button/button.component";
import { ReactComponent as PlayButtonSvg } from "../../assets/play-button.svg";
import Ticker from "react-ticker";
import {
  VideoWrapper,
  VideoMainText,
  BgVideo,
  VideoHeaderWrapper,
  ButtonWrapper,
} from "./video.styles";

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
      <Ticker>
        {({ index }) => (
          <VideoMainText>
            FRESH GROUNDS. 01 FRESH GROUNDS. 01 FRESH GROUNDS. 01
          </VideoMainText>
        )}
      </Ticker>
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
            display: isFullscreen ? "block" : "none",
          }}
          url="https://vimeo.com/574425747/e180e54244"
          playing={isFullscreen ? true : false}
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
