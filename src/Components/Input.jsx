import { Label, Input, FormFeedback } from "reactstrap";
import useDebounce from "../hooks/useDebounce";
import { useEffect, useState } from "react";

const AppInput = ({ name, id, placeholder, label, type, ...rest }) => {
  const [value, setValue] = useState("");
  const debounceValue = useDebounce(value);
  const [error, setError] = useState({
    value: false,
    message: "",
  });
  const { minLength, maxLength, required, errorMessage } = rest;
  console.log(rest, minLength);
  function handleChange(e) {
    setValue(e.target.value);
  }

  useEffect(() => {
    if (debounceValue && minLength) {
      if (debounceValue?.length < minLength) {
        setError({
          value: true,
          message: errorMessage,
        });
      } else {
        setError({
          value: true,
          message: "",
        });
      }
    } else if (debounceValue && maxLength) {
      if (debounceValue?.length < maxLength) {
        setError({
          value: true,
          message: errorMessage,
        });
      } else {
        setError({
          value: true,
          message: "",
        });
      }
    }
  }, [debounceValue?.length]);
  return (
    <>
      <Input
        id={id}
        name={name}
        value={value}
        onChange={(e) => handleChange(e)}
        placeholder={placeholder}
        type={type}
      />
      <Label for="exampleEmail">{label}</Label>
      {error && error?.value ? (
        <div className="error">{error.message}</div>
      ) : null}
    </>
  );
};
export default AppInput;
