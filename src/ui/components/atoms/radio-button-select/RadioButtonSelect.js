import { FormControlLabel, Grid, Radio } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useTheme } from "@mui/material/styles";
import PropTypes from "prop-types";
import { useCallback } from "react";
import clsx from "clsx";

const useStyles = makeStyles((theme) => {
  return {
    root: {},
    control: {
      width: "100%",
      height: theme.spacing(4.5),
    },
    border: {
      borderStyle: "solid",
      borderWidth: 1,
      borderColor: theme.palette.grey[400],
      borderRadius: "5px",
    },
    radio: {
      color: theme.palette.grey[150],
      padding: "4px !important",
    },
    label: {
      color: theme.palette.grey[800],
      fontWeight: "400",
      fontSize: "14px",
      lineHeight: "15px",
      paddingRight: "20px !important",
    },
    checked: { background: theme.palette.primary.dark, border: "none !important" },
    checkedColor: { color: theme.palette.background.paper },
  };
});

const defaultOnChange = () => {};

const RadioButtonSelect = ({
  ariaLabel,
  name,
  onChange = defaultOnChange,
  value,
  className,
  options,
  border = true,
  ...rest
}) => {
  const styles = useStyles();
  const theme = useTheme();

  const handleChange = useCallback((event) => {
    const value = event.target.name;
    onChange({ value, name });
  });
  return (
    <div className={styles.root}>
      <Grid container spacing={2} sx={{ marginLeft: 0 }}>
        {options.map((option) => {
          const checked = option.value === value;
          return (
            <Grid item key={option.value} md={6}>
              <FormControlLabel
                className={clsx(
                  styles.control,
                  border && styles.border,
                  border && checked && styles.checked
                )}
                control={
                  <Radio
                    checked={checked}
                    className={clsx(styles.radio, className)}
                    inputProps={{ "aria-label": ariaLabel }}
                    name={option.value}
                    onChange={handleChange}
                    onClick={onChange ? onChange : handleChange}
                    sx={{
                      color: theme.palette.grey[150],
                      "&.Mui-checked": {
                        backgroundColor: border ? theme.palette.primary.dark : "",
                        color: theme.palette.grey[350],
                      },
                    }}
                    {...rest}
                  />
                }
                label={
                  <span className={clsx(styles.label, border && checked && styles.checkedColor)}>
                    {option.label}
                  </span>
                }
                labelPlacement={"end"}
                value={value}
              />
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
};

RadioButtonSelect.propTypes = {
  className: PropTypes.string,
  value: PropTypes.any,
  ariaLabel: PropTypes.string,
  name: PropTypes.string,
  onChange: PropTypes.func,
  options: PropTypes.array.isRequired,
  border: PropTypes.bool,
};

export default RadioButtonSelect;
