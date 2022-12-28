import { useContext, useCallback, useMemo, useState } from "react";
import PropTypes from "prop-types";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import ErrorIcon from "@mui/icons-material/Error";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { makeStyles } from "@mui/styles";

import { FormContext } from "./FormContext";
import Typography from "../../components/atoms/typography";
import { Grid } from "@mui/material";
import { useTheme } from "@emotion/react";

const useStyles = makeStyles((theme) => {
  return {
    errors: {
      display: "flex",
      flexDirection: "column",
    },
    message: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      padding: theme.spacing(0.5, 0),
    },
    text: {
      marginLeft: "5px !important",
      fontSize: "11px !important",
    },
  };
});

const FormField = ({ name, label, Field, type = "text", options = [], ...rest }) => {
  const styles = useStyles();
  const theme = useTheme();
  const [showPassword, setShowPassword] = useState(false);
  const { formState, onChange } = useContext(FormContext);
  const handleOnChange = useCallback(({ value, name }) => {
    onChange({ value, name });
  });

  const touched = useMemo(() => {
    return formState.touched[name];
  }, [formState]);

  const error = useMemo(() => {
    if (!touched) {
      return null;
    }

    if (formState.visible) {
      return formState.errors[name].filter((err) => !err.valid).length !== 0;
    }

    return !!formState.errors[name];
  }, [formState.errors, formState.visible]);

  const errorMessage = useMemo(() => {
    if (!touched && !formState.visible) {
      return null;
    }
    const fieldErrors = formState.errors[name];

    if (fieldErrors || (fieldErrors && formState.visible)) {
      return (
        <span>
          <Grid className={styles.errors} component="span" container rowSpacing={0}>
            {fieldErrors.map((err, i) => {
              const primaryColor = formState.visible
                ? err.valid
                  ? theme.palette.success.dark
                  : theme.palette.error.dark
                : "error";
              const color = !touched ? theme.palette.grey[700] : primaryColor;
              return (
                <Grid component="span" item key={i} md={6} sm={12} xs={12}>
                  <span className={styles.message}>
                    {formState.visible ? (
                      err.valid ? (
                        <CheckCircleIcon color="success" fontSize="small" />
                      ) : (
                        <ErrorIcon color={color} fontSize="small" />
                      )
                    ) : (
                      <ErrorIcon color="error" fontSize="small" />
                    )}

                    <Typography
                      className={styles.text}
                      color={color}
                      component="span"
                      text={formState.visible ? err.message : err}
                      variant="body1"
                    />
                  </span>
                </Grid>
              );
            })}
          </Grid>
        </span>
      );
    }

    return null;
  }, [formState.errors, formState.visible, touched]);

  const handleOnShowPassword = useCallback(() => {
    setShowPassword((showPassword) => !showPassword);
  });

  const icon = useMemo(() => {
    if (type !== "password") {
      return null;
    }
    if (showPassword) {
      return <VisibilityOffIcon color="primary" onClick={handleOnShowPassword} />;
    } else {
      return <VisibilityIcon color="primary" onClick={handleOnShowPassword} />;
    }
  }, [type, showPassword]);

  if (type === "radio-button-select") {
    return (
      <Field
        label={label}
        name={name}
        onChange={handleOnChange}
        options={options}
        value={formState.values[name]}
        {...rest}
      />
    );
  }

  if (type === "counter") {
    return (
      <Field
        label={label}
        name={name}
        onChange={handleOnChange}
        value={formState.values[name]}
        {...rest}
      />
    );
  }

  if (type === "assign") {
    return (
      <Field
        label={label}
        name={name}
        onChange={handleOnChange}
        options={options}
        selectedOptions={[]}
        {...rest}
      />
    );
  }

  if (type === "select") {
    return (
      <Field
        error={error}
        errorMessage={errorMessage}
        label={label}
        name={name}
        onChange={handleOnChange}
        options={options}
        value={formState.values[name]}
        {...rest}
      />
    );
  }

  if (type === "autocomplete") {
    return (
      <Field
        errorMessage={errorMessage}
        name={name}
        onChange={handleOnChange}
        options={options}
        value={formState.values[name]}
        {...rest}
      />
    );
  }

  return (
    <Field
      error={error}
      errorMessage={errorMessage}
      icon={icon}
      iconPosition="end"
      label={label}
      name={name}
      onChange={handleOnChange}
      type={showPassword ? "text" : type}
      value={formState.values[name]}
      {...rest}
    />
  );
};

FormField.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  type: PropTypes.string.isRequired,
  options: PropTypes.array,
  Field: PropTypes.elementType,
};

export default FormField;
