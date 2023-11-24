import { BorderBottom } from "@mui/icons-material";
import {
  AutocompleteRenderInputParams,
  SxProps,
  TextField,
  TextFieldProps,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { FieldError } from "react-hook-form";

function CustomInputWithStyle({
  label,
  onChange,
  propsError,
  value,
  sx,
  params,
  ...props
}: {
  label: string;
  onChange: (...event: any[]) => void;
  propsError: FieldError | undefined;
  params?: AutocompleteRenderInputParams;

  value: any;
} & Omit<SxProps, ""> &
  Omit<
    TextFieldProps,
    | "multiline"
    | "variant"
    | "color"
    | "hiddenLabel"
    | "type"
    | "InputLabelProps"
  >) {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("sm"));
  const errors = () => {
    let errorArr: Array<string | undefined> = [];
    if (propsError) {
      if (propsError && typeof propsError?.message == "object") {
        errorArr = Object.values(propsError.message);
      } else {
        errorArr.push(propsError.message);
      }
    }
    return errorArr;
  };
  return (
    <>
      <TextField
        {...props}
        {...params}
        InputLabelProps={{
          shrink: true,

          sx: {
            color: "#324356",
            marginLeft:
              props.InputProps?.startAdornment && matches
                ? 8
                : props.InputProps?.startAdornment && !matches
                ? 3
                : 0,
            fontWeight: matches ? "500" : "light",
            fontSize: matches ? 20 : 14,
          },
        }}
        sx={{
          "& .Mui-error": {
            color: "#ff5f59",
          },

          "& ::placeholder": {
            fontSize: "12px",
          },
          "& input": {
            marginLeft:
              props.InputProps?.startAdornment && matches
                ? 8
                : props.InputProps?.startAdornment && !matches
                ? 3
                : 0,
          },
          "& .MuiFilledInput-root.Mui-focused": {
            color: "#324356",
            backgroundColor: "white",
            borderBottom: "none",
          },
          "& .MuiFilledInput-root.Mui": {
            color: "#324356",
            backgroundColor: "white",
          },
          "& label.Mui-focused": {
            color: propsError ? "#ff5f59" : "#324356",
          },

          "& .MuiInputBase-root": {
            background: "white",
            color: "#324356",
            border: errors().length ? "2px solid #ff5f59" : "3px solid #F4F4F4",
            borderRadius: "10px",
            "&:before": {
              content: "none",
            },
            "&:after": {
              content: "none",
            },
            "&:hover": {
              backgroundColor: "white",

              borderBottom: errors()[0] ? "2px solid #ff5f59" : "none",
            },
          },

          ...sx,
        }}
        onChange={onChange}
        label={label}
        autoComplete={"false"}
        helperText={
          propsError && props?.InputProps?.type !== "file" ? (
            <>{errors()[0]}</>
          ) : (
            ""
          )
        }
        FormHelperTextProps={{
          sx: {
            maxHeight: "2px",
            fontSize: "11px",
            color: "#ff5f59  !important",
          },
        }}
        variant="filled"
        error={Boolean(propsError)}
        value={value === null ? "" : value}
      />
    </>
  );
}

export default CustomInputWithStyle;
