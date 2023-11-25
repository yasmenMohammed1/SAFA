import InputController from "../../Shared/Components/input-controller";
import { Box } from "@mui/material";
import AutoCompleteController from "../../Shared/Components/AutoCompleteController";
import { countries } from "../../Shared/Constents/Countries";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import Visibility from "@mui/icons-material/Visibility";
import { useState } from "react";
import "./../../Shared/Styles/form.css";
import { TellUsMore } from "../../Shared/Constents/Interfaces/TellUsMoreInterface";
import { Control } from "react-hook-form";

function TellUsMoreForm({ control }: { control: Control<TellUsMore> }) {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPasswor, setShowConfirmPassword] = useState(false);

  return (
    <form className="form">
      <InputController
        fullWidth
        control={control}
        name="user_full_name"
        placeholder="Enter Your Full Name"
        label="FULL NAME"
      />
      <InputController
        fullWidth
        control={control}
        placeholder="Enter Your business email"
        name="user_email"
        label="BUSINESS EMAIL"
      />
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <AutoCompleteController
          name="company_country_id"
          control={control}
          label={"COUNTRY"}
          sx={{ width: "49%", my: 2 }}
          options={countries}
        />
        <InputController
          name="user_phone"
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

                  borderRight: "1px solid #F4F4F4",
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
        name="user_password"
        control={control}
        fullWidth
        label={"PASSWORD "}
        placeholder="Choose a password"
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
      <InputController
        name="user_password_confirmation"
        control={control}
        fullWidth
        label={"REPEAT PASSWORD"}
        placeholder="Repeat your password"
        InputProps={{
          type: showConfirmPasswor ? "text" : "password",
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
                setShowConfirmPassword(!showConfirmPasswor);
              }}
            >
              {showConfirmPasswor ? <VisibilityOffIcon /> : <Visibility />}
            </Box>
          ),
        }}
      />
    </form>
  );
}

export default TellUsMoreForm;
