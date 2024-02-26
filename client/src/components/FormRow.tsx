import { TextField } from "@mui/material";
import { useState } from "react";

interface IInputs {
  name: string;
  type: string;
  label: string;
  placeholder?: string;
  defaultValue?: string | number;
}

const FormRow = ({ type, label, placeholder, name, defaultValue }: IInputs) => {
  const [value, setValue] = useState(defaultValue || ""); // Initialize state with defaultValue

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value); // Upd
  };
  return (
    <TextField
      fullWidth
      value={value} // Bind value to state
      onChange={handleChange} // Handle input changes
      type={type}
      name={name}
      label={label}
      placeholder={placeholder}
      id="outlined-basic"
      size="small"
      variant="outlined"
      required
      color="success"
      sx={{ fontWeight: "900" }}
    />
  );
};

export default FormRow;
