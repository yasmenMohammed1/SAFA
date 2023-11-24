import CustomizedSteppers from "./Shared/Components/CustomStepper";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Box, ThemeProvider, Typography } from "@mui/material";
import FormFooter from "./Shared/Components/FormFooter";
import useStepper from "./Shared/Helpers/useStepper";
import { useState } from "react";
import { StepsTitles } from "./Shared/Constents/StepsTitles";
import { themeValue } from "./Shared/Theme";

function App() {
  const theme = useTheme();
  const [step, setStep] = useState(0);

  const matches = useMediaQuery(theme.breakpoints.up("sm"));
  const { component, next, prev, isLoading } = useStepper(step, setStep);
  return (
    <ThemeProvider theme={themeValue}>
      <div className="App">
        <Box
          sx={{
            maxWidth: matches ? "50%" : "90%",
            margin: "auto",
            display: "flex",
            flexDirection: "column",
            gap: 2,
          }}
        >
          {step < 4 ? <CustomizedSteppers step={step} /> : ""}{" "}
          <Typography color={"#324356"} mt={2} align="center" variant="h6">
            {StepsTitles[step]}
          </Typography>
          {component}
          {step < 4 ? (
            <FormFooter
              step={step}
              next={next}
              prev={prev}
              isLoading={isLoading}
            />
          ) : (
            ""
          )}
        </Box>
      </div>
    </ThemeProvider>
  );
}

export default App;
