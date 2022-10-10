import { Route, Routes } from "react-router-dom";
import { routes } from "../../helpers";
import LoginPage from "../../pages/login-page";
import NotFoundPage from "../../pages/not-found-page";
import HomePage from "../../pages/home";

const Router = () => {
  return (
    <Routes>
      <Route element={<HomePage />} path={routes.home.path} />
      <Route element={<LoginPage />} path={routes.login.path} />
      <Route element={<NotFoundPage />} path="*" />
    </Routes>
  );
};

export default Router;
