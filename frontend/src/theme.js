import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  overrides: {
    MuiOutlinedInput: {
      root: {
        "& $notchedOutline": {
          borderColor: "white",
        },
        "&$focused $notchedOutline": {
          borderColor: "#1976d2",
        },
      },
    },
  },
  typography: {
    fontFamily: "Lato",
  },
  palette: {
    primary: {
      light: "#45a5f5",
      main: "#1976d2",
      dark: "#1565c0",
      contrastText: "#fff",
    },
    secondary: {
      light: "#313131",
      main: "#181818",
      dark: "#000",
      contrastText: "#fff",
    },
    formTheme: {
      main: "#fff",
      contrastText: "#fff",
    },
  },
});

export default theme;
