const routes = {
  login: {
    path: "/login",
    name: "login",
  },
  singUpEmailValidation: {
    path: "/sing-up-email-validation",
    name: "sing-up-email-validation",
  },
  singUp: {
    path: "/sing-up",
    name: "sing-up",
  },
  forgotPassword: {
    path: "/forgot-pasword",
    name: "forgot-pasword",
  },
  forgotPasswordIntructions: {
    path: "/forgot-pasword-instructions",
    name: "forgot-pasword-instructions",
  },
  newPassword: {
    path: "/new-pasword",
    name: "new-pasword",
  },
  home: {
    path: "/",
    name: "home",
    // inSidebar: true,
    // categories: ["all"],
  },
};
const routesArray = [];
Object.keys(routes).forEach((key) => {
  routesArray.push(routes[key]);
});

export { routes, routesArray };
