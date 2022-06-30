import { Brand } from "./brand.type";
import { ReactComponent as BuzzFeed } from "../../assets/brands/buzzfeed.svg";
import { ReactComponent as Paste } from "../../assets/brands/paste.svg";
import { ReactComponent as FastCompany } from "../../assets/brands/fast-company.svg";
import { ReactComponent as Continential } from "../../assets/brands/continental.svg";
import { ReactComponent as Bonanza } from "../../assets/brands/bonanza.svg";
import { BrandItemWrapper } from "./brands.styles";

interface BrandProps {
  brand: Brand;
  fill: string;
}

const BrandItem = ({ brand, fill }: BrandProps) => {
  const renderSvg = (name: string) => {
    switch (name) {
      case "PASTE":
        return <Paste fill={fill} />;
      case "BuzzFeed":
        return <BuzzFeed fill={fill} />;
      case "Continental":
        return <Continential fill={fill} />;
      case "FastCompany":
        return <FastCompany fill={fill} />;
      case "Bonanza":
        return <Bonanza fill={fill} />;
    }
  };

  return <BrandItemWrapper>{renderSvg(brand.name)}</BrandItemWrapper>;
};

export default BrandItem;
