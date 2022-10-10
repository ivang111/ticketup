/* eslint-disable react/jsx-no-bind */
import { useCallback, useEffect, useMemo, useState } from "react";
import PropTypes from "prop-types";
import { v4 as uuid } from "uuid";

import { makeStyles } from "@mui/styles";
import ClearIcon from "@mui/icons-material/Clear";

import DoneIcon from "@mui/icons-material/Done";
import Button from "ui/components/atoms/button";
import Icon from "ui/components/atoms/icon";
import Textfield from "ui/components/atoms/textfield";
import DatePicker from "ui/components/atoms/date-picker";
import { FORMATS, format } from "frameworks/dates";
import { useTranslation } from "frameworks/translation";

const useStyles = makeStyles((theme) => {
  return {
    root: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      padding: theme.spacing(1, 0),
    },
    filterList: {
      display: "flex",
      flexDirection: "column",
      padding: "4px 0px",
      backgroundColor: "white",
      boxShadow: theme.shadows[3],
      borderRadius: "4px",
      position: "absolute",
      zIndex: 1000,
      width: 250,
      top: 60,
    },
    ul: {
      width: "100%",
      boxSizing: "border-box",
      display: "flex",
      flexDirection: "column",
    },
    li: {
      fontWeight: "400",
      fontSize: "10px",
      lineHeight: "15px",
      color: theme.palette.grey[950],
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "5px 12px",
      cursor: "pointer",
      position: "relative",
    },
    addFilterBtn: {
      display: "flex",
      alignItems: "center",
      borderRadius: "3px",
      background: `${theme.palette.primary.paper} !important`,
      padding: "7px 9px !important",
      color: `${theme.palette.background.dark} !important`,
      border: `1px solid ${theme.palette.primary.dark} !important`,
    },
    activeFilters: {
      display: "flex",
      padding: theme.spacing(0.5, 1),
    },
    activeFilter: {
      display: "flex",
      padding: theme.spacing(1, 2),
      alignItems: "center",
      justifyContent: "center",
      borderRadius: 40,
      fontSize: 13,
      color: theme.palette.grey[800],
      backgroundColor: theme.palette.grey[100],
    },
    activeFilterText: {
      flexGrow: 1,
      padding: theme.spacing(0, 1),
    },
    filterInput: {
      left: "255px",
      position: "absolute",
      width: "208px",
      background: "white",
    },
    removeActiveIcon: {
      cursor: "pointer",
      borderRadius: "100%",
      "&:hover": {
        backgroundColor: theme.palette.grey[200],
      },
    },
    btn: {
      flexGrow: 1,
    },
  };
});

const defaultOnFilterChange = () => {};

const DataTableFilter = ({ columns, onFilterChange = defaultOnFilterChange }) => {
  const { t } = useTranslation("common");
  const styles = useStyles();
  const [filters, setFilters] = useState([]);
  const [showFilters, setShowFilters] = useState(false);

  useEffect(() => {
    setFilters(
      columns
        .filter((column) => !column.noFilter)
        .map((column) => {
          return {
            name: column.name,
            title: column.title,
            type: column.type,
            active: false,
            showInput: false,
            value: "",
          };
        })
    );
  }, [columns]);

  useEffect(() => {
    onFilterChange(filters.filter((f) => f.active));
  }, [filters]);

  const handleShowFilters = useCallback(() => setShowFilters(!showFilters));

  const handleClearFilter = useCallback((filter) => {
    const newFilters = [...filters];
    const index = newFilters.findIndex((f) => f.name === filter.name);
    newFilters[index] = { ...filter, active: false, value: "" };
    setFilters(newFilters);
  });

  const handleSetFilter = useCallback((filter) => {
    const newFilters = [...filters];
    const index = newFilters.findIndex((f) => f.name === filter.name);
    newFilters[index] = { ...filter, active: true, showInput: false };
    setFilters(newFilters);
  });

  const handleToggleInput = useCallback((filter) => {
    const newFilters = [...filters];
    const index = newFilters.findIndex((f) => f.name === filter.name);
    newFilters[index] = { ...filter, showInput: !filter.showInput };
    setFilters(newFilters);
  });

  const handleOnChangeFilter = useCallback((filter, value) => {
    const newFilters = [...filters];
    const index = newFilters.findIndex((f) => f.name === filter.name);
    newFilters[index] = { ...filter, value };
    setFilters(newFilters);
  });

  const renderedActiveFilters = useMemo(() => {
    return filters
      .filter((filter) => filter.active)
      .map((filter) => {
        return (
          <div className={styles.activeFilter} key={uuid()}>
            <span className={styles.activeFilterText}>
              {filter.title}: {filter.value}{" "}
            </span>
            <ClearIcon
              className={styles.removeActiveIcon}
              fontSize="small"
              onClick={() => handleClearFilter(filter)}
            />
          </div>
        );
      });
  }, [filters]);

  const renderedFilters = useMemo(() => {
    if (!showFilters) {
      return null;
    }

    return (
      <div className={styles.ul}>
        {filters.map((filter) => {
          return (
            <li className={styles.li} key={filter.name}>
              <Button
                className={styles.btn}
                onClick={() => handleToggleInput(filter)}
                text={filter.title}
                variant="text"
              />
              {filter.active ? <DoneIcon fontSize="inherit" /> : <Icon.ChevronLeft />}
              {filter.showInput && (
                <div className={styles.filterInput}>
                  {filter.type !== "date" && (
                    <Textfield
                      onChange={({ value }) => handleOnChangeFilter(filter, value)}
                      onKeyPress={(event) => {
                        if (event.key === "Enter") {
                          handleSetFilter(filter);
                        }
                      }}
                      value={filter.value}
                    />
                  )}
                  {filter.type === "date" && (
                    <DatePicker
                      isStatic
                      onAccept={() => {
                        handleSetFilter(filter);
                      }}
                      onChange={({ value }) => {
                        handleOnChangeFilter(filter, format(value, FORMATS.default));
                      }}
                      value={filter.value}
                    />
                  )}
                </div>
              )}
            </li>
          );
        })}
      </div>
    );
  }, [filters, showFilters]);

  return (
    <div className={styles.root}>
      <Button
        className={styles.addFilterBtn}
        onClick={handleShowFilters}
        startIcon={<Icon.PlusBlue />}
        text={t("table.add-filter")}
      />
      {showFilters && <div className={styles.filterList}>{renderedFilters}</div>}
      <div className={styles.activeFilters}>{renderedActiveFilters}</div>
    </div>
  );
};

DataTableFilter.propTypes = {
  columns: PropTypes.array,
  onFilterChange: PropTypes.func,
};

export default DataTableFilter;
