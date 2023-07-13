import { Box, Container, Divider, Typography } from "@mui/material";
import { PiFlowerLotusThin } from "react-icons/pi";

function BgBlockContacts() {
  return (
    <Box
      sx={{
        height: 300,
        overflow: "auto",
        position: "relative",
      }}
    >
      <Container sx={{ p: 5, textAlign: "center" }}>
        <Typography
          variant="h3"
          color={"white"}
          sx={{
            fontSize: { xs: "5rem", sm: "6rem" },
            pb: 5,
            textShadow: "2px 2px 4px rgba(0, 0, 0, 0.6)",
          }}
        >
          "The joy of coding comes from creating something that didn't exist
          before."
          <Divider sx={{ p: 5, "& > span": { display: "flex" } }}>
            <PiFlowerLotusThin />
          </Divider>
          - Linus Torvalds
        </Typography>
      </Container>
    </Box>
  );
}

export default BgBlockContacts;
