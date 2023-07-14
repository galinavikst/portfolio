import { Box, Container, Typography } from "@mui/material";
import { IoIosArrowUp } from "react-icons/io";
import Contacts from "./Contacts";

export default function Footer() {
  return (
    <Box
      component={"footer"}
      sx={{
        position: "relative",
        bgcolor: "secondary.main",
        minHeight: 100,
        display: "flex",
        alignItems: "center",
        boxShadow: "inset 0px 1px 4px 0px rgba(0, 0, 0, 0.2)",
      }}
    >
      <Container
        id="contacts"
        sx={{
          p: 2,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Contacts />
        <TopIcon />
        <Typography variant="body1" sx={{ textAlign: "center" }}>
          &#169;2023 Halyna Stepanenko
        </Typography>
      </Container>
    </Box>
  );
}

function TopIcon() {
  const handleMouseEnter = (event: React.MouseEvent<HTMLDivElement>) => {
    event.currentTarget.style.transform = "translate(-50%, -3px)"; // Move up by 5 pixels
  };

  const handleMouseLeave = (event: React.MouseEvent<HTMLDivElement>) => {
    event.currentTarget.style.transform = "translate(-50%)"; // Reset back to the original position
  };

  const handleClick = () => {
    window.scrollTo({ top: 0 });
  };

  const iconStyle = {
    width: "100%",
    height: "60px",
    color: "#fff",
  };

  return (
    <Box
      sx={{
        width: 100,
        height: 80,
        background: "#e6e8eb",
        position: "absolute",
        top: -40,
        left: "50%",
        right: "50%",
        transform: "translate(-50%)",
        borderRadius: "50% 50% 0 0",
        boxShadow: "inset 0px 1px 4px 0px rgba(0, 0, 0, 0.2)",
        transition: "transform 0.3s ease-in-out",
        ":hover": { cursor: "pointer" },
        "::after": {
          content: '""',
          height: 40,
          position: "absolute",
          left: 0,
          right: 0,
          width: "101%",
          transform: "translate(-0.3px)",
          bottom: -3,
          background: "#e6e8eb", // Same as the background color
        },
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
    >
      <IoIosArrowUp style={iconStyle} />
    </Box>
  );
}
