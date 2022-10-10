import { useCallback } from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import { Modal as MuiModal, Box } from "@mui/material";

import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => {
  return {
    root: {
      borderRadius: 12,
      boxShadow: theme.shadows[3],
    },
    card: {
      padding: 0,
    },
    header: {
      padding: "60px 20px 5px 20px !important",
      borderBottom: `0.5px solid ${theme.palette.grey[400]}`,
    },
    body: {
      padding: "60px 20px 5px 20px !important",
      borderBottom: `0.5px solid ${theme.palette.grey[400]}`,
    },
    footer: {
      padding: "60px 20px 5px 20px !important",
    },
    content: {
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
    },
    closeButton: {
      position: "absolute !important",
      top: -45,
      right: 5,
    },
    headContainer: {
      position: "relative",
    },
  };
});

const defaultOnClose = () => {};

const Modal = ({
  className = "",
  open = false,
  onClose = defaultOnClose,
  children,
  size,
  ...rest
}) => {
  const styles = useStyles();
  const handleClose = useCallback(() => onClose(false));

  if (!open) {
    return null;
  }

  return (
    <MuiModal className={clsx(className, styles.root)} onClose={handleClose} open={open} {...rest}>
      <Box className={styles.content} sx={{ width: size }}>
        {children}
      </Box>
    </MuiModal>
  );
};

Modal.propTypes = {
  className: PropTypes.string,
  body: PropTypes.node,
  head: PropTypes.node,
  foot: PropTypes.node,
  onClose: PropTypes.func,
  onClick: PropTypes.func,
  open: PropTypes.bool,
  size: PropTypes.number,
  children: PropTypes.node,
};

export default Modal;
