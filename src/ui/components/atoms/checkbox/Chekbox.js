import { Checkbox, FormGroup, FormControlLabel } from "@mui/material";
import { makeStyles } from "@mui/styles";
import clsx from "clsx";
import PropTypes from "prop-types";
import { useCallback } from "react";

const useStyles = makeStyles(() => {
  return {
    root: {},
  };
});

const defaultOnChange = () => {};

const CheckboxSelect = ({
  disabled,
  name,
  color,
  onChange = defaultOnChange,
  className,
  label,
  ...rest
}) => {
  const styles = useStyles();

  const handleChange = useCallback((event) => {
    const value = event.target.value;
    onChange(value);
  });
  return (
    <FormGroup>
      <FormControlLabel
        control={
          <Checkbox
            className={clsx(styles.root, className)}
            color={color}
            disabled={disabled}
            name={name}
            onChange={handleChange}
            {...rest}
          />
        }
        label={label}
      />
    </FormGroup>
  );
};

CheckboxSelect.propTypes = {
  disabled: PropTypes.bool,
  className: PropTypes.string,
  onChange: PropTypes.func,
  name: PropTypes.string,
  color: PropTypes.oneOf(["primary", "secondary", "terceary", "fourth"]),
  label: PropTypes.any,
};

export default CheckboxSelect;
