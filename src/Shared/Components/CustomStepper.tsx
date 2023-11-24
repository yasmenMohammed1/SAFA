import * as React from "react";
import { styled } from "@mui/material/styles";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import BusinessIcon from "@mui/icons-material/Business";
import BurstModeIcon from "@mui/icons-material/BurstMode";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";

import StepConnector, {
  stepConnectorClasses,
} from "@mui/material/StepConnector";

import { StepIconProps } from "@mui/material/StepIcon";
import { StepsTitles } from "../Constents/StepsTitles";

const ColorlibConnector = styled(StepConnector)(({ theme }) => ({
  [`&.${stepConnectorClasses.alternativeLabel}`]: {
    top: 10,
  },
  [`&.${stepConnectorClasses.active}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      paddingY: "4px",
      border: "0",
      borderBottom: "10px solid white",
      borderTop: "10px solid white",
      backgroundColor: "#1777FB",
    },
  },
  [`&.${stepConnectorClasses.completed}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      padding: "4px",
      border: "0",
      borderBottom: "10px solid white",
      borderTop: "10px solid white",
      backgroundColor: "blue",
    },
  },
  [`& .${stepConnectorClasses.line}`]: {
    padding: "4px",
    border: "0",
    borderBottom: "10px solid white",
    borderTop: "10px solid white",
    backgroundColor:
      theme.palette.mode === "dark" ? theme.palette.grey[800] : "#eaeaf0",
  },
}));

const ColorlibStepIconRoot = styled("div")<{
  ownerState: { completed?: boolean; active?: boolean };
}>(({ theme, ownerState }) => ({
  backgroundColor: "white",
  zIndex: 1,
  color: "grey",
  width: 50,
  height: 50,
  display: "flex",
  borderRadius: "50%",
  justifyContent: "center",
  alignItems: "center",
  ...(ownerState.active && {
    border: "2px solid #FF5F59",
    boxShadow: "#FF5F59",
    backgroundColor: "white",
    color: " #FF5F59",
  }),
  ...(ownerState.completed && {
    border: "2px solid #1777FB",
    boxShadow: "#1777FB",
    backgroundColor: "white",
    color: " #1777FB",
  }),
}));

function ColorlibStepIcon(props: StepIconProps) {
  const { active, completed, className } = props;

  const icons: { [index: string]: React.ReactElement } = {
    1: <PersonOutlineIcon />,
    2: <BusinessIcon />,
    3: <BurstModeIcon />,
    4: <VerifiedUserIcon />,
  };

  return (
    <ColorlibStepIconRoot
      ownerState={{ completed, active }}
      className={className}
    >
      {icons[String(props.icon)]}
    </ColorlibStepIconRoot>
  );
}

export default function CustomizedSteppers({ step }: { step: number }) {
  return (
    <Stepper
      sx={{ marginTop: "2%" }}
      alternativeLabel
      activeStep={step}
      connector={<ColorlibConnector />}
    >
      {StepsTitles.map((label) => (
        <Step key={label}>
          <StepLabel StepIconComponent={ColorlibStepIcon}></StepLabel>
        </Step>
      ))}
    </Stepper>
  );
}
