import Box from "@mui/material/Box";
import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import MailIcon from "@mui/icons-material/Mail";
import { Typography } from "@mui/material";
import { useEffect } from "react";
import { gsap } from "gsap";
import { theme } from "../../theme";

export default function Contacts() {
  useEffect(() => {
    const speedDialFab = document.querySelector(".MuiSpeedDial-fab");

    const animation = gsap.to(speedDialFab, {
      backgroundColor: theme.palette.primary.dark, // desired color
      duration: 1, // Animation duration in seconds
      repeat: -1, // Repeat indefinitely
      yoyo: true, // Reverse the animation
      repeatDelay: 1, // Delay between repetitions in seconds
    });

    return () => {
      animation.kill();
    };
  }, []);

  const actions = [
    { icon: <MailIcon />, name: "Mail" },
    {
      icon: <LinkedInIcon />,
      name: "LinlkedIn",
    },
    { icon: <GitHubIcon />, name: "GitHub" },
  ];

  const handleClick = (name: string) => {
    switch (name) {
      case "GitHub":
        window.open("https://github.com/galinavikst", "_blank");
        break;
      case "LinlkedIn":
        window.open("https://www.linkedin.com/in/halyna-stepanenko/", "_blank");
        break;
      case "Mail":
        window.open("mailto:galinavikst@gmail.com");
        break;
    }
  };

  return (
    <Box
      sx={{
        transform: "translateZ(0px)",
        flexGrow: 1,
        zIndex: 10,
        "& .MuiSpeedDial-fab": {
          width: 80,
          height: 80,
          margin: "10px 0",
        },
      }}
    >
      <SpeedDial
        ariaLabel="contacts"
        icon={
          <Typography variant="button" sx={{ fontSize: "1.2rem" }}>
            Get in touch
          </Typography>
        }
        direction={"right"}
      >
        {actions.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            onClick={() => handleClick(action.name)}
          />
        ))}
      </SpeedDial>
    </Box>
  );
}
