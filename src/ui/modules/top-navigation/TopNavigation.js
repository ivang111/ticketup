import { makeStyles } from "@mui/styles";
import { useTranslation } from "../../../frameworks/translation";
import { useMemo, useCallback } from "react";
import { routes } from "../../helpers";
import { useLocation } from "react-router-dom";
import Button from "../../components/atoms/button";
import Typography from "../../components/atoms/typography";
import TopBar from "../../components/molecules/top-bar";

const useStyles = makeStyles((theme) => {
  return {
    root: {
      flexGrow: 1,
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
  const { t } = useTranslation(["common"]);
  const location = useLocation();

  const handleOnClickSignUp = useCallback(() => {});

  const user = useMemo(() => {
    if (location.pathname === routes.login.path) {
      return (
        <>
          <Typography
            className={styles.action}
            text={t("¿Aun no estas regitrado?")}
            variant="body"
          />
          <Button onClick={handleOnClickSignUp} text={t("Sign up")} variant="contained" />
        </>
      );
    }
  }, [location]);

  return (
    <TopBar className={styles.notLogged} color="background">
      <div className={styles.content}>
        <div className={styles.user}>{user}</div>
      </div>
    </TopBar>
  );
};

export default TopNavigation;
