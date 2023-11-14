import { Box, Container, Typography } from "@mui/material";
import Marquee from "react-fast-marquee";
import { IconContext } from "react-icons";
import { AiOutlineHtml5, AiFillGithub } from "react-icons/ai";
import { DiSass } from "react-icons/di";
import { FaBootstrap, FaReact, FaFigma } from "react-icons/fa";
import {
  SiCss3,
  SiTailwindcss,
  SiJavascript,
  SiTypescript,
  SiMui,
  SiAlpinedotjs,
  SiNextdotjs,
} from "react-icons/si";
import { TbBrandVite } from "react-icons/tb";
import "./marquee.css";

export default function Marquees() {
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
    {
      name: "Next.js",
      icon: <SiNextdotjs />,
    },
  ];

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
    <Box sx={{ background: "#fff", p: "50px 0" }}>
      <Container
        id="about"
        component="section"
        sx={{ p: "30px", "& svg": { m: "0 3rem" } }}
      >
        <IconContext.Provider value={{ size: "4em" }}>
          <Marquee gradient pauseOnHover>
            {iconsList}
          </Marquee>
        </IconContext.Provider>
      </Container>
    </Box>
  );
}
