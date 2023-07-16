import { useEffect, useRef, useState } from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Container,
  Divider,
  List,
  ListItem,
  Typography,
} from "@mui/material";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import carPath from "../../assets/car.mp4";
import carPoster from "../../assets/car-poster.webp";
import zooPoster from "../../assets/zoo-poster.webp";
import weatherPoster from "../../assets/weather-poster.webp";
import pollPoster from "../../assets/poll-poster.webp";
import votePath from "../../assets/vote.mp4";
import weatherPath from "../../assets/weather.mp4";
import zooPath from "../../assets/zoo.mp4";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import CardBottom from "./CardBottom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

interface IPaths {
  path: string;
  title: string;
  description: string;
  technology: string;
  link: string;
  poster: string;
}

export interface CardItemProps {
  obj: IPaths;
}

export default function Projects() {
  return (
    <Box
      sx={{
        bgcolor: "secondary.main",
        boxShadow: "inset 0px -1px 4px 0px rgba(0, 0, 0, 0.2)",
        p: "100px 0 50px",
      }}
    >
      <Container id="projects" component="section">
        <Divider>
          <Typography component="h2" variant="h2" sx={{ fontSize: "3rem" }}>
            Resent projects
          </Typography>
        </Divider>
        <MediaCardList />
      </Container>
    </Box>
  );
}

function MediaCardList() {
  const paths: IPaths[] = [
    {
      path: carPath,
      title: "Tire Fitting",
      description:
        "User-friendly interface that allows drivers to easily submit appointment requests for tire fitting. Form validation that ensures that all required fields are filled out correctly before the appointment request is submitted.",
      technology: "HTML, CSS, JS, jQuery",
      link: "https://stately-faloodeh-2a80c2.netlify.app/",
      poster: carPoster,
    },
    {
      path: votePath,
      title: "Vote App",
      description:
        "Allows users to create questions with multiple answer options and conduct voting on them. The results are dynamically calculated and displayed in the form of voting count and percentage. The app also includes form validation and uses and React Router for navigation.",
      technology: "React, Redux, TS, CSS, Animate.css",
      link: "https://galinavikst.github.io/vote/",
      poster: pollPoster,
    },
    {
      path: weatherPath,
      title: "Weather App",
      description:
        "Displays weather data for the current moment, today, and the next five days. Allows users to search for any city or use their current geolocation.",
      technology: "JS, API, Bootstrap, Axios",
      link: "https://galinavikst.github.io/Weather-app/",
      poster: weatherPoster,
    },

    {
      path: zooPath,
      title: "Online zoo",
      description:
        "The home page provides an overview of the app and the animals available for viewing. The donate page allows users to make a donation to their chosen animal.",
      technology: "HTML, CSS, JS",
      link: "https://galinavikst.github.io/online-zoo/",
      poster: zooPoster,
    },
  ];

  const listItems = paths.map((obj: IPaths) => {
    return <CardItem key={obj.title} obj={obj} />;
  });

  return (
    <List
      sx={{
        p: { xs: "70px 0", sm: 5 },
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap",
        gap: { xs: "90px", sm: "0 50px", md: "10px 100px" },
      }}
    >
      {listItems}
    </List>
  );
}

function CardItem({ obj }: CardItemProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const description = useRef<HTMLDivElement>(null);
  const [expanded, setExpanded] = useState<boolean>(false);
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const cards = document.querySelectorAll(".card");

    cards.forEach((card, index) => {
      const direction = index % 2 === 0 ? 1 : -1; // Determine the animation direction based on the index

      gsap.fromTo(
        card,
        {
          xPercent: direction * -100,
        },
        {
          xPercent: 0,
          ease: "elastic",
          duration: 0.5,
          delay: index, // or index * 1s
          scrollTrigger: {
            trigger: card,
            toggleActions: "play pause reverse reset", // Play animation forwards when scrolling down, and reverse when scrolling up
            start: "10% bottom",
            end: "+=50",
            scrub: 1,
          },
        }
      );
    });
  }, []);

  useEffect(() => {
    document.addEventListener("click", handleClickOutside, false);
    return () => {
      document.removeEventListener("click", handleClickOutside, false);
    };
  }, []);

  const handleClickOutside = (event: MouseEvent) => {
    if (
      description.current &&
      !description.current.contains(event.target as Node)
    ) {
      setExpanded(false);
    }
  };

  const handleChange = () => {
    setExpanded(!expanded);
  };

  const handleMouseOver = () => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  };

  const handleMouseOut = () => {
    if (videoRef.current) {
      videoRef.current.pause();
    }
  };

  const handleClick = (path: string) => {
    window.open(path, "_blank");
  };

  return (
    <ListItem
      sx={{
        width: { xs: "90%", sm: "45%", md: "40%" },
        minHeight: { sm: 395, md: 450 },
        m: 0,
        p: 0,
        transition: "all 0.2s",
      }}
    >
      <Card
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
        className="card"
        sx={{
          display: "flex",
          position: { xs: "relative", sm: expanded ? "absolute" : "relative" },
          transition: "transform 0.2s",
          flexDirection: "column",
          ":hover": {
            transform: "scale(1.05)",
            boxShadow: "0px 10px 13px -7px #000",
          },
          ":hover > video": {
            transform: "scale(1.05)",
          },
        }}
      >
        <CardMedia
          component="video"
          sx={{
            width: "100%",
            height: "200px",
            objectFit: "inherit",
            ":hover": {
              cursor: "pointer",
            },
          }}
          image={obj.path + "#t=0.001"} // ios
          ref={videoRef}
          loop
          muted
          playsInline
          poster={obj.poster}
          preload="metadata" //  'metadata' ios
          onClick={() => handleClick(obj.link)}
        />
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <CardContent
            sx={{
              display: "flex",
              flexDirection: "column",
              flex: "1 0 auto",
              justifyContent: "space-between",
            }}
          >
            <Accordion
              expanded={expanded}
              ref={description}
              onChange={handleChange}
              sx={{
                boxShadow: "none",
                paddingBottom: 1,
                borderBottom: "1px solid #000",
              }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                sx={{
                  p: 0,
                  height: 35,
                  minHeight: 35,
                  "&.Mui-expanded": {
                    minHeight: 35,
                  },
                }}
              >
                <Typography fontSize={"medium"} sx={{ flexShrink: 0 }}>
                  {obj.title}
                </Typography>
              </AccordionSummary>
              <AccordionDetails sx={{ p: 0 }}>
                <Typography>{obj.description}</Typography>
              </AccordionDetails>
            </Accordion>
            <CardBottom obj={obj} />
          </CardContent>
        </Box>
      </Card>
    </ListItem>
  );
}
