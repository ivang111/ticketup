import PropTypes from "prop-types";
import { Avatar as MuiAvatar } from "@mui/material";
import { useTheme } from "@mui/styles";

const SIZES = {
  xs: {
    width: 24,
    height: 24,
  },
  sm: {
    width: 32,
    height: 32,
  },
  md: {
    width: 40,
    height: 40,
  },
  lg: {
    width: 48,
    height: 48,
  },
  xl: {
    width: 64,
    height: 64,
  },
};

const Avatar = ({ letter, image, size = "md", variant = "circular", ...rest }) => {
  const theme = useTheme();
  return (
    <MuiAvatar
      src={image}
      sx={{ ...SIZES[size], bgcolor: theme.palette.primary.main }}
      variant={variant}
      {...rest}
    >
      {letter}
    </MuiAvatar>
  );
};

Avatar.propTypes = {
  letter: PropTypes.node,
  image: PropTypes.string,
  variant: PropTypes.oneOf(["circular", "rounded", "square"]),
  size: PropTypes.oneOf(["xs", "sm", "md", "lg", "xl"]),
};

export default Avatar;
