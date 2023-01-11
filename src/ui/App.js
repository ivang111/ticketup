import { makeStyles } from "@mui/styles";
import { ThemeProvider } from "@mui/material/styles";
import { defaultTheme } from "../frameworks/theme";
import Router from "./modules/router";
// import { useNavigate } from "react-router-dom";
// import { useDispatch } from "react-redux";

const useStyles = makeStyles(() => {
  return {
    root: {
      height: "100%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
  };
});

const App = () => {
  const styles = useStyles();
  // const navigate = useNavigate();
  // const dispatch = useDispatch();

  // const handleCloseSession = () => {
  //   closeSessionStorage();
  //   setSession(null);
  //   navigate(routes.login.path, { replace: true });
  // };
  // useEffect(() => {
  //   dispatch(getData());
  // }, [dispatch]);

  // const fetchData = async () => {
  //   const userDataResponse = await getData(session.token);
  //   if (session.verified) {
  //     if (userDataResponse.error) {
  //       handleCloseSession();
  //       return;
  //     }
  //     if (session.category === "partner" || session.category === "volunteer") {
  //       //set category partner or volunteer, change behavior if needed partner/volunteer home
  //       setUserData({
  //         ...userDataResponse.data,
  //         category: {
  //           type: session.category,
  //           name: session.category,
  //         },
  //       });
  //     }
  //     if (session.category === "partner") {
  //       const response = await getUserPartner({
  //         id: userDataResponse.data.businessId,
  //         token: session.token,
  //       });
  //       setPartnerUser(response.data);
  //     } else {
  //       const getUserCategory = CATEGORIES[session.category];
  //       const userCategoryResponse = await getUserCategory({
  //         id: userDataResponse.data.businessId,
  //         token: session.token,
  //       });
  //       setUserData({
  //         ...userDataResponse.data,
  //         category: {
  //           type: session.category,
  //           id: userCategoryResponse.data[0][session.category].id,
  //           name: userCategoryResponse.data[0][session.category].name,
  //         },
  //       });
  //     }
  //   } else {
  //     setUserData({
  //       ...userDataResponse.data,
  //       category: {
  //         type: session.category,
  //         name: session.category,
  //       },
  //     });
  //   }
  // };

  return (
    <ThemeProvider theme={defaultTheme}>
      <div className={styles.root}>
        <Router />
      </div>
    </ThemeProvider>
  );
};

export default App;
