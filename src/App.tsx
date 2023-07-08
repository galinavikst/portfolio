import CssBaseline from "@mui/material/CssBaseline";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import ThemeProvider from "@mui/material/styles/ThemeProvider";
import { theme } from "./muiCssBaseline";
import TabsCentered from "./components/tabs/Tabs";
import Projects from "./components/projects/Projects";
import BgBlockContacts from "./components/BgBlockContacts";
import { Box } from "@mui/material";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Header />
        <main>
          <Box
            sx={{
              backgroundImage: "url('./src/assets/back-img.jpg')",
              WebkitBackgroundSize: "cover",
              MozBackgroundSizw: "cover",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              //backgroundAttachment: "fixed",
              position: "fixed",
              transform: "translate3d(0,0,0)",
              height: "70%",
              width: "100%",
              zIndex: -1,
              //top: 0,
              left: 0,
              bottom: 0,
            }}
          />
          <Hero />
          <TabsCentered />
          <Projects />
          <BgBlockContacts />
        </main>
        <Footer />
      </ThemeProvider>
    </>
  );
}

export default App;
