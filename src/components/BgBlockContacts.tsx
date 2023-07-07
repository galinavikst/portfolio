import { Container, Box, Typography } from "@mui/material";

function BgBlockContacts() {
  return (
    <Container
      sx={{ p: 5, position: "relative", height: 200, overflow: "auto" }}
    >
      <Box
        sx={{
          background: "url('./src/assets/back-img.jpg')",
          //WebkitBackgroundSize: "cover",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          position: "fixed",
          height: "100%",
          width: "100%",
          zIndex: -1,
          top: 0,
          left: 0,
        }}
      ></Box>
      <Typography variant="h1" color={"black"}>
        hi my name is Halyna I'm trying to create cool block hi my name is
        Halyna I'm trying to create cool block hi my name is Halyna I'm trying
        to create cool block hi my name is Halyna I'm trying to create cool
        block hi my name is Halyna I'm trying to create cool block
      </Typography>
    </Container>
  );
}

export default BgBlockContacts;
