import PropTypes from "prop-types";
import { Card as MuiCard } from "@mui/material";
import { makeStyles } from "@mui/styles";
import clsx from "clsx";

const useStyles = makeStyles({
  root: {},
  sm: {},
  md: {
    padding: "10%",
  },
  lg: {
    padding: "15%",
  },
});

const Card = ({ size = 345, children, className, variant = "sm", ...rest }) => {
  const styles = useStyles();
  return (
    <MuiCard
      className={clsx(styles.root, styles[variant], className)}
      sx={{ maxWidth: size === 0 ? "auto" : size }}
      {...rest}
    >
      {children}
    </MuiCard>
  );
};

Card.propTypes = {
  size: PropTypes.number,
  children: PropTypes.node,
  variant: PropTypes.oneOf(["sm", "md", "lg"]),
  className: PropTypes.string,
};

export default Card;
