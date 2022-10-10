import { useCallback } from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@mui/styles";
import clsx from "clsx";
import Icon from "../icon";

const useStyles = makeStyles((theme) => {
  return {
    root: {
      borderRadius: "40px",
      background: theme.palette.background.default,
      padding: "8px",
      display: "flex",
      gap: "5px",
      alignItems: "center",
      width: "100%",
    },
    input: {
      border: "none",
      outline: "none",
      background: theme.palette.background.default,
    },
  };
});

const defaultOnChange = () => {};

const SearchInput = ({
  className,
  classNameRoot,
  name,
  id,
  value,
  onChange = defaultOnChange,
  placeholder,
  disabled = false,
}) => {
  const styles = useStyles();
  const handleOnChange = useCallback((event) => {
    onChange({ name, value: event.target.value });
  });

  return (
    <div className={clsx(classNameRoot, styles.root)}>
      <Icon.Search />
      <input
        className={clsx(className, styles.input)}
        disabled={disabled}
        id={id}
        onChange={handleOnChange}
        placeholder={placeholder}
        value={value}
      />
    </div>
  );
};

SearchInput.propTypes = {
  className: PropTypes.string,
  classNameRoot: PropTypes.string,
  name: PropTypes.string,
  disabled: PropTypes.bool,
  id: PropTypes.string,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
};

export default SearchInput;
