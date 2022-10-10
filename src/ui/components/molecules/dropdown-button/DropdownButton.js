import PropTypes from "prop-types";
import { ArrowDownwardOutlined as DropdownIcon } from "@mui/icons-material";
import { Paper } from "@mui/material";
import { makeStyles } from "@mui/styles";

import Button from "ui/components/atoms/button";
import { useCallback, useState } from "react";
import clsx from "clsx";

const useStyles = makeStyles((theme) => {
  return {
    root: {
      position: "relative",
    },
    button: {
      width: "100% !important",
      maxWidth: "inherit !important",
    },
    paper: {
      position: "absolute",
      left: 0,
      top: 45,
      width: "100%",
      boxShadow: `0px 0px 4px ${theme.palette.primary.light} !important`,
      borderRadius: "5px !important",
    },
    hidden: {
      display: "none",
    },
  };
});

const DropdownButton = ({ onClick, children, text }) => {
  const [open, setOpen] = useState(false);
  const styles = useStyles();

  const handleOnClick = useCallback(() => {
    setOpen(!open);
    onClick();
  }, [open]);

  return (
    <div className={styles.root}>
      <Button
        className={styles.button}
        endIcon={<DropdownIcon />}
        onClick={handleOnClick}
        text={text}
        variant="contained"
      />
      <Paper className={clsx(!open && styles.hidden, styles.paper)} elevation={1}>
        {children}
      </Paper>
    </div>
  );
};

DropdownButton.propTypes = {
  children: PropTypes.node,
  onClick: PropTypes.func,
  text: PropTypes.string,
};

export default DropdownButton;
