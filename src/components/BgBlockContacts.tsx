import { Container, Box, Typography } from "@mui/material";

function BgBlockContacts() {
  return (
    <Container
      sx={{ p: 5, position: "relative", height: 200, overflow: "auto" }}
    >
      <Box
        sx={{
          backgroundImage: "url('./src/assets/back-img.jpg')",
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
      <Typography variant="h1" color={"white"}>
        hi my name is Halyna I'm trying to create cool block hi my name is
        Halyna I'm trying to create cool block hi my name is Halyna I'm trying
        to create cool block hi my name is Halyna I'm trying to create cool
        block hi my name is Halyna I'm trying to create cool block
      </Typography>
      {/* <Contacts /> */}
    </Container>
  );
}

export default BgBlockContacts;
