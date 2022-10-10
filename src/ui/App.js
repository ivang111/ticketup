import { makeStyles } from "@mui/styles";
import { isImportant } from "../ui/helpers";
import { ThemeProvider } from "@mui/material/styles";
import { defaultTheme } from "../frameworks/theme";
import Router from "./modules/router";

const useStyles = makeStyles((theme) => {
  return {
    root: {
      height: "100%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      padding: isImportant(theme.spacing(0)),
    },
  };
});

const App = () => {
  const styles = useStyles();

  return (
    <ThemeProvider theme={defaultTheme}>
      <div className={styles.root}>
        <Router />
      </div>
    </ThemeProvider>
  );
};

export default App;
