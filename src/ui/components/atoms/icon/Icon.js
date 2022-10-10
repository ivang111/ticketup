import { SvgIcon } from "@mui/material";
import PropTypes from "prop-types";

const Icon = ({ svg, size, fontSize, ...rest }) => {
  return (
    <SvgIcon fontSize={size} sx={{ fontSize: fontSize }} {...rest}>
      {svg}
    </SvgIcon>
  );
};

Icon.propTypes = {
  svg: PropTypes.any,
  fontSize: PropTypes.number,
  size: PropTypes.oneOf(["large", "small"]),
};

export default Icon;
