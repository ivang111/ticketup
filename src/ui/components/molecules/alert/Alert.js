import { Alert as MuiAlert, alpha } from "@mui/material";
import { makeStyles, useTheme } from "@mui/styles";
import clsx from "clsx";
import PropTypes from "prop-types";
import { useEffect } from "react";

const useStyles = makeStyles((theme) => {
  return {
    root: {
      maxWidth: 520,
      fontSize: 14,
      fontWeight: 500,
      borderRadius: 5,
      border: 1,
      "& .MuiAlert-icon": {
        color: "inherit !important",
      },
      "& .MuiButton-root": {
        color: "inherit !important",
      },
    },
    floating: {
      position: "absolute",
      width: "100%",
      height: "100%",
      top: 0,
      left: 0,
      justifyContent: "center",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      background: alpha(theme.palette.background.paper, 0.6),
      zIndex: 1000,
    },
  };
});

const defaultOnClose = () => {};
const Alert = ({
  severity = "success",
  icon = null,
  text = "",
  className = "",
  show = false,
  action,
  timeout,
  floating = false,
  onClose = defaultOnClose,
  ...rest
}) => {
  const styles = useStyles();
  const theme = useTheme();

  useEffect(() => {
    if (timeout && show) {
      const closeTimeout = setTimeout(() => {
        onClose();
        clearTimeout(closeTimeout);
      }, timeout * 1000);
    }
  }, [timeout, show]);

  if (!show) {
    return null;
  }

  return (
    <div className={clsx(floating && styles.floating)}>
      <MuiAlert
        action={action}
        className={clsx(styles.root, className)}
        icon={icon}
        severity={severity}
        style={{
          backgroundColor: theme.palette[severity].light,
          borderColor: theme.palette[severity].dark,
          color: theme.palette[severity].dark,
        }}
        variant="outlined"
        {...rest}
      >
        {text}
      </MuiAlert>
    </div>
  );
};

Alert.propTypes = {
  action: PropTypes.node,
  icon: PropTypes.node,
  text: PropTypes.node,
  severity: PropTypes.oneOf(["success", "info", "warning", "error"]),
  className: PropTypes.string,
  show: PropTypes.bool,
  timeout: PropTypes.number,
  onClose: PropTypes.func,
  floating: PropTypes.bool,
};

export default Alert;
