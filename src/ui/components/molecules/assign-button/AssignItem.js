import { ListItem, ListItemAvatar, ListItemButton, ListItemText } from "@mui/material";
import { makeStyles } from "@mui/styles";
import clsx from "clsx";
import PropTypes from "prop-types";
import { useCallback } from "react";
import Avatar from "ui/components/atoms/avatar";
import { isImportant } from "ui/helpers";

const useStyles = makeStyles((theme) => {
  return {
    option: {
      display: "flex",
      alignItems: "center",
      gap: "12px",
      width: "100%",
      color: theme.palette.grey[800],
      background: theme.palette.background.paper,
      "&:hover": {
        background: isImportant(theme.palette.background.light),
        color: `${theme.palette.primary.dark} !important`,
      },
    },
    selectedOption: {
      background: isImportant(theme.palette.background.light),
      color: `${theme.palette.primary.dark} !important`,
    },
  };
});

const AssignItem = ({ option, selected = false, onSelect }) => {
  const styles = useStyles();
  const handleOnClick = useCallback(() => {
    onSelect(option);
  });
  return (
    <ListItem
      className={clsx(styles.option, selected && styles.selectedOption)}
      disablePadding
      key={option.value}
    >
      <ListItemButton onClick={handleOnClick}>
        <ListItemAvatar>
          <Avatar alt={`Avatar n°${option.value}`} size="sm" src={option.img} />
        </ListItemAvatar>
        <ListItemText primary={option.label} />
      </ListItemButton>
    </ListItem>
  );
};

AssignItem.propTypes = {
  option: PropTypes.object,
  selected: PropTypes.bool,
  onSelect: PropTypes.func,
};

export default AssignItem;
