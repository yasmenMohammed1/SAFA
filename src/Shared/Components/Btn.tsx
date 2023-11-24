///import CircularProgress from "@mui/material/CircularProgress";
import { Button, ButtonProps } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
import { SxProps } from "@mui/material/styles";

export function Btn({
  isLoading = false,
  sx,
  ...props
}: { isLoading: boolean } & ButtonProps & (SxProps | undefined)) {
  const { children } = props;
  return (
    <Button
      size="large"
      sx={{
        backgroundColor: "#1777FB",
        ":hover": {
          backgroundColor: "#1777FB",
        },
        ...sx,
      }}
      {...props}
    >
      {isLoading ? <CircularProgress size={20} disableShrink /> : children}{" "}
    </Button>
  );
}

export default Btn;
