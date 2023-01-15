import { makeStyles } from "@mui/styles";
import { useCallback, useState } from "react";
import clsx from "clsx";
import { useTranslation } from "react-i18next";
import FormManager from "../../modules/form-manager";
import TextField from "../../components/atoms/textfield";
import Button from "../../components/atoms/button";
import Typography from "../../components/atoms/typography";
import Alert from "../../components/molecules/alert";
import { useNavigate } from "react-router-dom";
import { routes } from "../../helpers";

const useStyles = makeStyles((theme) => {
  return {
    root: {
      width: "80%",
    },
    title: {
      fontWeight: "700 !important",
      fontSize: "22px !important",
      color: theme.palette.grey[700],
      lineHeight: "136% !important",
      margin: "8px 0 !important",
    },
    label: {
      fontWeight: "400 !important",
      color: theme.palette.grey[600],
      lineHeight: "18px !important",
      marginBottom: "10px !important",
    },
    form: {
      display: "flex",
      justifyContent: "center",
      flexDirection: "column",
      paddingLeft: "13px",
      width: "100%",
    },
    emailContainer: {
      display: "flex",
      width: "100%",
      padding: "11px 0",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: `${theme.palette.background.default}`,
      marginBottom: "30px",
    },
    email: {
      fontWeight: "400 !important",
      color: `${theme.palette.grey["600"]}`,
      lineHeight: "18px !important",
    },
  };
});

//TODO: email and user information should be obtained with a temporal authorization token.
//TODO: in order to update the user data password
const NewPasswordForm = () => {
  const styles = useStyles();
  const navigate = useNavigate();
  //   const { search } = useLocation();
  //   const id = search.replace("?id=", "");
  const { t } = useTranslation("forgotPassword");
  const [alert, setAlert] = useState({ show: false, text: "", severity: "error" });

  const formState = {
    values: {
      password: "",
      confirmPassword: "",
    },
    errors: {},
    validators: {
      password: {
        presence: {
          allowEmpty: false,
          message: t("validation.required"),
        },
        length: {
          minimum: 8,
          message: t("validation.valid-password-length"),
        },
        haveNumber: {
          message: t("validation.valid-password-number"),
        },
        haveSpecialChar: {
          message: t("validation.valid-password-special-char"),
        },
        haveUppercase: {
          message: t("validation.valid-password-uppercase"),
        },
      },
      confirmPassword: {
        presence: {
          allowEmpty: false,
          message: t("validation.required"),
        },
        equality: {
          message: t("validation.valid-password-same"),
          attribute: "password",
          comparator: (v1, v2) => {
            return v1 !== "" && v2 !== "" && v1 === v2;
          },
        },
      },
    },
    touched: {},
  };

  const onSubmit = useCallback(async () => {
    // const response = await resetPassword({
    //   password: data.password,
    //   id,
    // });
    // if (!response.error) {
    //   setAlert({ show: true, text: "Password changed!", severity: "success" });
    // } else {
    //   if (response.code === 428) {
    //     setAlert({ show: true, text: "The link is invalid", severity: "warning" });
    //   } else {
    //     setAlert({ show: true, text: "An error has occurred", severity: "error" });
    //   }
    // }
  });

  const handleOnClose = useCallback(() => {
    setAlert({ show: false, text: "" });
    if (alert.severity === "warning") {
      navigate(routes.passwordExpired.path, { replace: true });
    }
    if (alert.severity === "success") {
      navigate(routes.login.path, { replace: true });
    }
  });

  return (
    <div className={styles.root}>
      <FormManager initialState={formState} onSubmit={onSubmit}>
        <div className={styles.form}>
          <Typography className={styles.title} text={t("choose-new-password")} variant="h3" />

          <FormManager.FormControl>
            <Typography className={styles.label} text={t("password")} variant="body" />
            <FormManager.FormField
              Field={TextField}
              name="password"
              placeholder={t("password-placeholder")}
              type="password"
            />
          </FormManager.FormControl>

          <FormManager.FormControl>
            <Typography
              className={clsx(styles.label, styles.mt30)}
              text={t("confirm-password")}
              variant="body"
            />
            <FormManager.FormField
              Field={TextField}
              name="confirmPassword"
              placeholder={t("confirm-password-placeholder")}
              type="password"
            />
          </FormManager.FormControl>

          <FormManager.FormSubmit
            Button={Button}
            className={styles.button}
            text={t("change-password")}
            variant="contained"
          />
        </div>
      </FormManager>
      <Alert
        floating
        onClose={handleOnClose}
        severity={alert.severity}
        show={alert.show}
        text={alert.text}
        timeout={5}
      />
    </div>
  );
};

export default NewPasswordForm;
