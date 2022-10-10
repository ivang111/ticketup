import { useCallback, useMemo, useState } from "react";
import { v4 as uuid } from "uuid";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Stack,
  TableSortLabel,
} from "@mui/material";
import { visuallyHidden } from "@mui/utils";
import { makeStyles } from "@mui/styles";
import { Box } from "@mui/system";
import clsx from "clsx";
import PropTypes from "prop-types";
import Pagination from "ui/components/atoms/pagination";
import { getComparator, stableSort } from "./helpers";
import DataTableFilter from "./DataTableFilter";
import Typography from "ui/components/atoms/typography";

const useStyles = makeStyles(() => {
  return {
    root: {
      minWidth: 650,
    },
    foot: {
      display: "flex",
      flexDirection: "row-reverse",
      padding: 25,
    },
    emptyText: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      paddingTop: 15,
    },
  };
});

const DataTable = ({
  data = [],
  columns = [],
  pagination = true,
  pageLimit,
  ariaLabel,
  className,
  orderByColumn = "",
  emptyText,
  showFilters = true,
}) => {
  const styles = useStyles();
  const [currentPage, setCurrentPage] = useState(1);
  const [orderBy, setOrderBy] = useState(orderByColumn);
  const [order, setOrder] = useState("asc");
  const [filters, setFilters] = useState([]);

  const filteredData = useMemo(() => {
    if (filters.length === 0) {
      return data;
    }

    return data.filter((item) => {
      let hasElement = false;

      filters.forEach((filter) => {
        if (item[filter.name].toString().toLowerCase().includes(filter.value.toLowerCase())) {
          hasElement = true;
        }
      });
      return hasElement;
    });
  });

  const handleOnPageChange = useCallback((page) => {
    setCurrentPage(page);
  });

  const handleRequestSort = useCallback(
    (property) => () => {
      const isAsc = orderBy === property && order === "asc";
      setOrder(isAsc ? "desc" : "asc");
      setOrderBy(property);
    },
    [orderBy, order]
  );
  const body = useMemo(() => {
    const offset = (currentPage - 1) * pageLimit;
    return stableSort(filteredData, getComparator(order, orderBy))
      .slice(offset, offset + pageLimit)
      .map((row, index) => {
        return (
          <TableRow key={uuid()}>
            {columns.map((column) => {
              return (
                <TableCell className={styles.tableCell} key={uuid()}>
                  {column.render({ row, index: index + offset, column })}
                </TableCell>
              );
            })}
          </TableRow>
        );
      });
  }, [filteredData, columns, pagination, pageLimit, currentPage, order, orderBy]);

  const head = useMemo(() => {
    return columns.map((column) => (
      <TableCell key={uuid()} sortDirection={orderBy === column.name ? order : false}>
        <TableSortLabel
          active={orderBy === column.name}
          direction={orderBy === column.name ? order : "asc"}
          onClick={handleRequestSort(column.name)}
        >
          <Typography
            className={styles.cardHeaderTitle}
            fontWeight="fontWeightBold"
            text={column.title}
            variant="body1"
          />
          {orderBy === column.name ? (
            <Box component="span" sx={visuallyHidden}>
              {order === "desc" ? "sorted descending" : "sorted ascending"}
            </Box>
          ) : null}
        </TableSortLabel>
      </TableCell>
    ));
  }, [columns, orderBy, order]);

  const pages = useMemo(() => {
    if (!pagination) {
      return null;
    }

    return (
      <Stack>
        <Pagination
          count={Math.ceil(filteredData.length / pageLimit)}
          currentPage={currentPage}
          onChange={handleOnPageChange}
        />
      </Stack>
    );
  }, [pagination, currentPage, filteredData, pageLimit]);

  return (
    <Box>
      {showFilters && <DataTableFilter columns={columns} onFilterChange={setFilters} />}
      <TableContainer component={Paper}>
        <Table aria-label={ariaLabel} className={clsx(styles.root, className)}>
          <TableHead>
            <TableRow>{head}</TableRow>
          </TableHead>
          <TableBody>{body}</TableBody>
        </Table>
        {filteredData.length === 0 && <div className={styles.emptyText}>{emptyText}</div>}
        <Box className={styles.foot}>{pages}</Box>
      </TableContainer>
    </Box>
  );
};
DataTable.propTypes = {
  data: PropTypes.array,
  columns: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      title: PropTypes.string,
      render: PropTypes.func,
      type: PropTypes.string,
    })
  ),
  pagination: PropTypes.bool,
  pageLimit: PropTypes.number,
  ariaLabel: PropTypes.node,
  className: PropTypes.string,
  orderByColumn: PropTypes.string,
  emptyText: PropTypes.string,
  showFilters: PropTypes.bool,
};

export default DataTable;
