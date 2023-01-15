/* eslint-disable indent */
import { useCallback, useState } from "react";
import { useTranslation } from "react-i18next";
import { makeStyles } from "@mui/styles";
import FormManager from "../form-manager";
import Typography from "../../components/atoms/typography";
import TextField from "../../components/atoms/textfield";
import Button from "../../components/atoms/button";
import { useNavigate } from "react-router-dom";
import { routes } from "../../helpers";
import Alert from "../../components/molecules/alert";

const useStyles = makeStyles((theme) => {
  return {
    form: {},
    title: {
      textAlign: "center",
      marginBottom: `${theme.spacing(2)} !important`,
    },
    body: {},
    fieldContainer: {
      textAlign: "left",
    },
    field: {
      margin: `${theme.spacing(1, 0)} !important`,
    },
    label: {
      color: theme.palette.grey[600],
    },
    submitContainer: {
      display: "flex",
      alignItems: "center",
    },
    conteinerlinks: {
      display: "inline-flex",
      justifyContent: "center",
      marginTop: theme.spacing(1),
    },
    typographyLink: {
      color: theme.palette.primary.main,
      margin: `${theme.spacing(0, 0.5)} !important`,
    },
    login: {
      textAlign: "center",
    },
    conteinerBotton: {
      display: "inline-flex",
      justifyContent: "center",
      marginTop: theme.spacing(3),
      borderTop: 1,
      borderColor: "grey.500",
      padding: theme.spacing(0),
    },
    foot: {
      borderTopStyle: "solid",
      borderTopWidth: 1,
      borderTopColor: theme.palette.grey[200],
      width: "100%",
      display: "flex",
      justifyContent: "center",
    },
    submit: {
      width: "100%",
    },
  };
});

const SignUpForm = () => {
  const styles = useStyles();
  const { t } = useTranslation("singUP");
  const navigate = useNavigate();
  const valores = window.location.search;
  const urlParams = new URLSearchParams(valores);
  const invitationType = urlParams.get("invitationType");
  const [alert, setAlert] = useState({ show: false, text: "", severity: "error" });

  let email = "emailtest@test.com";

  const [formState, setFormState] = useState({
    values: {
      firstName: "",
      lastName: "",
      email: email,
      password: "",
      confirmPassword: "",
    },
    errors: {},
    validators: {
      firstName: {
        presence: {
          allowEmpty: false,
          message: t("validation.required"),
        },
      },
      lastName: {
        presence: {
          allowEmpty: false,
          message: t("validation.required"),
        },
      },
      ...(invitationType
        ? {
            email: {
              presence: {
                allowEmpty: true,
              },
            },
          }
        : {
            email: {
              presence: {
                allowEmpty: false,
                message: t("validation.required"),
              },
              email: {
                message: invitationType ? "" : t("validation.valid-email"),
              },
            },
          }),
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
  });

  const handleOnClickLogin = useCallback(() => {
    navigate(routes.login.path, { replace: true });
  });

  const onSubmit = useCallback(async () => {
    // delete data.confirmPassword;
    // setLoading(true);
    // const response = await signUp({
    //   ...data,
    //   email: invitationsVolunteers.email
    //     ? invitationsVolunteers.email.replace("\n", "").trim()
    //     : invitationsPartners.email
    //     ? invitationsPartners.email.replace("\n", "").trim()
    //     : data.email.trim(),
    //   invitationId: invitationId,
    //   invitationType: invitationType,
    // });
    // if (!response.error) {
    //   setAlert({ show: true, text: t("alert.success"), severity: "success" });
    //   setLoading(false);
    // } else {
    //   if (response.code === 409) {
    //     setAlert({
    //       show: true,
    //       text: t("alert.warning-exists"),
    //       severity: "warning",
    //     });
    //   } else {
    //     if (response.code === 401) {
    //       setAlert({
    //         show: true,
    //         text: t("alert.warning-expired"),
    //         severity: "warning",
    //       });
    //     } else {
    //       setAlert({ show: true, text: t("alert.error"), severity: "error" });
    //     }
    //   }
    // }
    // setLoading(false);
  });

  const handleOnClose = useCallback(() => {
    setAlert({ show: false, text: "", severity: "error" });
  });

  return (
    <>
      <FormManager
        className={styles.form}
        initialState={formState}
        onChange={setFormState}
        onSubmit={onSubmit}
      >
        <Typography
          className={styles.title}
          fontWeight="fontWeightBold"
          text={t("singup.title")}
          variant="h3"
        />
        <FormManager.FormControl className={styles.fieldContainer}>
          <Typography className={styles.label} text={t("singup.name")} variant="body1" />
          <FormManager.FormField
            Field={TextField}
            className={styles.field}
            name="firstName"
            placeholder={t("singup.placeholderName")}
            size="small"
            type="text"
          />
        </FormManager.FormControl>
        <FormManager.FormControl className={styles.fieldContainer}>
          <Typography className={styles.label} text={t("singup.lastName")} variant="body1" />
          <FormManager.FormField
            Field={TextField}
            className={styles.field}
            name="lastName"
            placeholder={t("singup.placeholderLastName")}
            size="small"
            type="text"
          />
        </FormManager.FormControl>
        <FormManager.FormControl className={styles.fieldContainer}>
          <Typography className={styles.label} text={t("singup.email")} variant="body1" />
          <FormManager.FormField
            Field={TextField}
            className={styles.field}
            name="email"
            placeholder={email}
            size="small"
            type="email"
            value={email}
          />
        </FormManager.FormControl>
        <FormManager.FormControl className={styles.fieldContainer}>
          <Typography className={styles.label} text={t("singup.password")} variant="body1" />
          <FormManager.FormField
            Field={TextField}
            className={styles.field}
            name="password"
            placeholder={t("singup.placeholderPassword")}
            size="small"
            type="password"
          />
        </FormManager.FormControl>
        <FormManager.FormControl className={styles.fieldContainer}>
          <Typography className={styles.label} text={t("singup.repetPassword")} variant="body1" />
          <FormManager.FormField
            Field={TextField}
            className={styles.field}
            name="confirmPassword"
            placeholder={t("singup.placeholderrepetPassword")}
            size="small"
            type="password"
          />
        </FormManager.FormControl>
        <FormManager.FormControl className={styles.submitContainer}>
          <FormManager.FormSubmit
            Button={Button}
            className={styles.submit}
            text={t("singup.submit")}
            variant="contained"
          />
        </FormManager.FormControl>
        <FormManager.FormControl>
          <Typography
            className={styles.login}
            text={
              <>
                {t("singup.haveAcount")}
                <Button onClick={handleOnClickLogin} text={t("singup.login")} />
              </>
            }
            variant="body1"
          />
        </FormManager.FormControl>
        <Typography component="span" text={t("singup.termsInfo")} variant="body2" />
        <Typography
          className={styles.typographyLink}
          component="span"
          text={t("singup.terms")}
          variant="body2"
        />
        <Typography component="span" text={t("singup.and")} variant="body2" />
        <Typography
          className={styles.typographyLink}
          component="span"
          text={t("singup.privacy")}
          variant="body2"
        />
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
export default SignUpForm;
