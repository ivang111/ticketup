import PropTypes from "prop-types";
import { CardActions as MuiCardActions } from "@mui/material";
import { makeStyles } from "@mui/styles";
import clsx from "clsx";

const useStyles = makeStyles({
  root: {
    padding: 16,
  },
});

const CardActions = ({ disableSpacing = true, children, className }) => {
  const styles = useStyles();
  return (
    <MuiCardActions className={clsx(styles.root, className)} disableSpacing={disableSpacing}>
      {children}
    </MuiCardActions>
  );
};

CardActions.propTypes = {
  disableSpacing: PropTypes.bool,
  children: PropTypes.node,
  className: PropTypes.string,
};

export default CardActions;
