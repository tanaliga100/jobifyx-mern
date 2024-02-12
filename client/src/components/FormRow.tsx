import { TextField } from "@mui/material";

interface IInputs {
  name: string;
  type: string;
  label: string;
  placeholder: string;
  defaultValue?: string | number;
}

const FormRow = ({ type, label, placeholder, name }: IInputs) => {
  return (
    <TextField
      fullWidth
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
