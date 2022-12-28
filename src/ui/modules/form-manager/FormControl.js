import { makeStyles } from "@mui/styles";
import clsx from "clsx";
import PropTypes from "prop-types";

const useStyles = makeStyles((theme) => {
  return {
    root: {
      display: "flex",
      flexDirection: "column",
      margin: theme.spacing(0, 0, 1, 0),
    },
  };
});

const FormControl = ({ children, className }) => {
  const styles = useStyles();
  return <div className={clsx(styles.root, className)}>{children}</div>;
};

FormControl.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

export default FormControl;
