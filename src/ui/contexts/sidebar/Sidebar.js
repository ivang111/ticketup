import { createContext } from "react";

const sidebarState = {
  open: true,
  activeRoute: null,
  activeMenu: null,
  setOpen: () => {},
  setActiveRoute: () => {},
  setActiveMenu: () => {},
};

const SidebarContext = createContext(sidebarState);

export { SidebarContext };
