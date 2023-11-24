import { SxProps, TextField, TextFieldProps } from "@mui/material";
import { Controller, Control } from "react-hook-form";
import "./input.css";
import CustomInputWithStyle from "./CustomInputWithStype";

type InputControllerProps = {
  label: string;
  name: string;
  control: Control<any, any>;
};
function InputController({
  control,
  name,
  label,
  sx,
  ...props
}: InputControllerProps &
  Omit<SxProps, ""> &
  Omit<
    TextFieldProps,
    | "multiline"
    | "variant"
    | "color"
    | "hiddenLabel"
    | "type"
    | "InputLabelProps"
  >) {
  return (
    <Controller
      control={control}
      defaultValue=""
      name={name}
      render={({
        field: { ref, onChange, value, ...otherRenderProps },
        fieldState: { error },
      }) => {
        return (
          <CustomInputWithStyle
            label={label}
            onChange={onChange}
            propsError={error}
            value={value}
            sx={sx}
            {...otherRenderProps}
            {...props}
          />
        );
      }}
    />
  );
}

export default InputController;
