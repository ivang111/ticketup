import PropTypes from "prop-types";
import { Tooltip as MuiTooltip } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => {
  return {
    root: {},
    popper: {
      maxWidth: 300,
    },
    tooltip: {
      color: `${theme.palette.primary.dark} !important`,
      backgroundColor: `${theme.palette.grey[100]} !important`,
      borderRadius: "2px !important",
      height: 24,
      display: "flex",
      alignContent: "center",
      alignItems: "center",
      boxShadow: theme.shadows[1],
    },
    arrow: {
      color: `${theme.palette.grey[100]} !important`,
    },
  };
});

const Tooltip = ({ children, title, placement = "bottom" }) => {
  const styles = useStyles();
  return (
    <MuiTooltip
      arrow
      classes={{ popper: styles.popper, tooltip: styles.tooltip, arrow: styles.arrow }}
      placement={placement}
      title={title}
    >
      <div>{children}</div>
    </MuiTooltip>
  );
};

Tooltip.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string,
  placement: PropTypes.oneOf(["top", "bottom", "right", "left"]),
};

export default Tooltip;
