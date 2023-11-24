import { Box } from "@mui/material";
import Btn from "./Btn";
import { stepsNextActions } from "../Constents/NextStepActions";

function FormFooter({
  step,
  next,
  prev,
  isLoading,
}: {
  step: number;
  isLoading: boolean;
  next: () => void;
  prev: () => void;
}) {
  return (
    <Box
      sx={{
        margin: "auto",
        display: "flex",
        width: "100%",
        bgcolor: "#f4f4f4",
        justifyContent: step ? "end" : "space-between",
        gap: 2,
      }}
    >
      {step !== 4 && step ? (
        <Btn
          isLoading={false}
          name="backward-btn"
          sx={{
            width: "20%",
            color: "grey",
            backgroundColor: "#EAE8E9",
            "&:hover": { backgroundColor: "#EAE8E9" },
          }}
          disabled={step === 0}
          onClick={() => {
            prev();
          }}
        >
          {step ? "Back" : "Back in login"}
        </Btn>
      ) : !step ? (
        <Btn
          isLoading={false}
          name="backward-btn"
          sx={{ padding: 0, bgcolor: "transparent", color: "black" }}
          disabled={true}
        >
          {"Back in login"}
        </Btn>
      ) : (
        ""
      )}
      <Btn
        sx={{
          width: "30%",
          color: "white",
          backgroundColor: "#1777FB",
          ":hover": {
            backgroundColor: "#1777FB",
          },
        }}
        isLoading={isLoading}
        name="proceed"
        onClick={() => {
          if (step < 4) {
            next();
          }
        }}
      >
        {stepsNextActions[step]}
      </Btn>
    </Box>
  );
}

export default FormFooter;
