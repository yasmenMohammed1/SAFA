import { Box } from "@mui/material";
import Btn from "./Btn";
import { stepsNextActions } from "../Constents/NextStepActions";
import { UseFormTrigger } from "react-hook-form";
import { CompanyVerification } from "../Constents/Interfaces/CompanyVerification";
import { ImageUpload } from "../Constents/Interfaces/ImageUpload";
import { TellUsMore } from "../Constents/Interfaces/TellUsMoreInterface";

function FormFooter({
  step,
  next,
  prev,
}: {
  step: number;
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
        gap: 4,
      }}
    >
      {step !== 4 && step ? (
        <Btn
          isLoading={false}
          name="backward-btn"
          sx={{ width: "20%", color: "white" }}
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
        sx={{ width: "30%", color: "white" }}
        isLoading={false}
        name="proceed"
        disabled={step === 3}
        onClick={() => {
          next();
          console.log(step);
        }}
      >
        {stepsNextActions[step]}
      </Btn>
    </Box>
  );
}

export default FormFooter;
