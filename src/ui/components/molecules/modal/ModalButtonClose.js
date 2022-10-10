import PropTypes from "prop-types";
import { makeStyles } from "@mui/styles";
import IconButton from "ui/components/atoms/icon-button";
import CloseIcon from "@mui/icons-material/Close";

const useStyles = makeStyles({
  btnClose: {
    position: "absolute",
    top: 20,
    right: 20,
  },
});

const ModalButtonClose = ({ onClose }) => {
  const styles = useStyles();
  return (
    <div className={styles.btnClose}>
      <IconButton color="primary" variant="text">
        <CloseIcon onClick={onClose} />
      </IconButton>
    </div>
  );
};

ModalButtonClose.propTypes = {
  onClose: PropTypes.func,
};

export default ModalButtonClose;
