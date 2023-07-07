import { Container, Box, Typography } from "@mui/material";

function BgBlockContacts() {
  return (
    <Container
      sx={{ p: 5, position: "relative", height: 200, overflow: "auto" }}
    >
      <Box
        component="img"
        sx={{
          //backgroundImage: "url('./src/assets/back-img.webp')",
          //WebkitBackgroundSize: "cover",
          // backgroundSize: "cover",
          // backgroundRepeat: "no-repeat",
          // backgroundAttachment: "fixed",
          position: "fixed",
          height: "100%",
          width: "100%",
          zIndex: -1,
          top: 0,
          left: 0,
        }}
        alt="universe"
        src="./src/assets/back-img.jpg"
      >
        {/* <Box
          component="img"
          sx={{
            height: 233,
            width: 350,
            maxHeight: { xs: 233, md: 167 },
            maxWidth: { xs: 350, md: 250 },
          }}
          alt="universe"
          src="./src/assets/back-img.webp"
        /> */}
      </Box>
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
