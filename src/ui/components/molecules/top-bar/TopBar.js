import PropTypes from "prop-types";
import clsx from "clsx";
import { AppBar, Toolbar } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(() => {
  return {
    toolbar: {},
    root: {
      boxShadow: "none",
      position: "relative !important",
    },
  };
});

const Topbar = ({ children, color, position, className }) => {
  const styles = useStyles();
  return (
    <AppBar className={clsx(styles.root, className)} color={color} position={position}>
      <Toolbar className={clsx(styles.toolbar)}>{children}</Toolbar>
    </AppBar>
  );
};
Topbar.propTypes = {
  position: PropTypes.oneOf(["static", "default"]),
  color: PropTypes.oneOf(["primary", "secondary", "terceary", "fourth", "background"]),
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default Topbar;
