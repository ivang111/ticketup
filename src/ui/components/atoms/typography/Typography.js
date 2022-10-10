import { Typography as MuiTypography } from "@mui/material";
import PropTypes from "prop-types";
import { makeStyles } from "@mui/styles";
import clsx from "clsx";

const useStyles = makeStyles(() => {
  return {
    root: {
      lineHeight: 1.2,
    },
  };
});
const Typography = ({
  className = "",
  text = "",
  color = "",
  variant = "",
  fontWeight = "",
  ...rest
}) => {
  const styles = useStyles();
  return (
    <MuiTypography
      className={clsx(styles.root, className)}
      color={color}
      fontWeight={fontWeight}
      text={text}
      variant={variant}
      {...rest}
    >
      {text}
    </MuiTypography>
  );
};
Typography.propTypes = {
  text: PropTypes.any,
  color: PropTypes.string,
  className: PropTypes.string,
  fontWeight: PropTypes.oneOf(["fontWeightRegular", "fontWeightMedium", "fontWeightBold"]),
  variant: PropTypes.oneOf(["h2", "h3", "h4", "h5", "h6", "body", "body1", "body2"]),
};
export default Typography;
