import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker as MuiDatePicker } from "@mui/x-date-pickers/DatePicker";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { makeStyles } from "@mui/styles";
import PropTypes from "prop-types";
import { useCallback } from "react";
import Textfield from "ui/components/atoms/textfield";
import { FORMATS } from "frameworks/dates";
import { StaticDatePicker } from "@mui/x-date-pickers";

const useStyles = makeStyles(() => {
  return {
    root: {},
    Default: {
      views: ["day", "month", "year"],
    },
    onlyYear: {
      views: ["year"],
    },
    yearMonth: {
      views: ["year", "month"],
    },
  };
});

const defaultOnChange = () => {};

const DatePicker = ({
  className,
  label,
  inputFormat = FORMATS.usa,
  disabled = false,
  value,
  name,
  onChange = defaultOnChange,
  onAccept = defaultOnChange,
  inputDisabled = false,
  isStatic = false,
  errorMessage,
  ...rest
}) => {
  const styles = useStyles();

  const handleChange = useCallback((newValue) => {
    onChange({ name, value: newValue });
  });

  const renderInput = useCallback((params) => {
    return (
      <Textfield
        className={className}
        disabled={inputDisabled}
        helperText={errorMessage}
        {...params}
        {...rest}
      />
    );
  });

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      {isStatic ? (
        <StaticDatePicker
          className={styles.root}
          disabled={disabled}
          inputFormat={inputFormat}
          onAccept={onAccept}
          onChange={handleChange}
          openTo="month"
          renderInput={renderInput}
          value={value}
        />
      ) : (
        <MuiDatePicker
          className={styles.root}
          disabled={disabled}
          inputFormat={inputFormat}
          label={label}
          onChange={handleChange}
          renderInput={renderInput}
          value={value}
        />
      )}
    </LocalizationProvider>
  );
};
DatePicker.propTypes = {
  className: PropTypes.string,
  label: PropTypes.string,
  inputFormat: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.any,
  onChange: PropTypes.func,
  onAccept: PropTypes.func,
  disabled: PropTypes.bool,
  inputDisabled: PropTypes.bool,
  isStatic: PropTypes.bool,
  errorMessage: PropTypes.any,
};

export default DatePicker;
