import { useCallback } from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@mui/styles";
import { FormControl, FormHelperText, Select as MuiSelect } from "@mui/material";
import clsx from "clsx";
import MenuItem from "@mui/material/MenuItem";

const useStyles = makeStyles((theme) => {
  return {
    root: {
      borderColor: theme.palette.grey[500],
      borderRadius: 5,
      minHeight: 36,
    },
    input: {
      fontSize: 12,
    },
    placeholder: {
      color: theme.palette.grey[500],
    },
  };
});

const defaultOnChange = () => {};

const Select = ({
  className,
  error = false,
  errorMessage = "",
  name,
  id,
  value,
  label,
  onChange = defaultOnChange,
  required = false,
  disabled = false,
  options,
  placeholder,
  ...rest
}) => {
  const styles = useStyles();
  const handleOnChange = useCallback(({ target: { value: val } }) => {
    onChange({
      name,
      value: val,
    });
  });

  const onRenderValue = useCallback(
    (selected) => {
      if (selected === "") {
        return <span className={styles.placeholder}>{placeholder}</span>;
      }

      return options.find((option) => option.value === selected).label;
    },
    [placeholder, options]
  );

  return (
    <FormControl>
      <MuiSelect
        className={clsx(className, styles.root)}
        disabled={disabled}
        displayEmpty
        error={error}
        id={id}
        inputProps={{ "aria-label": placeholder }}
        label={label}
        onChange={handleOnChange}
        renderValue={onRenderValue}
        required={required}
        value={value}
        {...rest}
      >
        <MenuItem value="">{placeholder}</MenuItem>
        {options.map((option, key) => (
          <MenuItem key={key} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </MuiSelect>
      <FormHelperText style={{ marginLeft: "17px" }}>{errorMessage}</FormHelperText>
    </FormControl>
  );
};

Select.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string,
  error: PropTypes.bool,
  disabled: PropTypes.bool,
  required: PropTypes.bool,
  id: PropTypes.string,
  label: PropTypes.string,
  value: PropTypes.any,
  onChange: PropTypes.func,
  errorMessage: PropTypes.node,
  options: PropTypes.array,
  placeholder: PropTypes.string,
};

export default Select;
