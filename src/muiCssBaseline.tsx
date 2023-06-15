import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        html: {
          fontSize: "62.5%" /* 62.5% of 16px = 10px */,
          fontFamily: "Exo 2, sans-serif",
          scrollBehavior: "smooth",
        },

        body: {
          boxSizing: "border-box",
          fontFamily: "Exo 2, sans-serif",
        },
      },
    },
  },
});
