import CssBaseline from "@mui/material/CssBaseline";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import ThemeProvider from "@mui/material/styles/ThemeProvider";
import { theme } from "./muiCssBaseline";
import TabsCentered from "./components/tabs/Tabs";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Header />
        <main>
          <Hero />
          <TabsCentered />
        </main>
        <Footer />
      </ThemeProvider>
    </>
  );
}

export default App;
