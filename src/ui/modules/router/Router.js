import { Route, Routes } from "react-router-dom";
import { routes } from "../../helpers";
import MinimalLayout from "../../modules/minimal-layout";
import TopNavigation from "../../modules/top-navigation";
import LoginPage from "../../pages/login-page";
import NotFoundPage from "../../pages/not-found-page";
import HomePage from "../../pages/home";
import SingUpPage from "../../pages/sing-up-page";
import ForgotPasswordPage from "../../pages/forgot-password-page";
import ChangePasswordPage from "../../pages/change-password-page";
import SingUpEmailValidationPage from "../../pages/sing-up-email-validation-page";
import ForgotPasswordIntrusctionsPage from "../../pages/forgot-password-instructions-page";

const Router = () => {
  return (
    <Routes>
      <Route
        element={
          <MinimalLayout Topbar={TopNavigation}>
            <HomePage />
          </MinimalLayout>
        }
        path={routes.home.path}
      />
      <Route
        element={
          <MinimalLayout Topbar={TopNavigation}>
            <LoginPage />
          </MinimalLayout>
        }
        path={routes.login.path}
      />
      <Route
        element={
          <MinimalLayout Topbar={TopNavigation}>
            <SingUpEmailValidationPage />
          </MinimalLayout>
        }
        path={routes.singUpEmailValidation.path}
      />
      <Route
        element={
          <MinimalLayout Topbar={TopNavigation}>
            <SingUpPage />
          </MinimalLayout>
        }
        path={routes.singUp.path}
      />
      <Route
        element={
          <MinimalLayout Topbar={TopNavigation}>
            <ForgotPasswordPage />
          </MinimalLayout>
        }
        path={routes.forgotPassword.path}
      />
      <Route
        element={
          <MinimalLayout Topbar={TopNavigation}>
            <ForgotPasswordIntrusctionsPage />
          </MinimalLayout>
        }
        path={routes.forgotPasswordIntructions.path}
      />
      <Route
        element={
          <MinimalLayout Topbar={TopNavigation}>
            <ChangePasswordPage />
          </MinimalLayout>
        }
        path={routes.newPassword.path}
      />
      <Route element={<NotFoundPage />} path="*" />
    </Routes>
  );
};

export default Router;
