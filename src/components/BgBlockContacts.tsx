import { Box, Container, Typography } from "@mui/material";

function BgBlockContacts() {
  return (
    <Box
      sx={{
        //position: "relative",
        height: 300,
        overflow: "auto",
      }}
    >
      <Box
        sx={{
          position: "relative",
        }}
      >
        <Box
          sx={{
            backgroundImage: "url('./src/assets/back-img.webp')",
            WebkitBackgroundSize: "cover",
            MozBackgroundSizw: "cover",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundAttachment: "fixed",
            //position: "fixed",
            position: "absolute",
            height: "100%",
            width: "100%",
            zIndex: -1,
            bottom: 0,
            left: 0,
          }}
        ></Box>
        <Container sx={{ p: 4, textAlign: "center" }}>
          <Typography variant="h1" color={"white"}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde magnam
            dolores voluptatem sunt rerum deleniti recusandae, ullam iure
            explicabo aliquid neque quisquam illo alias molestias rem ea
            molestiae perspiciatis amet! Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Consequatur in consectetur, vero eaque at eius
            possimus harum laudantium ex ducimus iusto sapiente. Vitae deleniti
            fugiat aut repellendus placeat, sint nemo.
          </Typography>
        </Container>
      </Box>
    </Box>
  );
}

export default BgBlockContacts;
