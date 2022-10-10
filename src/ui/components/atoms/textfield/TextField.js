import { useCallback } from "react";
import PropTypes from "prop-types";
import { makeStyles, useTheme } from "@mui/styles";
import { InputAdornment, TextField as MuiTextField } from "@mui/material";
import clsx from "clsx";

const useStyles = makeStyles((theme) => {
  return {
    root: {
      borderColor: theme.palette.grey[500],
      borderRadius: 5,
      minHeight: 36,
      padding: theme.spacing(6, 16),
    },
    input: {
      fontSize: 12,
    },
  };
});

const defaultOnChange = () => {};

const TextField = ({
  className,
  error = false,
  errorMessage = "",
  name,
  id,
  value,
  label,
  type = "text",
  onChange = defaultOnChange,
  required = false,
  disabled = false,
  icon,
  iconPosition = "end",
  ...rest
}) => {
  const styles = useStyles();
  const theme = useTheme();
  const handleOnChange = useCallback((event) => {
    onChange({ name, value: event.target.value });
  });

  return (
    <MuiTextField
      InputProps={{
        classes: {
          input: styles.input,
        },
        [iconPosition === "end" ? "endAdornment" : "startAdornment"]: (
          <InputAdornment
            position={iconPosition}
            style={{ color: error && theme.palette.error.main }}
          >
            {icon}
          </InputAdornment>
        ),
      }}
      className={clsx(className, styles.root)}
      disabled={disabled}
      error={error}
      fullWidth
      helperText={errorMessage}
      id={id}
      label={label}
      onChange={handleOnChange}
      required={required}
      type={type}
      value={value}
      {...rest}
    />
  );
};

TextField.propTypes = {
  icon: PropTypes.node,
  className: PropTypes.string,
  name: PropTypes.string,
  error: PropTypes.bool,
  disabled: PropTypes.bool,
  required: PropTypes.bool,
  id: PropTypes.string,
  type: PropTypes.oneOf(["email", "number", "password", "search", "tel", "url", "text"]),
  label: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  errorMessage: PropTypes.node,
  iconPosition: PropTypes.oneOf(["start", "end"]),
};

export default TextField;
