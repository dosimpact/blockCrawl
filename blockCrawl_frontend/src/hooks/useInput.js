import { useState } from "react";

export default (initValue) => {
  const [value, setValue] = useState(initValue);
  const onChange = (e) => {
    if (e) {
      setValue(e.target.value);
    }
  };
  return { onChange, value };
};
