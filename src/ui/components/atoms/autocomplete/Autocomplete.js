/* eslint-disable react/jsx-no-bind */
import { useCallback } from "react";
import PropTypes from "prop-types";
import {
  FormControl,
  FormHelperText,
  Autocomplete as MuiAutocomplete,
  TextField,
} from "@mui/material";

const defaultOnChange = () => {};

const Autocomplete = ({
  errorMessage = "",
  name,
  id,
  value,
  onChange = defaultOnChange,
  options,
  placeholder,
  ...rest
}) => {
  const handleOnChange = useCallback(({ target: { value: val } }) => {
    onChange({
      name,
      value: val,
    });
  });

  return (
    <FormControl>
      <MuiAutocomplete
        getOptionLabel={(option) => option.label || ""}
        id={id}
        multiple={false}
        onChange={handleOnChange}
        options={options}
        renderInput={(params) => <TextField {...params} label={placeholder} />}
        value={value}
        {...rest}
      />
      <FormHelperText style={{ marginLeft: "17px" }}>{errorMessage}</FormHelperText>
    </FormControl>
  );
};

Autocomplete.propTypes = {
  name: PropTypes.string,
  disabled: PropTypes.bool,
  id: PropTypes.string,
  value: PropTypes.any,
  onChange: PropTypes.func,
  errorMessage: PropTypes.node,
  options: PropTypes.array,
  placeholder: PropTypes.string,
};

export default Autocomplete;
