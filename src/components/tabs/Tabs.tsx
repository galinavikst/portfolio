import React, { useEffect, useRef } from "react";
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
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

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
  const [value, setValue] = React.useState("about");
  gsap.registerPlugin(ScrollTrigger);

  //const textRef = useRef(null);

  const tabStyles = {
    width: "50%",
    maxWidth: "50%",
    fontSize: "1.3rem",
  };

  useEffect(() => {
    const text = document.querySelector(".aboutText");

    gsap.fromTo(
      text,
      {
        y: 100,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        ease: "none",
        duration: 1,
        scrollTrigger: {
          trigger: text,
          toggleActions: "play complete none reset", // Play animation forwards when scrolling down, and reverse when scrolling up
          start: "top bottom",
          end: "+=100",
          //scrub: 1,
        },
      }
    );
  }, []);

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
    <Box
      sx={{
        background: "#fff",
        p: "50px 0",
        height: 300,
      }}
    >
      <Container id="about" component="section">
        <TabContext value={value}>
          <Tabs
            value={value}
            onChange={handleChange}
            textColor="primary"
            indicatorColor="primary"
            aria-label="primary tabs example"
            sx={{
              justifyContent: "center",
              width: "100%",
            }}
            centered
          >
            <Tab value="about" label="About" sx={tabStyles} />
            <Tab value="toolbox" label="Toolbox" sx={tabStyles} />
          </Tabs>
          <TabPanel
            value="about"
            className="aboutText"
            sx={{
              maxHeight: 155,
              overflow: "scroll",
              p: { md: "30px", xs: "30px 0 0" },
            }}
          >
            <Typography
              variant="body1"
              sx={{ fontSize: "1.5rem" }}
              display="block"
              gutterBottom
            >
              I am a frontend developer passionate about web content creation
              and delivering outstanding user experience. <br /> Combining
              technical skills and creativity to deliver exceptional web
              solutions. Developing user-friendly websites with responsive
              design and fun animation. Implementing high-quality code that is
              easy to maintain in the long run.
            </Typography>
          </TabPanel>
          <TabPanel
            value="toolbox"
            sx={{ p: { md: "30px", xs: "50px 0 0" }, "& svg": { m: "0 3rem" } }}
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
