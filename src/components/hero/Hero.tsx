import * as React from "react";
import "./hero.css";
import { Button, Container, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

const CustomizedContainer = styled(Container)`
  & :nth-child(1),
  & :nth-child(3) {
    font-size: 2rem;
  }

  & button {
    color: inherit;
    border-color: inherit;
    margin: 20px 0;
    padding: 20px 40px;
    font-size: 1.5rem;
  }
`;

export default function Hero() {
  return (
    <div className="hero">
      <CustomizedContainer
        maxWidth="lg"
        sx={{ alignSelf: "center", width: "65%", mr: 0 }}
      >
        <Typography variant="h3" component={"p"}>
          Hi, my name is
        </Typography>
        <Typography variant="h1" component={"h2"}>
          Halyna Stepanenko
        </Typography>
        <Typography variant="h3" component={"h1"}>
          Frontend Developer from Ukraine
        </Typography>
        <Button variant="outlined" size="large">
          GET IN TOUCH
        </Button>
      </CustomizedContainer>
    </div>
  );
}
