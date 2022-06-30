import { useEffect, useState } from "react";

const slides = [
  "https://i.ibb.co/KbxLJpx/slide1.png",
  "https://i.ibb.co/pyh1m68/slide2.png",
  "https://i.ibb.co/gdkyr04/slide3.png",
  "https://i.ibb.co/9WxkHMq/slide4.png",
  "https://i.ibb.co/j3rJtDw/slide5.png",
];

const ImagesSlider = () => {
  const [index, setIndex] = useState(0);
  const [imgUrl, setImgUrl] = useState(slides[0]);

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setIndex((index) => (index + 1) % 4);
    }, 1600);
    return () => clearInterval(slideInterval);
  }, []);

  useEffect(() => {
    setImgUrl(slides[index]);
  }, [index]);

  return (
    <div
      style={{
        width: "44rem",
        height: "44rem",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundImage: `url(${imgUrl})`,
        transition: ".1s all ease-in",
      }}
    />
  );
};

export default ImagesSlider;
