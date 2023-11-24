import CustomizedSteppers from "./Shared/Components/CustomStepper";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Box, Typography } from "@mui/material";
import FormFooter from "./Shared/Components/FormFooter";
import useStepper from "./Shared/Helpers/useStepper";
import { useState } from "react";
import { StepsTitles } from "./Shared/Constents/StepsTitles";

function App() {
  const theme = useTheme();
  const [step, setStep] = useState(0);

  const matches = useMediaQuery(theme.breakpoints.up("sm"));
  const { component, next, prev } = useStepper(step, setStep);

  return (
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
        <CustomizedSteppers step={step} />
        <Typography color={"#324356"} mt={2} align="center" variant="h6">
          {StepsTitles[step]}
        </Typography>
        {component}
        <FormFooter step={step} next={next} prev={prev} />
      </Box>
    </div>
  );
}

export default App;
