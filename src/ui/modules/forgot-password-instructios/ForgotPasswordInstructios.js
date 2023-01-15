import { Trans, useTranslation } from "../../../frameworks/translation";
import { makeStyles } from "@mui/styles";
import { Box } from "@mui/system";
import { useCallback } from "react";
import { useNavigate, useLocation, Navigate } from "react-router-dom";
import Typography from "../../components/atoms/typography";
import { routes } from "../../helpers";

const useStyles = makeStyles((theme) => {
  return {
    Title: {
      color: theme.palette.grey[700],
    },
    texBox: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      width: 410,
      margin: theme.spacing(3, 0),
      padding: theme.spacing(3, 3),
      backgroundColor: theme.palette.grey[200],
    },
    text: {
      color: theme.palette.grey[800],
      marginBottom: `${theme.spacing(3)} !important`,
      lineHeight: 1.3,
    },
    typographyText: {
      color: theme.palette.grey[800],
      lineHeight: 1.3,
    },
    linkText: {
      color: theme.palette.primary.main,
      cursor: "pointer",
      marginRight: `${theme.spacing(1)} !important`,
      marginLeft: `${theme.spacing(1)} !important`,
    },
  };
});

const ForgotPasswordInstructios = () => {
  const styles = useStyles();
  const { t } = useTranslation("forgotPasswordInstructions");
  const navigate = useNavigate();
  const location = useLocation();

  const handleOnLogIn = useCallback(() => navigate(routes.login.path));
  const handleOnSignUp = useCallback(() => navigate(routes.singUpEmailValidation.path));

  if (location.state === null) {
    return <Navigate replace={true} to={routes.login.path} />;
  }

  const email = location.state.email;

  return (
    <Box className={styles.box}>
      <Typography
        className={styles.Title}
        fontWeight="fontWeightBold"
        text={t("title")}
        variant="h3"
      />
      <Box className={styles.texBox}>
        <Typography
          className={styles.text}
          text={
            <Trans i18nKey="text" t={t}>
              {email}
              <b>{{ email }}</b>
            </Trans>
          }
          variant="body"
        />
        <Typography className={styles.typographyText} text={t("sub-text")} variant="body" />
      </Box>
      <Box>
        <Typography
          className={styles.linkText}
          onClick={handleOnLogIn}
          text={t("log-in")}
          variant="body"
        />
        <Typography className={styles.typographyText} text={t("or")} variant="body" />
        <Typography
          className={styles.linkText}
          onClick={handleOnSignUp}
          text={t("sign-up")}
          variant="body"
        />
      </Box>
    </Box>
  );
};
export default ForgotPasswordInstructios;
