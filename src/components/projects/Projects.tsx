import { useRef } from "react";
import { RiStackFill } from "react-icons/ri";
import {
  Button,
  Container,
  Divider,
  List,
  ListItem,
  Typography,
} from "@mui/material";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
//import CardMedia from "@mui/material/CardMedia";
import carPath from "../../assets/car.mp4";
import votePath from "../../assets/vote.mp4";
import weatherPath from "../../assets/weather.mp4";
import zooPath from "../../assets/zoo.mp4";

interface IPaths {
  path: string;
  title: string;
  description: string;
  technology: string;
  link: string;
}

interface CardItemProps {
  obj: IPaths;
  isEven: boolean;
}

export default function Projects() {
  return (
    <Box
      sx={{
        background: "#E6E8EB",
        boxShadow: "inset 0px 1px 4px 0px rgba(0, 0, 0, 0.2)",
      }}
    >
      <Container id="projects" component="section" sx={{ p: 8 }}>
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
      technology: "HTML, CSS, JS, jQuery, Responsive",
      link: "https://stately-faloodeh-2a80c2.netlify.app/",
    },
    {
      path: votePath,
      title: "Vote App",
      description:
        "Allows users to create questions with multiple answer options and conduct voting on them. The results of the voting are dynamically calculated and displayed in the form of voting count and percentage. The app also includes form validation and uses Redux Toolkit and React Router for navigation.",
      technology: "React, Redux, TS, CSS, Animate.css, Responsive",
      link: "https://galinavikst.github.io/vote/",
    },
    {
      path: weatherPath,
      title: "Weather App",
      description:
        "Displays weather data for the current moment, today, and the next five days. Allows users to search for any city or use their current geolocation.",
      technology: "JS, API, Bootstrap, Axios, Responsive",
      link: "https://galinavikst.github.io/Weather-app/",
    },

    {
      path: zooPath,
      title: "Online zoo",
      description:
        "The home page provides an overview of the app and the animals available for viewing. The donate page allows users to make a donation to their chosen animal.",
      technology: "HTML, CSS, JS, Responsive",
      link: "https://galinavikst.github.io/online-zoo/",
    },
  ];

  const listItems = paths.map((obj: IPaths, index: number) => {
    const isEven = index % 2 !== 0;
    return <CardItem key={obj.title} isEven={isEven} obj={obj} />;
  });

  return <List>{listItems}</List>;
}

function CardItem({ obj, isEven }: CardItemProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

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
        width: "75%",
        m: "0 auto",
        p: "25px 15px",
        transition: "all 0.2s",
        ":hover": {
          cursor: "pointer",
          transform: "scale(1.05)",
        },
        ":hover > *:first-of-type": {
          boxShadow: "0px 10px 13px -7px #000",
        },
      }}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
      onClick={() => handleClick(obj.link)}
    >
      <Card
        sx={{ display: "flex", flexDirection: isEven ? "row-reverse" : "row" }}
      >
        <video
          src={obj.path + "#t=0.001"}
          style={{ width: "50%" }}
          ref={videoRef}
          loop
          muted
          playsInline
          preload="metadata"
          controls={false}
          autoPlay={false}
        />
        {/* <CardMedia
          component="video"
          sx={{ width: "50%", height: "inherit" }}
          //src={obj.path}
          image={obj.path}
          ref={videoRef}
          loop
        /> */}
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <CardContent
            sx={{
              display: "flex",
              flexDirection: "column",
              flex: "1 0 auto",
              justifyContent: "space-between",
            }}
          >
            <div>
              <Typography component="div" variant="h5">
                {obj.title}
              </Typography>
              <Divider sx={{ m: "10px 0" }} />
              <Typography
                variant="body1"
                color="text.secondary"
                component="div"
                sx={{ fontSize: "1.3rem" }}
              >
                {obj.description}
              </Typography>
            </div>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                flexDirection: isEven ? "row-reverse" : "row",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  gap: "10px",
                  alignItems: "center",
                }}
              >
                <RiStackFill />
                <Typography
                  component="p"
                  color="text.secondary"
                  variant="body1"
                >
                  {obj.technology}
                </Typography>
              </Box>
              <Button
                sx={{
                  ":hover": {
                    transition: "all 0.2s easy-in",
                    transform: "scale(1.1)",
                  },
                }}
                variant="text"
                href={obj.link}
                target="_blank"
              >
                Visit site
              </Button>
            </Box>
          </CardContent>
        </Box>
      </Card>
    </ListItem>
  );
}
