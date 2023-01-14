import { makeStyles } from "@mui/styles";
import SingUpForm from "../../modules/sing-up-form";

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

const singUpPage = () => {
  const styles = useStyles();

  return (
    <div className={styles.root}>
      <SingUpForm />
    </div>
  );
};

export default singUpPage;
