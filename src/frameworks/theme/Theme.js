import { createTheme } from "@mui/material/styles";

const defaultTheme = createTheme({
  palette: {
    primary: {
      paler: "#EEF7FF",
      pale: "#CEE9FF",
      lighter: "#8FCCFF",
      light: "#4EA5EF",
      main: "#2080D0",
      dark: "#03579D",
      darker: "#04192D",
    },
    secondary: {
      paler: "#DCFCFB",
      pale: "#8DEEEA",
      lighter: "#4AD9D3",
      light: "#28CFC8",
      main: "#12B6C0",
      dark: "#009290",
    },
    terceary: {
      paler: "#FFF1E9",
      pale: "#FFDAC4",
      lighter: "#FFC09A",
      light: "#FF9E64",
      main: "#FC863F",
      dark: "#F37021",
    },
    fourth: {
      paler: "#FFFCE7",
      pale: " #FFF9CA",
      lighter: "#FFF5A7",
      light: "#FFF28A",
      main: "#FFED5E",
      dark: "#FFE72D",
    },
    grey: {
      100: "#F7F7F7",
      150: "#d5d5d5",
      200: "#EAEAEA",
      300: "#CCCCCC",
      350: "#C4C4C4",
      400: "#B3B2B2",
      500: "#B3B3B3",
      600: "#8D8D8D",
      700: "#434242",
      800: "#545454",
      900: "#646464",
      950: "#6c6c6c",
    },
    success: {
      main: "#3DD386",
      light: "#DEFEEB",
      dark: "#1AAB63",
    },
    warning: {
      main: "#FFCF6A",
      light: "#FFF4D7",
      dark: "#FBAF37",
    },
    info: {
      main: "#4170D0",
      light: "#EEF3FC",
      dark: "#1952C7",
    },
    error: {
      main: "#F6635C",
      light: "#FFF1F0",
      dark: "#E31910",
    },
    background: {
      paper: "#FFFFFF",
      default: "#F6F6F6",
      pale: "#F2FFFF",
      light: "#F1F9FF",
    },
  },
  shadows: {
    0: "none",
    1: "0px 1px 3px rgba(0, 0, 0, 0.1)",
    2: "0px 4px 8px -2px rgba(0, 0, 0, 0.1)",
    3: "0px 12px 16px -4px rgba(0, 0, 0, 0.08)",
    4: "10px 20px 48px -12px rgba(0, 0, 0, 0.15)",
    5: "0px 32px 64px -12px rgba(0, 0, 0, 0.14)",
    8: "0px 32px 64px -12px rgba(0, 0, 0, 0.14)",
  },
  typography: {
    fontFamily: "'Poppins', sans-serif",
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700,
    h2: {
      fontFamily: "'Poppins', sans-serif",
      fontSize: 39,
    },
    h3: {
      fontFamily: "'Poppins', sans-serif",
      fontSize: 31,
    },
    h4: {
      fontFamily: "'Poppins', sans-serif",
      fontSize: 24,
    },
    h5: {
      fontFamily: "'Poppins', sans-serif",
      fontSize: 20,
    },
    h6: {
      fontFamily: "'Poppins', sans-serif",
      fontSize: 16,
    },
    body: {
      fontFamily: "'Poppins', sans-serif",
      fontSize: 16,
    },
    body1: {
      fontFamily: "'Poppins', sans-serif",
      fontSize: 14,
    },
    body2: {
      fontFamily: "'Poppins', sans-serif",
      fontSize: 12,
    },
  },
});

export { defaultTheme };
