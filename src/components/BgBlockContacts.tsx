import { Box, Container, Divider, Typography } from "@mui/material";
import { PiFlowerLotusThin } from "react-icons/pi";
import { theme } from "../theme";

function BgBlockContacts() {
  return (
    <Box
      sx={{
        height: { xs: 500, sm: 450 },
        overflow: "auto",
        position: "relative",
      }}
    >
      <Container sx={{ p: { xs: 3, sm: 5 }, textAlign: "center" }}>
        <Typography
          variant="body1"
          color={"white"}
          sx={{
            fontSize: { xs: "3rem", sm: "4rem" },
            height: "100%",
            pb: 10,
            textShadow: "2px 2px 4px rgba(0, 0, 0, 0.6)",
          }}
        >
          In programming, I often encounter new challenges and problems that
          require critical thinking and problem-solving skills. It's not
          necessary to have all the answers right from the start. Instead, being
          resourceful, having a strong logical mindset, and being able to learn
          and adapt are crucial skills for me.
        </Typography>

        <Typography
          variant="h3"
          color={"white"}
          sx={{
            fontSize: { xs: "4rem", sm: "5rem" },
            pb: 5,
            textShadow: "2px 2px 4px rgba(0, 0, 0, 0.6)",
          }}
        >
          "Programming isn't about what you know, it's about what you can figure
          out."
          <Divider sx={{ p: 5, "& > span": { display: "flex" } }}>
            <PiFlowerLotusThin color={theme.palette.primary.light} />
          </Divider>
          - Chris Pine
        </Typography>
      </Container>
    </Box>
  );
}

export default BgBlockContacts;
