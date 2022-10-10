import PropTypes from "prop-types";
import Icon from "../icon";

const VolunteersIcon = ({ size, fontSize, ...rest }) => {
  return <Icon fontSize={fontSize} size={size} svg={<Icon.Volunteers />} {...rest} />;
};

VolunteersIcon.propTypes = {
  fontSize: PropTypes.number,
  size: PropTypes.oneOf(["large", "small"]),
};

export default VolunteersIcon;
