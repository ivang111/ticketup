import { useCallback, useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import { List } from "@mui/material";
import { makeStyles } from "@mui/styles";

import { useTranslation } from "frameworks/translation";
import Icon from "ui/components/atoms/icon";
import Typography from "ui/components/atoms/typography";
import Avatar from "ui/components/atoms/avatar";
import AvatarGroup from "../avatar-group";
import AssignItem from "./AssignItem";
import clsx from "clsx";

const useStyles = makeStyles((theme) => {
  return {
    root: {
      display: "flex",
      gap: "8px",
      alignItems: "center",
      marginTop: 2,
    },
    add: {
      position: "relative",
      cursor: "pointer",
      boxSizing: "border-box",
      display: "flex",
      flexDirection: "column",
    },
    optionsContainer: {
      borderRadius: "5px",
      boxShadow: "0px 12px 16px -4px rgba(0, 0, 0, 0.08)",
      background: theme.palette.background.paper,
      position: "absolute",
      display: "flex",
      flexDirection: "column",
      boxSizing: "border-box",
      zIndex: 1000,
    },
    bottom: {
      top: 40,
    },
    top: {
      bottom: 40,
    },
    options: {
      display: "flex",
      flexDirection: "column",
      width: "100%",
      boxSizing: "border-box",
    },

    optionLabel: {
      fontWeight: "400 !important",
      lineHeight: "10px !important",
    },
    optionImg: {
      width: "26px",
      height: "26px",
      borderRadius: "50%",
      objectFit: "cover",
    },
    searchContainer: {
      width: "100%",
      display: "flex",
      padding: "12px 30px",
      background: theme.palette.background.paper,
      alignItems: "center",
      gap: "10px",
      boxSizing: "border-box",
    },
    searchInput: {
      width: "100%",
      border: "none",
      outline: "none",
    },
    optionsSelectedContainer: {
      display: "flex",
    },
    optionSelectedImg: {
      width: "40px",
      height: "40px",
      borderRadius: "50%",
      objectFit: "cover",
      border: `1px solid ${theme.palette.background.paper}`,
      "&:not(:first-child)": {
        marginLeft: "-8px",
      },
    },
    circleWithCount: {
      width: "40px",
      height: "40px",
      borderRadius: "50%",
      border: `1px solid ${theme.palette.background.paper}`,
      fontWeight: "400",
      fontSize: "12px",
      lineHeight: "18px",
      color: theme.palette.background.paper,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      background: theme.palette.primary.dark,
      marginLeft: "-8px",
    },
    noFound: {
      width: "100%",
      display: "block",
      textAlign: "center",
      padding: theme.spacing(1, 0),
    },
  };
});

const defaultOnChange = () => {};

const AssignButton = ({
  options = [],
  name,
  onChange = defaultOnChange,
  emptyText,
  avatarSize = "sm",
  position = "top",
  selectedOptions = [],
}) => {
  const styles = useStyles();
  const ref = useRef();
  const { t } = useTranslation("common");
  const [showOptions, setShowOptions] = useState(false);
  const [optionsFiltered, setOptionsFiltered] = useState(options);
  const [optionsSelected, setOptionsSelected] = useState(selectedOptions);

  const handleShow = useCallback(() => {
    setShowOptions(!showOptions);
  });

  const handleSearch = useCallback((e) => {
    const filtered = options.filter((option) => {
      if (option.label.toLowerCase().includes(e.target.value.toLowerCase())) return option;
    });
    setOptionsFiltered(filtered);
  });

  const handleSelect = useCallback((option) => {
    if (!optionsSelected.find((opt) => opt.value === option.value)) {
      const optionsSelectedTmp = [...optionsSelected, option];
      setOptionsSelected(optionsSelectedTmp);
      onChange({ name, value: optionsSelectedTmp.map((opt) => opt.value) });
    } else {
      const index = optionsSelected.findIndex(
        (selectedOption) => selectedOption.value === option.value
      );
      const tmp = [...optionsSelected];
      tmp.splice(index, 1);
      setOptionsSelected(tmp);
      onChange({ name, value: tmp.map((opt) => opt.value) });
    }
  });

  useEffect(() => {
    let handler = (event) => {
      const { current } = ref;
      if (current && !current.contains(event.target)) {
        setShowOptions(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <div className={styles.root}>
      {optionsSelected !== [] && (
        <div className={styles.optionsSelectedContainer}>
          <AvatarGroup maxAvatars={5}>
            {optionsSelected.map((option) => {
              return (
                <Avatar
                  image={option.img}
                  key={`${option.value}-avt`}
                  letter={option.letter}
                  size={avatarSize}
                />
              );
            })}
          </AvatarGroup>
        </div>
      )}
      <div className={styles.add} ref={ref}>
        {showOptions && (
          <div className={clsx(styles.optionsContainer, styles[position])}>
            <div className={styles.searchContainer}>
              <Icon.Search />
              <input
                className={styles.searchInput}
                onChange={handleSearch}
                placeholder={t("search")}
              />
            </div>
            <div className={styles.options}>
              <List
                dense
                sx={{ width: "100%", width: 360, minWidth: 360, bgcolor: "background.paper" }}
              >
                {optionsFiltered.length === 0 && (
                  <Typography className={styles.noFound} text={emptyText} variant="body" />
                )}
                {optionsFiltered.map((option) => {
                  return (
                    <AssignItem
                      key={option.value}
                      onSelect={handleSelect}
                      option={option}
                      selected={!!optionsSelected.find((opt) => opt.value === option.value)}
                    />
                  );
                })}
              </List>
            </div>
          </div>
        )}
        <Icon.PlusCircleDotted onClick={handleShow} />
      </div>
    </div>
  );
};

AssignButton.propTypes = {
  options: PropTypes.array,
  selectedOptions: PropTypes.array,
  onChange: PropTypes.func,
  name: PropTypes.string,
  emptyText: PropTypes.string,
  avatarSize: PropTypes.oneOf(["sm", "md", "lg"]),
  position: PropTypes.oneOf(["bottom", "top"]),
};

export default AssignButton;
