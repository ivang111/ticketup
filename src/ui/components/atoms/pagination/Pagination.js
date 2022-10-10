import { useCallback } from "react";
import PropTypes from "prop-types";
import { Pagination as MuiPagination } from "@mui/material";

const defaultOnChange = () => {};
const Pagination = ({ onChange = defaultOnChange, currentPage, count }) => {
  const handleChange = useCallback((event, value) => {
    onChange(value);
  });
  return (
    <MuiPagination
      color="primary"
      count={count}
      onChange={handleChange}
      page={currentPage}
      shape="rounded"
    />
  );
};

Pagination.propTypes = {
  onChange: PropTypes.func,
  currentPage: PropTypes.number,
  count: PropTypes.number,
};
export default Pagination;
