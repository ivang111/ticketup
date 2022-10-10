import { Button as MuiButton } from "@mui/material";
import { makeStyles } from "@mui/styles";
import clsx from "clsx";
import PropTypes from "prop-types";
import { isImportant } from "ui/helpers";

const useStyles = makeStyles(() => {
  return {
    root: {
      maxWidth: 289,
      fontSize: 16,
      textTransform: isImportant("none"),
    },
    big: {
      minWidth: 150,
    },
    small: {
      height: 23,
      fontSize: 12,
      padding: 12,
      borderRadius: 3,
    },
    large: {
      fontSize: 16,
    },
  };
});

const Button = ({
  startIcon = null,
  endIcon = null,
  text = "",
  onClick,
  variant,
  className = "",
  disabled,
  size = "big",
  color = "primary",
  ...rest
}) => {
  const styles = useStyles();

  return (
    <MuiButton
      className={clsx(styles.root, className, styles[size])}
      color={color}
      disabled={disabled}
      endIcon={endIcon}
      onClick={onClick}
      size={size}
      startIcon={startIcon}
      variant={variant}
      {...rest}
    >
      {text}
    </MuiButton>
  );
};

Button.propTypes = {
  startIcon: PropTypes.node,
  endIcon: PropTypes.node,
  text: PropTypes.any,
  onClick: PropTypes.func,
  variant: PropTypes.oneOf(["contained", "outlined", "default", "text"]),
  size: PropTypes.oneOf(["small", "medium", "large"]),
  color: PropTypes.oneOf(["primary", "secondary", "terceary"]),
  disabled: PropTypes.bool,
  className: PropTypes.string,
};

export default Button;
