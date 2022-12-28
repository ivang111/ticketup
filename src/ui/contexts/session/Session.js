import { createContext } from "react";

import { setItem, getItem, clearItems } from "frameworks/storage";

const setSessionStorage = (session) => {
  setItem("session", session);
};

const getSessionStorage = () => {
  const session = getItem("session");
  if (session) {
    const diff = ((session.expires - Date.now()) / (1000 * 60)) % 60;
    if (diff <= 0) {
      closeSessionStorage();
      return null;
    }
  }
  return session;
};
const closeSessionStorage = () => {
  clearItems();
  window.location.reload();
};

const sessionState = {
  session: {},
  setSession: () => {},
  getSession: () => {},
  closeSession: () => {},
};

const SessionContext = createContext(sessionState);

export { closeSessionStorage, sessionState, getSessionStorage, setSessionStorage, SessionContext };
