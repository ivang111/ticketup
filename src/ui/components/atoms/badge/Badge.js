import PropTypes from "prop-types";
import { Badge as MuiBadge, Chip } from "@mui/material";
import { makeStyles, useTheme } from "@mui/styles";
import { isImportant } from "ui/helpers";
import BadgeWithArrow from "./BadgeWithArrow";

const useStyles = makeStyles({
  root: {
    borderRadius: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: isImportant("25px"),
    borderRadius: "10px 10px 0 0 !important",
    fontSize: isImportant("12px"),
  },
  iconOnly: {
    width: 36,
    height: 36,
  },
});

const Badge = ({
  text,
  icon,
  color = "success",
  iconOnly = false,
  hasArrow = false,
  deleteIcon,
  options,
  updateStatus,
}) => {
  const styles = useStyles();
  const theme = useTheme();

  if (hasArrow && options.length > 0) {
    return (
      <BadgeWithArrow
        color={color}
        deleteIcon={deleteIcon}
        icon={icon}
        onClick={updateStatus}
        options={options}
        text={text}
      />
    );
  }

  if (iconOnly) {
    return (
      <MuiBadge
        className={styles.iconOnly}
        style={{
          color: theme.palette[color].main,
          backgroundColor: `${theme.palette[color].light} !important`,
        }}
      >
        {icon}
      </MuiBadge>
    );
  }
  return (
    <Chip
      className={styles.root}
      color={color}
      icon={icon}
      label={text}
      sx={{
        color: `${theme.palette[color].main} !important`,
        backgroundColor: `${theme.palette[color].light} !important`,
      }}
      variant="contained"
    />
  );
};

Badge.propTypes = {
  icon: PropTypes.node,
  deleteIcon: PropTypes.node,
  text: PropTypes.any,
  iconOnly: PropTypes.bool,
  hasArrow: PropTypes.bool,
  color: PropTypes.oneOf(["success", "info", "warning", "error"]),
  options: PropTypes.array,
  updateStatus: PropTypes.func,
};

export default Badge;
