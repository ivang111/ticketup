import FormManager from "./FormManager";
import { FormContext } from "./FormContext";

import FormField from "./FormField";
import FormSubmit from "./FormSubmit";
import FormControl from "./FormControl";

FormManager.FormField = FormField;
FormManager.FormSubmit = FormSubmit;
FormManager.FormControl = FormControl;

export { FormContext };
export default FormManager;
