import { makeStyles } from "@mui/styles";
import { useCallback, useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import FormManager from "../form-manager";
import TextField from "../../components/atoms/textfield";
import Button from "../../components/atoms/button";
import mail from "../../components/atoms/icon/svgs/mail.svg";
import Typography from "../../components/atoms/typography";
import Alert from "../../components/molecules/alert";
import { routes } from "../../helpers";
import { useNavigate } from "react-router-dom";

const useStyles = makeStyles((theme) => {
  return {
    img: {
      width: "75px",
      margin: `${theme.spacing(0, "auto", 0, "auto")} !important`,
    },
    form: {
      display: "flex",
      justifyContent: "center",
      flexDirection: "column",
      width: "80%",
      paddingLeft: "30px",
    },
    title: {
      color: theme.palette.grey[700],
      margin: `${theme.spacing(0, "auto", 1, "auto")} !important`,
      textAlign: "center",
    },
    subtitle: {
      color: theme.palette.grey[700],
      margin: `${theme.spacing(0, "auto", 5, "auto")} !important`,
      width: "95%",
    },
    label: {
      color: theme.palette.grey[600],
      marginBottom: "10px !important",
    },
    remember: {
      color: theme.palette.grey[600],
      textAlign: "center",
      marginTop: "50px !important",
    },
    link: {
      lineHeight: "18px",
      color: `${theme.palette.primary.main}`,
      marginLeft: "3px",
    },
    buttonContainer: {
      display: "flex",
      justifyContent: "center",
    },
    button: {
      margin: `${theme.spacing(1, 2, 0, 2)} !important`,
    },
  };
});

const ForgotPasswordForm = () => {
  const styles = useStyles();
  const { t } = useTranslation("forgotPassword");
  const [alert, setAlert] = useState({ show: false, text: "", severity: "error" });
  const navigate = useNavigate();

  const values = useMemo(() => {
    return {
      values: {
        email: "",
      },
      errors: {},
      validators: {
        email: {
          presence: {
            allowEmpty: false,
            message: t("validation.required"),
          },
          email: {
            message: t("validation.valid-email"),
          },
        },
      },
      touched: {},
    };
  }, []);
  const data = {
    email: "mailtest@test.com",
  };
  const onSubmit = useCallback(async () => {
    // const response = await forgotPassword(data);
    // if (response.exists) {
    // } else {
    //   setAlert({ show: true, text: "This email address does not exist!", severity: "error" });
    // }
    navigate(routes.forgotPasswordIntructions.path, {
      replace: true,
      state: { email: data.email },
    });
  });
  const handleOnClickLogin = useCallback(() => {
    navigate(routes.login.path, { replace: true });
  });
  const handleOnClose = useCallback(() => {
    setAlert({ show: false, text: "" });
  });

  return (
    <>
      <FormManager initialState={values} onSubmit={onSubmit}>
        <div className={styles.form}>
          <img className={styles.img} src={mail} />
          <FormManager.FormControl>
            <Typography className={styles.title} text={t("title")} variant="h3" />
            <Typography className={styles.subtitle} text={t("subtitle")} variant="body" />
            <Typography className={styles.label} text={t("email")} variant="body" />
            <FormManager.FormField
              Field={TextField}
              className={styles.field}
              name="email"
              placeholder={t("email-placeholder")}
              type="email"
            />
            <Typography
              className={styles.remember}
              text={
                <>
                  {t("remember-password")}
                  <Button onClick={handleOnClickLogin} text={t("login")} />
                </>
              }
            />
          </FormManager.FormControl>

          <FormManager.FormSubmit
            Button={Button}
            className={styles.button}
            text={t("recover-password")}
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
    </>
  );
};

export default ForgotPasswordForm;
