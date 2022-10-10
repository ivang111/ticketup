import { MenuItem as MuiMenuiten, ListItemIcon, ListItemText } from "@mui/material";
import { makeStyles } from "@mui/styles";
import clsx from "clsx";
import PropTypes from "prop-types";

const useStyles = makeStyles(() => {
  return {
    root: {},
  };
});

const MenuItem = ({ icon = null, text, className }) => {
  const styles = useStyles();
  return (
    <MuiMenuiten className={clsx(styles.root, className)}>
      <ListItemIcon>{icon}</ListItemIcon>
      <ListItemText>{text}</ListItemText>
    </MuiMenuiten>
  );
};
MenuItem.propTypes = {
  icon: PropTypes.node,
  className: PropTypes.string,
  text: PropTypes.any,
};

export default MenuItem;
