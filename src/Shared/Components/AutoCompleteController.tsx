import { Controller, Control } from "react-hook-form";
import { Autocomplete, TextFieldProps, AutocompleteProps } from "@mui/material";
import CustomInputWithStyle from "./CustomInputWithStype";

type Option = { label: string };

type AutoCompleteControllerProps = {
  label: string;
  options: Array<any>;
  isInputAdornment?: boolean;
  name: string;
  control: Control<any, any>;
};
function AutoCompleteController({
  control,
  isInputAdornment,
  options,
  name,
  label,
  ...props
}: AutoCompleteControllerProps &
  Partial<AutocompleteProps<Option, true, true, true>> &
  TextFieldProps) {
  return (
    <Controller
      control={control}
      name={name}
      defaultValue={options[0]}
      render={({
        field: { ref, value, onChange, ...field },
        fieldState: { error },
      }) => (
        <Autocomplete
          options={options}
          onChange={(_, data) => onChange(data)}
          defaultValue={options[0]}
          ref={ref}
          fullWidth
          renderInput={(params) => (
            <CustomInputWithStyle
              onChange={(e) => onChange(e)}
              label={label}
              params={params}
              isInputAdornment
              value={value}
              propsError={error}
            />
          )}
          {...props}
          {...field}
        />
      )}
    />
  );
}

export default AutoCompleteController;
