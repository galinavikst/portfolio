import { Box, Container, Typography } from "@mui/material";
import Contacts from "../contacts/Contacts";

export default function Footer() {
  return (
    <Box
      component={"footer"}
      id="footer"
      sx={{
        background: "#e6e8eb",
        minHeight: 100,
        display: "flex",
        alignItems: "center",
      }}
    >
      <Container
        sx={{
          p: 2,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Contacts />
        <Typography variant="body2">&#169;2023 Halyna Stepanenko</Typography>
      </Container>
    </Box>
  );
}
