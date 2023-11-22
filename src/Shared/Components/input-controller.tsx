import { TextField, TextFieldProps } from "@mui/material";

import { Controller, Control } from "react-hook-form";

type InputControllerProps = {
  label: string;
  name: string;
  control: Control<any, any>;
};
function InputController({
  control,
  name,
  label,
  ...props
}: InputControllerProps &
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
        field: { onChange, value, ...otherRenderProps },
        fieldState: { error },
      }) => {
        return (
          <TextField
            onChange={(e) => onChange(e.target.value)}
            label={label}
            helperText={error?.message}
            sx={{ padding: "0", margin: "0" }}
            error={Boolean(error)}
            value={value === null ? "" : value}
            {...otherRenderProps}
            {...props}
            InputLabelProps={{
              shrink: true,
            }}
            {...props}
          />
        );
      }}
    />
  );
}

export default InputController;
