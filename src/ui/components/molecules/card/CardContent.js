import PropTypes from "prop-types";
import { CardContent as MuiCardContent } from "@mui/material";

const CardContent = ({ children, className }) => {
  return <MuiCardContent className={className}>{children}</MuiCardContent>;
};

CardContent.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

export default CardContent;
