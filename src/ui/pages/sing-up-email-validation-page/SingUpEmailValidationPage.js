import { makeStyles } from "@mui/styles";
import SingUpEmailValidationForm from "../../modules/sing-up-email-validation-form";

const useStyles = makeStyles(() => {
  return {
    root: {
      width: "100%",
      height: "70vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
  };
});

const SingUpEmailValidationPage = () => {
  const styles = useStyles();

  return (
    <div className={styles.root}>
      <SingUpEmailValidationForm />
    </div>
  );
};

export default SingUpEmailValidationPage;
