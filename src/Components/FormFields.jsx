import { Button, Form, FormGroup } from "reactstrap";
import AppInput from "./Input";
import { useState } from "react";

const FormFields = ({ fields }) => {

  function onSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const formValues = {};
    formData.forEach((value, key) => {
      formValues[key] = value;
      if (value.length == 0) {
        return ;
      }else{
        console.log(formValues,'values');
      }
    });
  }
  return (
    <div className="form-wrapper">
      <h6>Login</h6>
      <hr />
      <Form onSubmit={(e) => onSubmit(e)}>
        {fields.map((field, index) => (
          <FormGroup floating key={index}>
            <AppInput
              name={field.name}
              type={field.type}
              placeholder={field.placeholder}
              label={field.label}
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
