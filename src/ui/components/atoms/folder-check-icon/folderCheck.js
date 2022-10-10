import PropTypes from "prop-types";
import Icon from "../icon";

const JournalBookmarkIcon = ({ size, fontSize, ...rest }) => {
  return <Icon fontSize={fontSize} size={size} svg={<Icon.FolderCheck />} {...rest} />;
};

JournalBookmarkIcon.propTypes = {
  fontSize: PropTypes.number,
  size: PropTypes.oneOf(["large", "small"]),
};

export default JournalBookmarkIcon;
