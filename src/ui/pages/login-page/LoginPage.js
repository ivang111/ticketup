import { makeStyles } from "@mui/styles";
import LoginForm from "../../modules/login-form";

const useStyles = makeStyles(() => {
  return {
    root: {
      width: "100%",
      height: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      background: "red",
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
