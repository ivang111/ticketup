/* eslint-disable react/jsx-no-bind */
import { useCallback, useMemo } from "react";
import { Grid, Box } from "@mui/material";
import { makeStyles } from "@mui/styles";
import PropTypes from "prop-types";
import clsx from "clsx";

const useStyles = makeStyles((theme) => {
  return {
    root: {},
    grid: {
      maxWidth: 190,
      direction: "row",
      justifyContent: "space-between",
      alignItems: "center",
      borderStyle: "solid",
      borderWidth: 2,
      borderColor: theme.palette.primary.dark,
      borderRadius: 5,
      padding: `${theme.spacing(0.5, 2)} !important`,
      position: "relative",
    },
    box: {
      display: "flex",
      alignItems: "center",
      textAlign: "center",
      backgroundColor: theme.palette.primary.dark,
      padding: `${theme.spacing(0.2, 1)} !important`,
      borderRadius: 5,
      color: theme.palette.background.paper,
      cursor: "pointer",
    },
    input: {
      textAlign: "center",
      maxWidth: 90,
      borderStyle: "none",
    },
    decoration: {
      fontSize: 12,
      position: "absolute",
      left: 55,
      top: 9,
    },
  };
});
const defaultOnChange = () => {};

const InputCount = ({
  className,
  onChange = defaultOnChange,
  value,
  name,
  textOne = "+",
  textTwo = "-",
  textDecoration,
  ...rest
}) => {
  const styles = useStyles();

  const handleOnIncrease = () => {
    onChange({ value: (parseFloat(value) + 1).toString(), name });
  };
  const handleOnDecrease = useCallback(() => {
    onChange({ value: (parseFloat(value) - 1).toString(), name });
  });
  const handleChange = useCallback((event) => {
    const value = `${event.target.value}`.replace(/[^0-9.]/g, "").replace(/^[0]+/g, "");
    onChange({ value, name });
  });

  const parsedValue = useMemo(() => {
    if (!!value && value.includes(".")) {
      return value;
    }
    if (isNaN(parseFloat(value))) {
      onChange({ value: value, name });
      return value;
    }
    return value;
  }, [value]);

  return (
    <Grid className={clsx(styles.grid, className)} container>
      <Box className={clsx(styles.box)} onClick={handleOnDecrease}>
        {textTwo}
      </Box>
      <div className={styles.decoration}>{textDecoration}</div>
      <input
        className={clsx(styles.input)}
        id="number"
        onChange={handleChange}
        type="text"
        value={parsedValue}
        {...rest}
      />
      <Box className={clsx(styles.box)} onClick={handleOnIncrease}>
        {textOne}
      </Box>
    </Grid>
  );
};

InputCount.propTypes = {
  onChange: PropTypes.func,
  textOne: PropTypes.string,
  textTwo: PropTypes.string,
  className: PropTypes.string,
  value: PropTypes.any,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  textDecoration: PropTypes.string,
};

export default InputCount;
