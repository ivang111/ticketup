import PropTypes from "prop-types";
import clsx from "clsx";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(() => {
  return {
    form: {},
  };
});

const FormContainer = ({ handleSubmit, children }) => {
  const styles = useStyles();

  return (
    <form className={clsx(styles.form)} onSubmit={handleSubmit}>
      {children}
    </form>
  );
};

FormContainer.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

export default FormContainer;
