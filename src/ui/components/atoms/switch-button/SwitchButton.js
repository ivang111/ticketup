import { Switch } from "@mui/material";
import { makeStyles } from "@mui/styles";
import clsx from "clsx";
import { useCallback } from "react";
import PropTypes, { oneOf } from "prop-types";

const useStyles = makeStyles(() => {
  return {
    root: {},
  };
});
const defaultOnChange = () => {};
const SwitchButton = ({ className, onChange = defaultOnChange, color, size, disabled }) => {
  const styles = useStyles();
  const handleChange = useCallback((event) => {
    const value = event.target.value;
    onChange(value);
  });

  return (
    <Switch
      className={clsx(styles.root, className)}
      color={color}
      disabled={disabled}
      onChange={handleChange}
      size={size}
    />
  );
};

SwitchButton.propTypes = {
  disabled: PropTypes.bool,
  className: PropTypes.string,
  color: PropTypes.oneOf(["primary", "secondary", "terceary", "fourth"]),
  size: oneOf(["small", "default"]),
  onChange: PropTypes.func,
};

export default SwitchButton;
