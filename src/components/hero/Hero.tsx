import { Box, Button, Container, Typography } from "@mui/material";
import bg from "../../assets/halyna-stepanenko.jpg";
import { useRef, useLayoutEffect, useState } from "react";
import gsap from "gsap";
import { TextPlugin } from "gsap/TextPlugin";
import Form from "./Form";

const heroBg = {
  backgroundImage: `url(${bg})`, //ios background
};

export default function Hero() {
  const [open, setOpen] = useState(false);

  const handleOpenModal = () => {
    setOpen(true);
  };
  const handleCloseModal = () => {
    setOpen(false);
  };

  const heroText = useRef(null);
  gsap.registerPlugin(TextPlugin); // Register the TextPlugin

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap
        .timeline()
        //.from(".hero", { duration: 1, opacity: 0 })
        .from(".hi", {
          duration: 0.5,
          xPercent: -200,
        })
        .from(".name", {
          duration: 1,
          xPercent: -200,
          opacity: 0,
        })
        .from(".text", {
          duration: 2,
          text: "",
        })
        .from(".button", {
          duration: 0.5,
          opacity: 0,
          scale: 0.5,
        });
    }, heroText); // <- IMPORTANT! Scopes selector text

    return () => ctx.revert(); // cleanup
  }, []);

  return (
    <Box
      className="hero"
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
      <Form open={open} handleClose={handleCloseModal} />
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
          >
            Frontend Developer who transforms designs into elegant code that
            brings websites to life.
          </Typography>
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
            onClick={handleOpenModal}
          >
            CONTACT ME
          </Button>
        </Container>
      </Container>
    </Box>
  );
}
