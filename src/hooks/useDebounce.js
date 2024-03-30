import { useEffect, useState } from "react";
const useDebounce = (value, delay = 500) => {
  const [debouncedValue, setDebouncedValue] = useState(null);
  useEffect(() => {
    const timeout = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);
    return () => clearTimeout(timeout);
  }, [value, delay]);
  return debouncedValue;
};
export default useDebounce;
