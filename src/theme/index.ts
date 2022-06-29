import 'styled-components';
import { colors } from "./colors";
import { space, lineHeights } from "./spacing";
import { sizes } from "./sizes";
import { fonts, fontWeights, fontSizes } from "./fonts";

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: any
    space: any
    lineHeights: any
    sizes: any
    fonts: any
    fontSizes: any
    fontWeights: any
  }
}

export const theme = {
  colors,
  space,
  lineHeights,
  sizes,
  fonts,
  fontSizes,
  fontWeights,
};