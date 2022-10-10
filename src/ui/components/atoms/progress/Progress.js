import { CircularProgress as MuiProgressBar, Box } from "@mui/material";
import { makeStyles } from "@mui/styles";
import PropTypes from "prop-types";
import clsx from "clsx";

const useStyles = makeStyles(() => {
  return {
    root: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    floating: {
      position: "fixed",
      width: "100%",
      height: "100%",
    },
    progress: {},
  };
});

const Progress = ({ className, color = "primary", show = false, floating = false, ...rest }) => {
  const styles = useStyles();
  if (!show) {
    return null;
  }
  return (
    <Box className={clsx(styles.root, floating && styles.floating)}>
      <MuiProgressBar
        className={clsx(styles.progress, className)}
        color={color}
        show={show ? "true" : "false"}
        {...rest}
      />
    </Box>
  );
};

Progress.propTypes = {
  className: PropTypes.string,
  color: PropTypes.oneOf(["primary", "secondary", "terceary"]),
  show: PropTypes.bool,
  floating: PropTypes.bool,
};

export default Progress;
