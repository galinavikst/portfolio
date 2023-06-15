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

export default function ColorTabs() {
  const [value, setValue] = React.useState("about");

  const handleChange = (_event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ maxWidth: "1200px", m: "0 auto", p: "0 20px" }}>
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
            sx={{ width: "50%", maxWidth: "50%", fontSize: "1rem" }}
          />
          <Tab
            value="toolbox"
            label="Toolbox"
            sx={{ width: "50%", maxWidth: "50%", fontSize: "1rem" }}
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
            run is a goal.
          </Typography>
        </TabPanel>
        <TabPanel value="toolbox">
          <Marquee gradient pauseOnHover>
            <IconContext.Provider value={{ size: "4em", className: "icon" }}>
              <AiOutlineHtml5 />
              <SiCss3 />
              <DiSass />
              <FaBootstrap />
              <SiTailwindcss />
              <SiJavascript />
              <SiTypescript />
              <FaReact />
              <SiMui />
              <SiAlpinedotjs />
              <AiFillGithub />
              <FaFigma />
            </IconContext.Provider>
          </Marquee>
        </TabPanel>
      </TabContext>
    </Box>
  );
}
