const routes = {
  home: {
    path: "/",
    name: "home",
    // inSidebar: true,
    // categories: ["all"],
  },
  login: {
    path: "/login",
    name: "login",
  },
};
const routesArray = [];
Object.keys(routes).forEach((key) => {
  routesArray.push(routes[key]);
});

export { routes, routesArray };
