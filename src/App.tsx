import TopHeader from "./components/top-header/top-header.component";
import Header from "./components/header/header.component";
import Hero from "./components/hero/hero.component";
import Collections from "./components/collections/collections.container";
import ExploreCards from "./components/explore-cards/explore-cards.container";
import Features from "./components/features/features.component";
import Brands from "./components/brands/brands.container";
import Video from "./components/video/video.component";
import About from "./components/about/about.component";
import InstagramPictures from "./components/instagram/instagram.component";
import Footer from "./components/footer/footer.component";
import Story from "./components/story/story.component";
import { ParallaxProvider } from "react-scroll-parallax";

import { createGlobalStyle, ThemeProvider } from "styled-components";
import { theme } from "./theme";
import { device } from "./theme/device";

const GlobalStyles = createGlobalStyle`
  html {
    font-size: 62.5%; 

    @media only screen and ${device.tabLand} {
      font-size: 56.25%;  // 1rem is == 9px;
    };

    @media only screen and ${device.tabPort} {
      font-size: 50%;  // 1rem is == 9px;
    };
    
  }
  body {
    margin: 0;
    font-family: 'Josefin Sans', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`;

const App = () => {
  return (
    <ParallaxProvider>
      <ThemeProvider theme={theme}>
        <div>
          <GlobalStyles />
          <TopHeader />
          <Header />
          <Hero />
          <Collections />
          <Story />
          <ExploreCards />
          <Features />
          <Brands />
          <Video />
          <About />
          <InstagramPictures />
          <Footer />
        </div>
      </ThemeProvider>
    </ParallaxProvider>
  );
};

export default App;
