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
  changePassword: {
    path: "/change-pasword",
    name: "change-pasword",
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
