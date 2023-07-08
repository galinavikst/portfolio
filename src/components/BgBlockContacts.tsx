import { Container, Typography } from "@mui/material";

function BgBlockContacts() {
  return (
    <Container
      sx={{ p: 5, position: "relative", height: 300, overflow: "auto" }}
    >
      {/* <Box
        sx={{
          backgroundImage: "url('./src/assets/back-img.webp')",
          WebkitBackgroundSize: "cover",
          MozBackgroundSizw: "cover",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          //backgroundAttachment: "fixed",
          position: "fixed",
          height: "100%",
          width: "100%",
          zIndex: -1,
          top: 0,
          left: 0,
        }}
      /> */}

      <Typography variant="h1" color={"white"}>
        hi my name is Halyna I'm trying to create cool block hi my name is
        Halyna I'm trying to create cool block hi my name is Halyna I'm trying
        to create cool block hi my name is Halyna I'm trying to create cool
        block hi my name is Halyna I'm trying to create cool block
      </Typography>
    </Container>
  );
}

export default BgBlockContacts;
