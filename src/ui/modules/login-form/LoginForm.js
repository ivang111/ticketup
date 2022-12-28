import { useMemo, useCallback, useState } from "react";
import { useTranslation } from "../../../frameworks/translation";
import Button from "../../components/atoms/button";
import { makeStyles } from "@mui/styles";
import FormManager from "../form-manager";
import TextField from "../../components/atoms/textfield";
import Typography from "../../components/atoms/typography";
// import { useNavigate } from "react-router-dom";
// import { routes } from "../../helpers";
import Alert from "../../components/molecules/alert";
//import Progress from "../../components/atoms/progress";

const useStyles = makeStyles((theme) => {
  return {
    root: {
      minWidth: `${theme.spacing(40)} !important`,
      color: theme.palette.info.main,
    },
    title: {
      marginBottom: `${theme.spacing(5)} !important`,
    },
    field: {
      margin: `${theme.spacing(1, 0)} !important`,
    },
    label: {
      color: theme.palette.grey[700],
    },
    formContainer: {
      flexDirection: "column",
      justifyContent: "center",
    },
    submitContainer: {
      display: "flex",
      flexDirection: "column",
      marginTop: 5,
    },
    typography: {
      color: theme.palette.info.main,
    },
    textForgot: {
      justifyContent: "left !important",
      marginBottom: "20px !important",
      marginTop: "5px !important",
      textDecoration: "underline",
      cursor: "pointer",
      color: theme.palette.primary.main,
      width: "fit-content",
    },
  };
});

const LoginForm = () => {
  const styles = useStyles();
  const { t } = useTranslation("login");
  //const navigate = useNavigate();
  const [alert, setAlert] = useState({ show: false, text: "" });
  // const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    values: {
      username: "",
      password: "",
    },
    errors: {},
    validators: {
      username: {
        presence: {
          allowEmpty: false,
          message: t("validation.required"),
        },
        email: {
          message: t("validation.valid-email"),
        },
      },
      password: {
        presence: {
          allowEmpty: false,
          message: t("validation.required"),
        },
      },
    },
    touched: {},
  });

  const handleOnClose = useCallback(() => {
    setAlert({ show: false, text: "" });
  });
  const handleOnClickForgetPassword = useCallback(() => {
    //navigate(routes.forgotPassword.path);
  });

  const form = useMemo(() => {
    // if (loading) {
    //   return <Progress show={true} />;
    // }

    return (
      <FormManager initialState={formData} onChange={setFormData}>
        <FormManager.FormControl>
          <Typography
            className={styles.title}
            fontWeight="fontWeightBold"
            text={t("form.welcome")}
            variant="h3"
          />
        </FormManager.FormControl>
        <FormManager.FormControl>
          <Typography className={styles.label} text={t("form.email")} variant="body" />
          <FormManager.FormField
            Field={TextField}
            className={styles.field}
            name="username"
            placeholder={t("form.enter-email")}
            type="text"
          />
        </FormManager.FormControl>
        <FormManager.FormControl>
          <Typography className={styles.label} text={t("form.password")} variant="body" />
          <FormManager.FormField
            Field={TextField}
            className={styles.field}
            name="password"
            placeholder={t("form.enter-password")}
            type="password"
          />
          <Typography
            className={styles.textForgot}
            onClick={handleOnClickForgetPassword}
            text={t("form.forget")}
          />
        </FormManager.FormControl>
        <FormManager.FormControl>
          <FormManager.FormSubmit
            Button={Button}
            className={styles.submit}
            text={t("form.submit")}
            variant="contained"
          />
        </FormManager.FormControl>
      </FormManager>
    );
  });

  return (
    <div className={styles.root}>
      {form}
      <Alert
        floating
        onClose={handleOnClose}
        severity="error"
        show={alert.show}
        text={alert.text}
        timeout={5}
      />
    </div>
  );
};

export default LoginForm;
