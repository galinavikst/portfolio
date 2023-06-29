import CssBaseline from "@mui/material/CssBaseline";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import ThemeProvider from "@mui/material/styles/ThemeProvider";
import { theme } from "./muiCssBaseline";
import TabsCentered from "./components/tabs/Tabs";
import Projects from "./components/projects/Projects";
import Contacts from "./components/contacts/Contacts";
import { Box, Typography } from "@mui/material";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Header />
        <main>
          <Hero />
          <TabsCentered />
          <Projects />
          <Contacts />
          <Box sx={{ position: "relative" }}>
            <Box
              sx={{
                backgroundImage: "url('./src/assets/back-img.jpg')",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                position: "fixed",
                height: "100%",
                width: "100%",
                zIndex: -1,
                top: 0,
                left: 0,
              }}
            ></Box>
            {/* <Typography variant="h1">
              hi my name is Halyna I'm trying to create cool block
            </Typography> */}
          </Box>
        </main>
        <Footer />
      </ThemeProvider>
    </>
  );
}

export default App;
