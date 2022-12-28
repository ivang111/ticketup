import { useContext, useMemo } from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@mui/styles";

import { FormContext } from "./FormContext";
import { isEmpty } from "../../helpers";

const useStyles = makeStyles(() => {
  return {
    root: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    button: {
      width: 200,
      borderRadius: "50px !important",
    },
  };
});

const FormSubmit = ({ text, Button, disabled, ...rest }) => {
  const styles = useStyles();

  const { formState } = useContext(FormContext);
  const isDisabled = useMemo(() => {
    if (formState.visible) {
      let list = [];
      Object.keys(formState.errors).forEach((error) => {
        list.push(...formState.errors[error].filter((err) => !err.valid));
      });
      return list.length !== 0;
    } else {
      return !isEmpty(formState.errors) || isEmpty(formState.touched) || disabled;
    }
  }, [formState]);
  return (
    <div className={styles.root}>
      <Button
        className={styles.button}
        disabled={isDisabled}
        text={text}
        type="submit"
        {...rest}
      />
    </div>
  );
};

FormSubmit.propTypes = {
  text: PropTypes.string,
  Button: PropTypes.elementType,
  disabled: PropTypes.bool,
};

export default FormSubmit;
