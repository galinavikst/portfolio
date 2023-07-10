import "./hero.css";
import { Button, Container, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

const CustomizedContainer = styled(Container)`
  & :nth-of-type(even) {
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
      <CustomizedContainer sx={{ alignSelf: "center" }}>
        <Typography variant="h3" component={"p"}>
          Hi there, I am
        </Typography>
        <Typography variant="h1" component={"h2"}>
          Halyna Stepanenko
        </Typography>
        <Typography variant="h3" component={"h1"}>
          Frontend Developer who combines technical skills and creativity to
          deliver exceptional web solutions.
        </Typography>
        <Button variant="outlined" size="large">
          GET IN TOUCH
        </Button>
      </CustomizedContainer>
    </div>
  );
}
