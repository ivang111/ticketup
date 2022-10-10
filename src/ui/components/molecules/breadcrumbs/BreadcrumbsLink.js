import { Link as RouterLink, useNavigate } from "react-router-dom";
import { makeStyles } from "@mui/styles";
import PropTypes from "prop-types";
import clsx from "clsx";
import Button from "ui/components/atoms/button";
import { useCallback } from "react";
import { isImportant } from "ui/helpers";

const useStyles = makeStyles((theme) => {
  return {
    root: {
      textDecoration: "underline !important",
      textDecorationColor: isImportant(theme.palette.grey[800]),
      textDecorationThickness: isImportant("2px"),
    },
  };
});

const BreadcrumbsLink = ({ className, href, children, isRoute = false }) => {
  const styles = useStyles();
  const navigate = useNavigate();

  const handleOnClick = useCallback(() => {
    navigate(href);
  });

  if (isRoute) {
    return <RouterLink to={href}>{children}</RouterLink>;
  }
  return (
    <Button
      className={clsx(styles.root, className)}
      onClick={handleOnClick}
      text={children}
      underline="hover"
    />
  );
};

BreadcrumbsLink.propTypes = {
  className: PropTypes.string,
  color: PropTypes.string,
  href: PropTypes.string,
  children: PropTypes.node,
  isRoute: PropTypes.bool,
};

export default BreadcrumbsLink;
