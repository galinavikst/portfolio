import { Box, Button, Container, Typography } from "@mui/material";
import bg from "../../assets/halyna-stepanenko.jpg";
import { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import { TextPlugin } from "gsap/TextPlugin";

const heroBg = {
  backgroundImage: `url(${bg})`, //ios background
};

export default function Hero() {
  const heroText = useRef(null);
  gsap.registerPlugin(TextPlugin); // Register the TextPlugin

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      //this will only select '.class' elements that are children of the component
      gsap.from(".hi", {
        xPercent: -450,
        duration: 0.5,
      });
      gsap.from(".name", {
        xPercent: -150,
        duration: 0.5,
        delay: 0.5,
      });
      gsap.to(".text", {
        duration: 1.5,
        delay: 1,
        text: "Frontend Developer who transforms designs into elegant code that brings websites to life.",
      });
      gsap.from(".button", {
        opacity: 0,
        scale: 0.5,
        duration: 0.5,
        delay: 2.5,
      });
    }, heroText); // <- IMPORTANT! Scopes selector text

    return () => ctx.revert(); // cleanup
  }, []);

  const handleClick = () => {
    window.location.href = "mailto:galinavikst@gmail.com";
  };

  return (
    <Box
      style={heroBg}
      sx={{
        p: "50px 0",
        display: "flex",
        width: "100%",
        height: { xs: "calc(100vh - 56px)", sm: "calc(100vh - 64px)" },
        minHeight: 510,
        backgroundSize: { md: "130%", xs: "200%" },
        backgroundPosition: { xs: "13% top", md: "0 top" },
        backgroundRepeat: "no-repeat",
        backgroundColor: "#adb5bf",
        backgroundBlendMode: "overlay",
        boxShadow: "inset 0px -3px 4px -4px rgba(0, 0, 0, 0.2)",
      }}
    >
      <Container sx={{ p: 0, display: "flex" }}>
        <Container
          ref={heroText}
          sx={{
            alignSelf: "center",
            width: "65%",
            minWidth: 300,
            m: 0,
          }}
        >
          <Typography
            className="hi"
            variant="h3"
            component={"p"}
            sx={{ fontSize: "2rem" }}
          >
            Hi there, I am
          </Typography>
          <Typography
            className="name"
            variant="h1"
            component={"h2"}
            sx={{ fontWeight: "bold", p: "0 0 10px" }}
          >
            Halyna Stepanenko
          </Typography>
          <Typography
            className="text"
            variant="h3"
            component={"h1"}
            sx={{ minHeight: 100 }}
          ></Typography>
          <Button
            className="button"
            variant="outlined"
            size="large"
            sx={{
              color: "inherit",
              borderColor: "inherit",
              m: "50px 0",
              p: "20px 40px",
              fontSize: "1.5rem",
            }}
            onClick={handleClick}
          >
            GET IN TOUCH
          </Button>
        </Container>
      </Container>
    </Box>
  );
}
