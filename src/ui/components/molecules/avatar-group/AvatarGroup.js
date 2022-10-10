import PropTypes from "prop-types";
import { AvatarGroup as MuiAvatarGroup } from "@mui/material";

const AvatarGroup = ({ children, maxAvatars = 5 }) => {
  return <MuiAvatarGroup max={maxAvatars}>{children}</MuiAvatarGroup>;
};

AvatarGroup.propTypes = {
  children: PropTypes.node,
  maxAvatars: PropTypes.number,
};

export default AvatarGroup;
