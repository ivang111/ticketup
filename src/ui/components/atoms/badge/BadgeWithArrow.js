/* eslint-disable react/jsx-no-bind */
import PropTypes from "prop-types";
import { Chip } from "@mui/material";
import { makeStyles, useTheme } from "@mui/styles";
import { useEffect, useState } from "react";
import { isImportant } from "ui/helpers";

const useStyles = makeStyles((theme) => {
  return {
    root: {
      borderRadius: "100%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: isImportant("25px"),
      borderRadius: "10px 10px 0 0 !important",
      fontSize: isImportant("12px"),
    },
    container: {
      display: "flex",
      flexDirection: "column",
      position: "relative",
    },
    content: {
      display: "flex",
      flexDirection: "column",
      gap: "8px",
      boxShadow: theme.shadows[3],
      borderRadius: "4px",
      position: "absolute",
      padding: "4px 18px 4px 8px",
      width: "100%",
    },
    contentOption: {
      display: "flex",
      gap: "5px",
      alignItems: "center",
      cursor: "pointer",
    },
    label: {
      fontWeight: "400",
      fontSize: "10px",
      lineHeight: "15px",
      color: theme.palette.grey[950],
      cursor: "pointer",
    },
  };
});

const BadgeWithArrow = ({ text, icon, color = "success", deleteIcon, options, onClick }) => {
  const styles = useStyles();
  const theme = useTheme();
  const [expand, setExpand] = useState(false);
  const [selectedText, setSelectedText] = useState(text);
  const [seletedIcon, setSelectedIcon] = useState(icon);
  const [seletedDeleteIcon, setSelectedDeleteIcon] = useState(deleteIcon);
  const [selectedColor, setSelectedColor] = useState(color);
  const [selectedOptions, setSelectedOptions] = useState(options);

  useEffect(() => {
    if (selectedText === "TO START") {
      setSelectedOptions(
        selectedOptions.filter((option) => {
          return option.label !== selectedText && option.label !== "FINISHED";
        })
      );
    } else if (selectedText === "IN PROGRESS") {
      setSelectedOptions(
        selectedOptions.filter((option) => {
          return option.label !== selectedText && option.label !== "TO START";
        })
      );
    }
  }, [selectedText]);
  return (
    <div className={styles.container}>
      <Chip
        className={styles.root}
        color={selectedColor}
        deleteIcon={seletedDeleteIcon}
        icon={seletedIcon}
        label={selectedText}
        onDelete={() => {
          setExpand(!expand);
        }}
        sx={{
          color: `${theme.palette[selectedColor].main} !important`,
          backgroundColor: `${theme.palette[selectedColor].light} !important`,
        }}
        variant="contained"
      />
      {expand && (
        <div
          className={styles.content}
          style={{ bottom: selectedOptions.length !== 1 ? "-46px" : "-26px" }}
        >
          {selectedOptions.map((option, key) => (
            <div
              className={styles.contentOption}
              key={key}
              onClick={() => {
                onClick(option.value);
                setSelectedText(option.label);
                setSelectedIcon(option.icon);
                setSelectedDeleteIcon(option.deleteIcon);
                setExpand(false);
                setSelectedColor(option.color);
              }}
            >
              {option.icon} <label className={styles.label}>{option.label}</label>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

BadgeWithArrow.propTypes = {
  icon: PropTypes.node,
  deleteIcon: PropTypes.node,
  text: PropTypes.any,
  color: PropTypes.oneOf(["success", "info", "warning", "error"]),
  options: PropTypes.array,
  onClick: PropTypes.func,
};

export default BadgeWithArrow;
