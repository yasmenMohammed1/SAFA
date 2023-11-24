import { createTheme } from "@mui/material";

export const themeValue = createTheme({
  components: {
    MuiTextField: {
      styleOverrides: {
        root: { border: "none" },
      },
    },
    MuiInput: {
      styleOverrides: {
        root: {
          border: "none",
        },
        underline: {
          border: "none",
          "&&:hover::before": {
            borderColor: "red",
          },
        },
      },
    },
  },
});
