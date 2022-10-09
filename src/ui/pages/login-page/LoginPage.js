import { makeStyles } from "@mui/styles";
import LoginForm from "ui/modules/login-form";

const useStyles = makeStyles(() => {
  return {
    root: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      paddingTop: "30%",
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
