import { Box, Button, Container, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

const CustomizedContainer = styled(Container)`
  & :nth-of-type(even) {
    font-size: 2rem;
  }

  & button {
    color: inherit;
    border-color: inherit;
    margin: 50px 0;
    padding: 20px 40px;
    font-size: 1.5rem;
  }
`;

export default function Hero() {
  const handleClick = () => {
    window.location.href = "mailto:galinavikst@gmail.com";
  };

  return (
    <Box
      sx={{
        p: "50px 0",
        display: "flex",
        width: "100%",
        height: { xs: "calc(100vh - 56px)", sm: "calc(100vh - 64px)" },
        minHeight: 510,
        backgroundSize: { md: "130%", xs: "200%" },
        backgroundPosition: { xs: "13% top", md: "0 top" },
        backgroundRepeat: "no-repeat",
        backgroundImage: 'url("./src/assets/halyna-stepanenko.jpg")',
        backgroundColor: "#adb5bf",
        backgroundBlendMode: "overlay",
        boxShadow: "inset 0px -3px 4px -4px rgba(0, 0, 0, 0.2)",
      }}
    >
      <Container sx={{ p: 0, display: "flex" }}>
        <CustomizedContainer
          sx={{
            alignSelf: "center",
            width: "70%",
            minWidth: 300,
            m: 0,
          }}
        >
          <Typography variant="h3" component={"p"}>
            Hi there, I am
          </Typography>
          <Typography variant="h1" component={"h2"}>
            Halyna Stepanenko
          </Typography>
          <Typography variant="h3" component={"h1"}>
            Frontend Developer who transforms designs into elegant code that
            brings websites to life.
          </Typography>
          <Button variant="outlined" size="large" onClick={handleClick}>
            GET IN TOUCH
          </Button>
        </CustomizedContainer>
      </Container>
    </Box>
  );
}
