import { makeStyles } from "@mui/styles";
import LoginForm from "../../modules/login-form";

const useStyles = makeStyles((theme) => {
  return {
    root: {
      width: "100%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      padding: theme.spacing(10, 0, 2, 0),
      backgroundColor: theme.palette.background.paper,
    },
  };
});

const LoginPage = () => {
  const styles = useStyles();

  return (
    <div className={styles.root}>
      <LoginForm />
    </div>
  );
};

export default LoginPage;
