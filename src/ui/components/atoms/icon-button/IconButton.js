import { Button as MuiButton } from "@mui/material";
import clsx from "clsx";
import PropTypes from "prop-types";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  root: {
    minWidth: "40px !important",
    minHeight: "40px !important",
    maxWidth: 40,
    maxHeight: 40,
  },
  square: {
    borderRadius: 5,
  },
  circle: {
    borderRadius: "100% !important",
  },
});

const IconButton = ({
  children,
  color = "primary",
  disabled = false,
  onClick,
  variant = "outlined",
  shape = "circle",
  className = "",
  ...rest
}) => {
  const styles = useStyles();
  return (
    <MuiButton
      className={clsx(className, styles[shape], styles.root)}
      color={color}
      disabled={disabled}
      onClick={onClick}
      variant={variant}
      {...rest}
    >
      {children}
    </MuiButton>
  );
};

IconButton.propTypes = {
  children: PropTypes.node,
  color: PropTypes.oneOf(["primary", "secondary", "terceary"]),
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  variant: PropTypes.oneOf(["outlined", "contained", "text"]),
  shape: PropTypes.oneOf(["circle", "square"]),
  className: PropTypes.string,
};

export default IconButton;
