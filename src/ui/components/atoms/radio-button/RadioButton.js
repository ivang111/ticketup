import { FormControlLabel, Radio } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useTheme } from "@mui/material/styles";
import PropTypes from "prop-types";
import { useCallback } from "react";
import clsx from "clsx";

const useStyles = makeStyles(() => {
  return {
    root: {},
    radio: {},
  };
});

const defaultOnChange = () => {};

const RadioButton = ({
  checked = false,
  ariaLabel,
  name,
  onChange = defaultOnChange,
  value,
  color,
  className,
  label,
  labelPlacement = "left",
  ...rest
}) => {
  const styles = useStyles();
  const theme = useTheme();

  const handleChange = useCallback((event) => {
    const value = event.target.value;
    onChange(value);
  });
  return (
    <FormControlLabel
      className={styles.root}
      control={
        <Radio
          checked={checked}
          className={clsx(styles.radio, className)}
          color={color}
          inputProps={{ "aria-label": ariaLabel }}
          name={name}
          onChange={handleChange}
          sx={{
            color: theme.palette[color].main,
            "&.Mui-checked": {
              color: theme.palette[color].main,
            },
          }}
          {...rest}
        />
      }
      label={label}
      labelPlacement={labelPlacement}
      value={value}
    />
  );
};

RadioButton.propTypes = {
  checked: PropTypes.bool.isRequired,
  className: PropTypes.string,
  color: PropTypes.oneOf(["primary", "secondary", "terceary", "fourth"]),
  value: PropTypes.any,
  ariaLabel: PropTypes.string,
  name: PropTypes.string,
  onChange: PropTypes.func,
  label: PropTypes.any,
  labelPlacement: PropTypes.oneOf(["start", "end", "top", "bottom"]),
};

export default RadioButton;
