import { Box, Button, Container, Typography } from "@mui/material";
import bg from "../../assets/halyna-stepanenko.jpg";

const heroBg = {
  backgroundImage: `url(${bg})`, //ios background
};

export default function Hero() {
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
          sx={{
            alignSelf: "center",
            width: "65%",
            minWidth: 300,
            m: 0,
          }}
        >
          <Typography variant="h3" component={"p"} sx={{ fontSize: "2rem" }}>
            Hi there, I am
          </Typography>
          <Typography
            variant="h1"
            component={"h2"}
            sx={{ fontFamily: "cursive, sans-serif", p: "0 0 10px" }}
          >
            Halyna Stepanenko
          </Typography>
          <Typography variant="h3" component={"h1"}>
            Frontend Developer who transforms designs into elegant code that
            brings websites to life.
          </Typography>
          <Button
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
