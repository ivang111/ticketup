import { makeStyles } from "@mui/styles";
import { useMemo } from "react";
import HomeAdmin from "../../modules/home-admin";
import HomeSuperUser from "../../modules/home-super-user";
import HomeBasicUser from "../../modules/home-basic-user";
import Typography from "../../components/atoms/typography";
import moment from "moment/moment";
import { useTranslation } from "react-i18next";
import { isImportant } from "../../helpers";

const useStyles = makeStyles((theme) => {
  return {
    root: {
      width: "100%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      padding: theme.spacing(10, 0, 2, 0),
      backgroundColor: theme.palette.background.paper,
    },
    content: {
      width: "100%",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      padding: isImportant(theme.spacing(1, 0)),
      margin: isImportant(theme.spacing(0, "auto")),
    },
    date: {
      marginBottom: isImportant(theme.spacing(1)),
      color: theme.palette.grey[800],
    },
    title: {
      color: theme.palette.grey[700],
    },
    subTitle: {
      marginBottom: isImportant(theme.spacing(1)),
      color: theme.palette.grey[800],
    },
    module: {
      marginTop: "30px",
      display: "flex",
      alignItems: "center",
    },
  };
});

const user = {
  type: "admin",
  name: "Jhon Doe",
  area: "Admin",
};

const Home = () => {
  const styles = useStyles();
  const { t } = useTranslation("login");

  const homeUser = useMemo(() => {
    if (user.type === "admin") {
      return <HomeAdmin />;
    }
    if (user.type === "superUser") {
      return <HomeSuperUser />;
    }
    if (user.type === "basicUser") {
      return <HomeBasicUser />;
    }
  }, [user]);

  return (
    <div className={styles.root}>
      <div className={styles.content}>
        <Typography
          className={styles.date}
          text={`${moment(new Date()).format("dddd")}, ${moment(new Date()).format("MMM D")}`}
          variant="body2"
        />
        <Typography
          className={styles.title}
          fontWeight="fontWeightBold"
          text={t("Hi " + user.name)}
          variant="h2"
        />
        <Typography
          className={styles.subTitle}
          fontWeight="fontWeightBold"
          text={user.area}
          variant="h5"
        />
        <div className={styles.module}>{homeUser}</div>
      </div>
    </div>
  );
};

export default Home;
