import { useState, useEffect } from "react";
import FormFields from "../Components/FormFields";
const Login = () => {
  const [fields, setFields] = useState([]);

  useEffect(() => {
    getFormData();
  }, []);

  async function getFormData() {
    const res = await fetch("http://localhost:8080/form/getFormFields");
    const data = await res.json();
    setFields(data);
  }
  return (
    <div>
      <FormFields fields={fields} />
    </div>
  );
};
export default Login;
