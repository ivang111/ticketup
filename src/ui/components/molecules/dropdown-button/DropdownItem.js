import PropTypes from "prop-types";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => {
  return {
    root: {
      "&:hover": {
        backgroundColor: theme.palette.primary.paler,
      },
      cursor: "pointer",
      padding: "8px 16px",
    },
  };
});
const DropdownItem = ({ children }) => {
  const styles = useStyles();
  return <div className={styles.root}>{children}</div>;
};

DropdownItem.propTypes = {
  children: PropTypes.node,
};
export default DropdownItem;
