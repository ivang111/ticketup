import { makeStyles } from "@mui/styles";
import ForgotPasswordInstructios from "../../modules/forgot-password-instructios";

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

const ForgotPasswordIntrusctionsPage = () => {
  const styles = useStyles();

  return (
    <div className={styles.root}>
      <ForgotPasswordInstructios />
    </div>
  );
};

export default ForgotPasswordIntrusctionsPage;
