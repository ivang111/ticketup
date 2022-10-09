import { Route, Routes } from "react-router-dom";
import { routes } from "@ui/helpers";
import LoginPage from "@ui/pages/login-page";
import NotFoundPage from "@ui/pages/not-found-page";

const Router = () => {
  return (
    <Routes>
      <Route element={<LoginPage />} path={routes.login.path} />
      <Route element={<NotFoundPage />} path="*" />
    </Routes>
  );
};

export default Router;
