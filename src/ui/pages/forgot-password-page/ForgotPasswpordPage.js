import { makeStyles } from "@mui/styles";
import ForgotPasswordForm from "../../modules/forgot-password-form";

const useStyles = makeStyles((theme) => {
  return {
    root: {
      width: "100%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      padding: theme.spacing(2, 0, 2, 0),
      backgroundColor: theme.palette.background.paper,
    },
  };
});

const ForgotPasswpordPage = () => {
  const styles = useStyles();

  return (
    <div className={styles.root}>
      <ForgotPasswordForm />
    </div>
  );
};

export default ForgotPasswpordPage;
