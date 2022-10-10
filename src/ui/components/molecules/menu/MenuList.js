import { useCallback } from "react";
import { MenuList as MuiMenuList } from "@mui/material";
import { makeStyles } from "@mui/styles";
import clsx from "clsx";
import PropTypes from "prop-types";

const useStyles = makeStyles((theme) => {
  return {
    root: {
      borderRadius: 5,
      boxShadow: theme.shadows[3],
    },
  };
});

const defaultOnClose = () => {};

const MenuList = ({
  className = "",
  open = false,
  onClose = defaultOnClose,
  children,
  id,
  name = "",
  positionOrigin = { vertical: "bottom", horizontal: "left" },
  ...rest
}) => {
  const styles = useStyles();
  const handleClose = useCallback(() => onClose(false));
  return (
    <MuiMenuList
      className={clsx(styles.root, className)}
      id={id}
      name={name}
      onClose={handleClose}
      open={open}
      positionOrigin={positionOrigin}
      {...rest}
    >
      {children}
    </MuiMenuList>
  );
};

MenuList.propTypes = {
  id: PropTypes.string,
  className: PropTypes.string,
  name: PropTypes.string,
  onClose: PropTypes.func,
  open: PropTypes.bool,
  children: PropTypes.node,
  positionOrigin: PropTypes.object,
};

export default MenuList;
