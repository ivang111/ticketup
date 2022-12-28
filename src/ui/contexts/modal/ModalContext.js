import { createContext } from "react";

const defaultModalState = {
  type: "",
  show: false,
  onChange: () => {},
  onClose: () => {},
};

const setModalState = () => {};

const ModalContext = createContext({ modalState: defaultModalState, setModalState });
export { defaultModalState, ModalContext, setModalState };
