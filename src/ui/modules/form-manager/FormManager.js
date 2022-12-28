import { useState, useCallback, useEffect } from "react";
import PropTypes from "prop-types";
import { validate } from "../../../frameworks/validate";

import { FormContext } from "./FormContext";
import FormContainer from "./FormContainer";
import { isEmpty } from "../../helpers";

const defaultOnChange = () => {};

const EntityManager = ({ initialState, children, onSubmit, onChange = defaultOnChange }) => {
  const [formState, setFormState] = useState(initialState);
  const [isValid, setIsValid] = useState(false);
  const [defaultErrors] = useState(
    initialState.visible ? validate(initialState.values, initialState.validators) : null
  );

  const onStateChange = useCallback(({ name, value }) => {
    setFormState({
      ...formState,
      values: {
        ...formState.values,
        [name]: value,
      },
      touched: {
        ...formState.touched,
        [name]: true,
      },
      anyTouched: true,
    });

    onChange({
      ...formState,
      values: {
        ...formState.values,
        [name]: value,
      },
    });
  });

  const handleOnSubmit = useCallback(
    (event) => {
      event.preventDefault();
      if (isValid) {
        onSubmit(formState.values);
      }
    },
    [isValid, formState.values]
  );

  useEffect(() => {
    let errors = {};

    if (!formState.visible) {
      errors = { ...validate(formState.values, formState.validators) };
    } else {
      const validation = validate(formState.values, formState.validators);
      Object.keys(defaultErrors).forEach((key) => {
        errors[key] = defaultErrors[key].map((err) => {
          return {
            message: err,
            valid: !!validation ? !validation[key] || !validation[key].includes(err) : true,
          };
        });
      });
    }

    setFormState({
      ...formState,
      errors: errors || {},
    });
  }, [formState.values, formState.validators, formState.visible]);

  useEffect(() => {
    if (formState.visible) {
      let list = [];
      Object.keys(formState.errors).forEach((error) => {
        list.push(...formState.errors[error].filter((err) => !err.valid));
      });
      setIsValid(list.length === 0);
    } else {
      setIsValid(isEmpty(formState.errors));
    }
  }, [formState.errors]);

  return (
    <FormContext.Provider value={{ formState, setFormState, onChange: onStateChange }}>
      <FormContainer handleSubmit={handleOnSubmit}>{children}</FormContainer>
    </FormContext.Provider>
  );
};

EntityManager.propTypes = {
  initialState: PropTypes.shape({
    values: PropTypes.object.isRequired,
    validators: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired,
    visible: PropTypes.bool,
  }).isRequired,
  children: PropTypes.node.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func,
};

export default EntityManager;
