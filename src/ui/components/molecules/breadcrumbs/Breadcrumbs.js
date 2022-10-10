import { Breadcrumbs as MuiBreadcrumbs } from "@mui/material";
import { makeStyles } from "@mui/styles";
import PropTypes from "prop-types";
import clsx from "clsx";

const useStyles = makeStyles(() => {
  return {
    root: {
      fontSize: 18,
    },
  };
});

const Breadcrumbs = ({ children, className, title = "breadcrumb" }) => {
  const styles = useStyles();
  return (
    <MuiBreadcrumbs aria-label={title} className={clsx(styles.root, className)} separator="›">
      {children}
    </MuiBreadcrumbs>
  );
};

Breadcrumbs.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
  children: PropTypes.node,
};

export default Breadcrumbs;
