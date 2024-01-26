import { TextField } from "@mui/material";

interface IInputs {
  name: string;
  type: string;
  label: string;
  placeholder: string;
  defaultValue: string | number;
}

const FormRow = ({ type, label, placeholder, name, defaultValue }: IInputs) => {
  return (
    <TextField
      fullWidth
      type={type}
      name={name}
      label={label}
      placeholder={placeholder}
      defaultValue={defaultValue}
      id="outlined-basic"
      size="small"
      variant="outlined"
      required
    />
  );
};

export default FormRow;
