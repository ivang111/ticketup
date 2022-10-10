/* eslint-disable react/jsx-no-bind */
import PropTypes from "prop-types";
import { makeStyles } from "@mui/styles";
import clsx from "clsx";

const useStyles = makeStyles((theme) => {
  return {
    buttonGroup: {
      width: "fit-content",
      height: "fit-content",
      background: theme.palette.primary.dark,
      borderRadius: "6px",
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      padding: "2px",
      gap: "4px",
    },
    buttonGroupItem: {
      fontWeight: "400",
      fontSize: "12px",
      lineHeight: "18px",
      background: theme.palette.primary.dark,
      padding: "3px 16px",
      color: theme.palette.background.paper,
      borderRadius: "6px",
      cursor: "pointer",
    },
    active: {
      color: `${theme.palette.primary.dark} !important`,
      background: `${theme.palette.background.paper} !important`,
    },
  };
});

const ToggleButton = ({ value, options, disabledToogle, setValue, ...rest }) => {
  const styles = useStyles();
  const toogleActiveStyles = (key) => {
    if (options[key] === value) return styles.active;
    else return "";
  };

  const toogleButtons = options.map((label, key) => (
    <span
      className={clsx(styles.buttonGroupItem, toogleActiveStyles(key))}
      key={key}
      onClick={() => {
        if (disabledToogle) return;
        setValue(options[key]);
      }}
    >
      {label.charAt(0).toUpperCase() + label.slice(1).toLowerCase()}
    </span>
  ));

  return (
    <div className={styles.buttonGroup} {...rest}>
      {toogleButtons}
    </div>
  );
};

ToggleButton.propTypes = {
  options: PropTypes.array,
  value: PropTypes.any,
  disabledToogle: PropTypes.bool,
  setValue: PropTypes.func,
};

export default ToggleButton;
