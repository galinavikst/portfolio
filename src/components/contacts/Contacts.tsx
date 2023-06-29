import { Container, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import RecentActorsIcon from "@mui/icons-material/RecentActors";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import MailIcon from "@mui/icons-material/Mail";

export default function Contacts() {
  const actions = [
    { icon: <MailIcon />, name: "Mail" },
    { icon: <GitHubIcon />, name: "GitHub" },
    {
      icon: <LinkedInIcon />,
      name: "LinlkedIn",
    },
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
    <Container id="contacts">
      <Box sx={{ transform: "translateZ(0px)", flexGrow: 1 }}>
        <SpeedDial
          ariaLabel="contacts"
          sx={{ position: "absolute", top: 16, left: 16 }}
          icon={<RecentActorsIcon fontSize="large" />}
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
    </Container>
  );
}
