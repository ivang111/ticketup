import { createContext } from "react";

const formState = {
  values: {},
  validators: {},
  errors: {},
  visible: false,
};

const FormContext = createContext({ formState, setFormState: () => {}, onChange: () => {} });

export { FormContext };
