import PropTypes from "prop-types";
import { CardHeader as MuiCardHeader } from "@mui/material";

const CardHeader = ({ avatar, subheader, title, action, className }) => {
  return (
    <MuiCardHeader
      action={action}
      avatar={avatar}
      className={className}
      subheader={subheader}
      title={title}
    />
  );
};

CardHeader.propTypes = {
  avatar: PropTypes.node,
  subheader: PropTypes.any,
  title: PropTypes.any,
  action: PropTypes.node,
  className: PropTypes.string,
};

export default CardHeader;
