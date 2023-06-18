import { RiStackFill } from "react-icons/ri";
import { Container, Divider, List, ListItem, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";

export default function Projects() {
  return (
    <Box sx={{ background: "#E6E8EB" }}>
      <Container id="projects" component="section">
        <Typography component="h2" variant="h2">
          Resent projects
        </Typography>

        <MediaCardList />
      </Container>
    </Box>
  );
}

function MediaCardList() {
  const paths = [
    {
      path: "../../src/assets/vote.mp4",
      title: "Vote App",
      description:
        "Allows users to create questions with multiple answer options and conduct voting on them. The results of the voting are dynamically calculated and displayed in the form of voting count and percentage. The app also includes form validation and uses Redux Toolkit and React Router for navigation.",
      technology: "React, Redux, TS, CSS, Animate.css, Responsive",
    },
    {
      path: "../../src/assets/car.mp4",
      title: "Tire Fitting",
      description:
        "User-friendly interface that allows drivers to easily submit appointment requests for tire fitting. Form validation that ensures that all required fields are filled out correctly before the appointment request is submitted.",
      technology: "HTML, CSS, JS, jQuery, Responsive",
    },
    {
      path: "../../src/assets/weather.mp4",
      title: "Weather App",
      description:
        "Displays weather data for the current moment, today, and the next five days. Allows users to search for any city or use their current geolocation.",
      technology: "JS, API, Bootstrap, Axios, Responsive",
    },
    {
      path: "../../src/assets/zoo.mp4",
      title: "Online zoo",
      description:
        "The home page provides an overview of the app and the animals available for viewing. The donate page allows users to make a donation to their chosen animal.",
      technology: "HTML, CSS, JS, Responsive",
    },
  ];

  const listItems = () => {
    return paths.map((obj) => {
      return (
        <ListItem key={obj.title}>
          <Card sx={{ display: "flex" }}>
            <CardMedia
              component="video"
              sx={{ width: 300 }}
              src={obj.path}
              // poster=""
              onMouseOver={(event) => (event.target as HTMLVideoElement).play()}
              onMouseOut={(event) => (event.target as HTMLVideoElement).pause()}
              loop
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
                <div>
                  <Typography component="div" variant="h5">
                    {obj.title}
                  </Typography>
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
                  sx={{ display: "flex", gap: "10px", alignItems: "center" }}
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
              </CardContent>
            </Box>
          </Card>
          <Divider variant="middle" />
        </ListItem>
      );
    });
  };

  return <List>{listItems()}</List>;
}
