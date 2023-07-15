import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#6e44ff", //accent
    },
    secondary: {
      main: "#e6e8eb", //light grey - hero photo bg
    },
  },

  // components: {
  //   MuiCssBaseline: {
  //     styleOverrides: {
  //       html: {
  //         fontSize: "62.5%" /* 62.5% of 16px = 10px */,
  //         fontFamily: "Exo 2, sans-serif",
  //         scrollBehavior: "smooth",
  //       },
  //       body: {
  //         fontFamily: "Exo 2, sans-serif",
  //       },
  //     },
  //   },
  // },
});
