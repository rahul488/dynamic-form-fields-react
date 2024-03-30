import { Button, Form, FormGroup } from "reactstrap";
import AppInput from "./Input";
import { useState } from "react";

const FormFields = ({ fields }) => {
  const [isValid, setValid] = useState(null);
  const [isErrorExist, setErrorExist] = useState(null);

  function onSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const formValues = {};
    formData.forEach((value, key) => {
      if (value.length == 0) {
        setValid(false);
      }
      formValues[key] = value;
      if (isErrorExist) {
        return;
      }
    });
  }
  return (
    <div className="form-wrapper">
      <h6>Login</h6>
      <hr />
      <div>
        {isValid == null || isValid ? (
          ""
        ) : (
          <div className="error">Please fill all the fields</div>
        )}
      </div>
      <Form onSubmit={(e) => onSubmit(e)}>
        {fields.map((field, index) => (
          <FormGroup floating key={index}>
            <AppInput
              name={field.name}
              type={field.type}
              placeholder={field.placeholder}
              label={field.label}
              setErrorExist={setErrorExist}
              {...field}
            />
          </FormGroup>
        ))}
        <Button type="submit">Login</Button>
      </Form>
    </div>
  );
};
export default FormFields;
