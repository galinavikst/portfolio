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
import { IconContext } from "react-icons/lib/esm/iconContext";
import { Container } from "@mui/material";

const icons = [
  {
    name: "HTML5",
    icon: <AiOutlineHtml5 />,
  },
  {
    name: "CSS3",
    icon: <SiCss3 />,
  },
  {
    name: "Sass",
    icon: <DiSass />,
  },
  {
    name: "Bootstrap",
    icon: <FaBootstrap />,
  },
  {
    name: "Tailwind",
    icon: <SiTailwindcss />,
  },
  {
    name: "JS",
    icon: <SiJavascript />,
  },
  {
    name: "TS",
    icon: <SiTypescript />,
  },
  {
    name: "MUI",
    icon: <SiMui />,
  },
  {
    name: "React",
    icon: <FaReact />,
  },
  {
    name: "Alpine.js",
    icon: <SiAlpinedotjs />,
  },
  {
    name: "Github",
    icon: <AiFillGithub />,
  },
  {
    name: "Figma",
    icon: <FaFigma />,
  },
  {
    name: "Vite",
    icon: <TbBrandVite />,
  },
];

export default function ColorTabs() {
  const [value, setValue] = React.useState("toolbox");

  const tabStyles = {
    width: "50%",
    maxWidth: "50%",
    fontSize: "1.3rem",
  };

  const handleChange = (_event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  const iconsList = icons.map((obj) => {
    return (
      <Box key={obj.name}>
        {obj.icon}
        <Typography sx={{ textAlign: "center", textTransform: "uppercase" }}>
          {obj.name}
        </Typography>
      </Box>
    );
  });

  return (
    <Box sx={{ background: "#fff" }}>
      <Container sx={{ p: "50px 0" }}>
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
            <Tab value="toolbox" label="Toolbox" sx={tabStyles} />
            <Tab value="about" label="About" sx={tabStyles} />
          </Tabs>
          <TabPanel value="about" sx={{ p: "30px" }}>
            <Typography
              variant="body1"
              sx={{ fontSize: "1.5rem" }}
              display="block"
              gutterBottom
            >
              I am a frontend developer passionate about web content creation
              and delivering outstanding user experience. <br /> Transforming
              designs into elegant code that brings websites to life. Developing
              user-friendly websites with responsive design and fun animation.
              Implementing high-quality code that is easy to maintain in the
              long run.
            </Typography>
          </TabPanel>
          <TabPanel
            value="toolbox"
            sx={{ p: "30px", "& svg": { m: "0 3rem" } }}
          >
            <IconContext.Provider value={{ size: "4em" }}>
              <Marquee gradient pauseOnHover>
                {iconsList}
              </Marquee>
            </IconContext.Provider>
          </TabPanel>
        </TabContext>
      </Container>
    </Box>
  );
}
