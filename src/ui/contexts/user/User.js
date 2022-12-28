import { createContext } from "react";

const userDataState = {
  userData: {},
  setUserData: () => {},
};

const UserContext = createContext(userDataState);

export { UserContext };
