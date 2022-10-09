import { makeStyles } from "@mui/styles";
import { ThemeProvider } from "@mui/material/styles";
import { defaultTheme } from "@frameworks/theme";
import Router from "@ui/modules/router";

const useStyles = makeStyles({
  root: {
    height: "100%",
    display: "flex",
    flexGrow: 1,
    flexDirection: "row",
  },
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
