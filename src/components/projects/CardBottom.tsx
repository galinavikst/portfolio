import { Box, Typography, Button } from "@mui/material";
import { RiStackFill } from "react-icons/ri";
import { CardItemProps } from "./Projects";

export default function CardBottom({ obj }: CardItemProps) {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <Box
        sx={{
          display: "flex",
          gap: "10px",
          alignItems: "center",
          margin: 1,
        }}
      >
        <RiStackFill />
        <Typography component="p" color="text.secondary" variant="body1">
          {obj.technology}
        </Typography>
      </Box>
      {/* <Button
        sx={{
          ":hover": {
            transition: "all 0.2s easy-in",
            transform: "scale(1.1)",
          },
        }}
        variant="text"
        href={obj.link}
        target="_blank"
      >
        Visit site
      </Button> */}
    </Box>
  );
}
