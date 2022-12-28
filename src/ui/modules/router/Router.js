import { Route, Routes } from "react-router-dom";
import { routes } from "../../helpers";
import MinimalLayout from "../../modules/minimal-layout";
import TopNavigation from "../../modules/top-navigation";
import LoginPage from "../../pages/login-page";
import NotFoundPage from "../../pages/not-found-page";
import HomePage from "../../pages/home";

const Router = () => {
  return (
    <Routes>
      <Route element={<HomePage />} path={routes.home.path} />
      <Route
        element={
          <MinimalLayout Topbar={TopNavigation}>
            <LoginPage />
          </MinimalLayout>
        }
        path={routes.login.path}
      />
      <Route element={<NotFoundPage />} path="*" />
    </Routes>
  );
};

export default Router;
