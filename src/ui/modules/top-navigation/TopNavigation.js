/* eslint-disable react/jsx-no-bind */
/* eslint-disable react/jsx-no-comment-textnodes */
import { makeStyles } from "@mui/styles";
import { useTranslation } from "../../../frameworks/translation";
import { useMemo, useCallback } from "react";
import { routes } from "../../helpers";
import { useLocation, useNavigate } from "react-router-dom";
import Button from "../../components/atoms/button";
import Typography from "../../components/atoms/typography";
import TopBar from "../../components/molecules/top-bar";
import Icon from "../../components/atoms/icon";

const useStyles = makeStyles((theme) => {
  return {
    root: {
      flexGrow: 1,
    },
    img: {
      width: "40px",
      height: "30px",
    },
    notLogged: {
      boxShadow: "none !important",
    },
    content: {
      display: "flex",
      flexDirection: "row",
      width: "100%",
      position: "relative",
      justifyContent: "right",
      paddingRight: 10,
    },
    user: {
      display: "flex",
      flexDirection: "row",
      minWidth: 150,
      justifyContent: "center",
      alignItems: "center",
      gap: "10px",
    },
    action: {
      marginRight: "5px !important",
      color: theme.palette.grey[600],
    },
  };
});

const TopNavigation = () => {
  const styles = useStyles();
  const { t, i18n } = useTranslation("topBar");
  const location = useLocation();
  const navigate = useNavigate();

  const handleOnClickSignUp = useCallback(() => {
    navigate(routes.singUpEmailValidation.path);
  });

  const lenguage = useMemo(() => {
    if (i18n.language === "es") {
      // eslint-disable-next-line react/jsx-no-bind
      return (
        <Button
          onClick={() => i18n.changeLanguage("en")}
          startIcon={<Icon.LengEn className={styles.img} />}
          text={t("En")}
        />
      );
    }
    if (i18n.language === "en") {
      // eslint-disable-next-line react/jsx-no-bind
      return (
        <Button
          onClick={() => i18n.changeLanguage("es")}
          startIcon={<Icon.LengEs className={styles.img} />}
          text={t("Es")}
        />
      );
    }
  }, [i18n.language]);

  const user = useMemo(() => {
    if (location.pathname === routes.login.path) {
      return (
        <>
          <Typography className={styles.action} text={t("notRegistered")} variant="body" />
          <Button onClick={handleOnClickSignUp} text={t("singup")} variant="contained" />
        </>
      );
    }
    if (location.pathname === routes.home.path) {
      return (
        <>
          <Typography className={styles.action} text={t("notRegistered")} variant="body" />
          <Button onClick={handleOnClickSignUp} text={t("singup")} variant="contained" />
        </>
      );
    }
  }, [location, t]);

  return (
    <TopBar className={styles.notLogged} color="background">
      {lenguage}
      <div className={styles.content}>
        <div className={styles.user}>{user}</div>
      </div>
    </TopBar>
  );
};

export default TopNavigation;
