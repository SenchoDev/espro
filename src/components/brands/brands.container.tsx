import { useState, useEffect } from "react";
import { HeaderInfo, HeaderSemiParagraph } from "../../theme/typography";
import BrandItem from "./brand.component";
import { data } from "./brand.data";
import { colors } from "../../theme/colors";
import { useSpring } from "react-spring";
import { BrandsWrapper, BrandsHeader, BrandLogos, ParagraphWrapper } from './brands.styles';


const Brands = () => {
  const [previewText, setPreviewText] = useState(data[2].text);
  const [activeIdx, setActiveIdx] = useState(2);
  const [key, setKey] = useState(1);

  const scrolling = useSpring({
    from: { transform: "translateX(-5rem)", opacity: 0.3 },
    to: { transform: "translateX(0)", opacity: 1 },

    config: { duration: 6000 },
    reset: true,
    onRest: () => {
      setKey(key + 1);
    },
  });

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setActiveIdx((index) => (index + 1) % 5);
    }, 6000);
    return () => clearInterval(slideInterval);
  }, [previewText]);

  useEffect(() => {
    setPreviewText(data[activeIdx].text);
  }, [activeIdx]);

  const handleSelectBrand = (text: string, id: number) => {
    setActiveIdx(id);
    setPreviewText(text);
  };
  return (
    <BrandsWrapper>
      <BrandsHeader>
        <HeaderInfo color="primary">IN THE PRESS</HeaderInfo>
        <ParagraphWrapper style={scrolling}>
          <HeaderSemiParagraph>{previewText}</HeaderSemiParagraph>
        </ParagraphWrapper>
      </BrandsHeader>
      <BrandLogos>
        {data.map((brand, id) => (
          <div key={id} onClick={() => handleSelectBrand(brand.text, id)}>
            <BrandItem
              fill={id === activeIdx ? colors.ui.tertiary : "#D8E6EB"}
              brand={brand}
            />
          </div>
        ))}
      </BrandLogos>
    </BrandsWrapper>
  );
};

export default Brands;
