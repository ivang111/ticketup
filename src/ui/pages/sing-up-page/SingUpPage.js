import { makeStyles } from "@mui/styles";
import SingUpForm from "../../modules/sing-up-form";

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

const singUpPage = () => {
  const styles = useStyles();

  return (
    <div className={styles.root}>
      <SingUpForm />
    </div>
  );
};

export default singUpPage;
