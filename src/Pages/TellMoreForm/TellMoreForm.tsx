import InputController from "../../Shared/Components/input-controller";
import { Box } from "@mui/material";
import AutoCompleteController from "../../Shared/Components/AutoCompleteController";
import { countries } from "../../Shared/Constents/Countries";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import Visibility from "@mui/icons-material/Visibility";
import { useState } from "react";
import "./../../Shared/Styles/form.css";

function TellUsMoreForm({ control }: any) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <form className="form">
      <InputController
        fullWidth
        sx={{ mb: 3 }}
        control={control}
        name="full_name"
        placeholder="Enter Your Full Name"
        label="FULL NAME"
      />
      <InputController
        fullWidth
        sx={{ mb: 3 }}
        control={control}
        placeholder="Enter Your business email"
        name="business_email"
        label="BUSINESS EMAIL"
      />
      <Box sx={{ display: "flex", justifyContent: "space-between", mb: 3 }}>
        <AutoCompleteController
          name="countries"
          control={control}
          label={"COUNTRY"}
          sx={{ width: "49%" }}
          options={countries}
        />
        <InputController
          name="phone_number"
          sx={{ width: "49%" }}
          control={control}
          InputProps={{
            startAdornment: (
              <Box
                sx={{
                  text: "center",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "auto",
                  padding: 0,
                  width: "20%",
                  height: "100%",
                  position: "absolute",
                  left: 0,

                  borderRight: "1px solid #F4F4F4", // Add this line for the border
                }}
              >
                +20
              </Box>
            ),
          }}
          label={"PHONE NUMBER"}
          placeholder="Enter Your Phone Number"
        />
      </Box>
      <InputController
        name="password"
        control={control}
        fullWidth
        label={"PASSWORD "}
        placeholder="Choose a password"
        sx={{ mb: 3 }}
      />
      <InputController
        name="confirm_password"
        control={control}
        fullWidth
        label={"REPEAT PASSWORD"}
        placeholder="Repeat your password"
        sx={{ mb: 3 }}
        InputProps={{
          type: showPassword ? "text" : "password",
          endAdornment: (
            <Box
              sx={{
                cursor: "pointer",
                text: "center",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                margin: "auto",
                padding: 0,
                width: "20%",
                height: "100%",
                position: "absolute",
                right: 0,
                color: "black",
                borderRight: "1px solid #F4F4F4",
              }}
              onClick={() => {
                setShowPassword(!showPassword);
              }}
            >
              {showPassword ? <VisibilityOffIcon /> : <Visibility />}
            </Box>
          ),
        }}
      />
    </form>
  );
}

export default TellUsMoreForm;
