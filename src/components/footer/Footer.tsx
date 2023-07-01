import { Box, Container, Typography } from "@mui/material";
import { IoIosArrowUp } from "react-icons/io";
import Contacts from "../contacts/Contacts";

export default function Footer() {
  return (
    <Box
      component={"footer"}
      sx={{
        position: "relative",
        background: "#e6e8eb",
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
        {/* <Box
          sx={{
            display: "flex",
            gap: 2,
          }}
        >
          <IconButton
            sx={{ boxShadow: "0px 0px 2px 0px" }}
            aria-label="delete"
            size="medium"
          >
            <AiOutlineMail />
          </IconButton>
          <IconButton
            sx={{ boxShadow: "0px 0px 2px 0px" }}
            aria-label="delete"
            size="medium"
          >
            <AiFillLinkedin />
          </IconButton>
          <IconButton
            sx={{ boxShadow: "0px 0px 2px 0px" }}
            aria-label="delete"
            size="medium"
          >
            <AiFillGithub />
          </IconButton>
        </Box> */}
        <Contacts />
        <TopIcon />
        <Typography variant="body1">&#169;2023 Halyna Stepanenko</Typography>
      </Container>
    </Box>
  );
}

function TopIcon() {
  const handleMouseEnter = (event: React.MouseEvent<HTMLDivElement>) => {
    event.currentTarget.style.transform = "translate(-50%, -5px)"; // Move up by 5 pixels
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
        mixBlendMode: "lighten", // Remove the shadow from overlapping part
        ":hover": { cursor: "pointer" },
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
    >
      <IoIosArrowUp style={iconStyle} />
    </Box>
  );
}
