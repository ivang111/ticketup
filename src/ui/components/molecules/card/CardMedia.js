import PropTypes from "prop-types";
import { CardMedia as MuiCardMedia } from "@mui/material";

const CardMedia = ({ alt, component = "img", height = 140, image }) => {
  return <MuiCardMedia alt={alt} component={component} height={`${height}`} image={image} />;
};

CardMedia.propTypes = {
  alt: PropTypes.string,
  component: PropTypes.string,
  height: PropTypes.number,
  image: PropTypes.string,
};

export default CardMedia;
