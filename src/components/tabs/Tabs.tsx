import React from "react";
import Marquee from "react-fast-marquee";
import { AiOutlineHtml5, AiFillGithub } from "react-icons/ai";
import {
  SiCss3,
  SiTailwindcss,
  SiJavascript,
  SiMui,
  SiAlpinedotjs,
  SiTypescript,
} from "react-icons/si";
import { TbBrandVite } from "react-icons/tb";
import { DiSass } from "react-icons/di";
import { FaBootstrap, FaReact, FaFigma } from "react-icons/fa";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import TabContext from "@mui/lab/TabContext";
import TabPanel from "@mui/lab/TabPanel";
import Typography from "@mui/material/Typography";
import "./tabs.css";
import { IconContext } from "react-icons/lib/esm/iconContext";
import { Container } from "@mui/material";

export default function ColorTabs() {
  const [value, setValue] = React.useState("about");

  const handleChange = (_event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <Container sx={{ minHeight: "170px" }}>
      <TabContext value={value}>
        <Tabs
          value={value}
          onChange={handleChange}
          textColor="secondary"
          indicatorColor="secondary"
          aria-label="secondary tabs example"
          sx={{
            justifyContent: "center",
            width: "100%",
          }}
          centered
        >
          <Tab
            value="about"
            label="About"
            sx={{ width: "50%", maxWidth: "50%", fontSize: "1.3rem" }}
          />
          <Tab
            value="toolbox"
            label="Toolbox"
            sx={{ width: "50%", maxWidth: "50%", fontSize: "1.3rem" }}
          />
        </Tabs>
        <TabPanel value="about">
          <Typography
            variant="body1"
            sx={{ fontSize: "1.5rem" }}
            display="block"
            gutterBottom
          >
            I am a frontend developer passionate about web content creation and
            delivering outstanding user experience. Transforming designs into
            elegant code that brings websites to life. <br /> Developing and
            implementing high-quality code that is easy to maintain in the long
            run.
          </Typography>
        </TabPanel>
        <TabPanel value="toolbox">
          <IconContext.Provider value={{ size: "4em", className: "icon" }}>
            <Marquee gradient pauseOnHover>
              <Box>
                <AiOutlineHtml5 />
                <Typography sx={{ textAlign: "center" }}>HTML5</Typography>
              </Box>
              <Box>
                <SiCss3 />
                <Typography sx={{ textAlign: "center" }}>CSS3</Typography>
              </Box>
              <Box>
                <DiSass />
                <Typography sx={{ textAlign: "center" }}>Sass</Typography>
              </Box>
              <Box>
                <FaBootstrap />
                <Typography sx={{ textAlign: "center" }}>Bootstrap</Typography>
              </Box>
              <Box>
                <SiTailwindcss />
                <Typography sx={{ textAlign: "center" }}>Tailwind</Typography>
              </Box>
              <Box>
                <SiJavascript />
                <Typography sx={{ textAlign: "center" }}>JS</Typography>
              </Box>
              <Box>
                <SiTypescript />
                <Typography sx={{ textAlign: "center" }}>TS</Typography>
              </Box>
              <Box>
                <FaReact />
                <Typography sx={{ textAlign: "center" }}>React</Typography>
              </Box>
              <Box>
                <SiMui />
                <Typography sx={{ textAlign: "center" }}>MUI</Typography>
              </Box>
              <Box>
                <SiAlpinedotjs />
                <Typography sx={{ textAlign: "center" }}>Alpine.js</Typography>
              </Box>
              <Box>
                <AiFillGithub />
                <Typography sx={{ textAlign: "center" }}>Github</Typography>
              </Box>
              <Box>
                <FaFigma />
                <Typography sx={{ textAlign: "center" }}>Figma</Typography>
              </Box>
              <Box>
                <TbBrandVite />
                <Typography sx={{ textAlign: "center" }}>Vite</Typography>
              </Box>
            </Marquee>
          </IconContext.Provider>
        </TabPanel>
      </TabContext>
    </Container>
  );
}
