import InputController from "../../Shared/Components/input-controller";
import { Box, InputAdornment, Typography } from "@mui/material";
import AutoCompleteController from "../../Shared/Components/AutoCompleteController";
import { countries } from "../../Shared/Constents/Countries";
import { Languages } from "../../Shared/Constents/Languages";
import "./../../Shared/Styles/form.css";

function CompanyVerificationForm({ control }: any) {
  return (
    <form className="form">
      <Typography
        sx={{
          fontSize: 14,
          color: "grey",
          textAlign: "center",
          paddingTop: 1,
          paddingBottom: 3,
        }}
      >
        Entering this information correctly will facilitate the company
        verification process
      </Typography>
      <InputController
        fullWidth
        sx={{ mb: 3 }}
        control={control}
        name="company_name"
        InputProps={{
          endAdornment: (
            <InputAdornment position="end" sx={{ width: "20%" }}>
              <AutoCompleteController
                options={Languages}
                disableClearable
                name="languages"
                control={control}
                label={""}
                //   InputLabelProps={{ shrink: true, sx: { display: "none" } }}
                sx={{
                  "& .MuiInputBase-root": {
                    background: "white",
                    color: "#324356",
                    borderRadius: "10px",

                    border: "none !important",
                  },

                  borderLeft: "3px solid #F4F4F4",
                }}
              />
            </InputAdornment>
          ),
        }}
        placeholder="Enter Your Company Name"
        label="COMPANY NAME"
      />
      <InputController
        fullWidth
        sx={{ mb: 3 }}
        control={control}
        placeholder="Enter Your address "
        name="address"
        label="ADDRESS"
      />
      <InputController
        fullWidth
        sx={{ mb: 3 }}
        control={control}
        placeholder="Enter Your business email"
        name="business_email"
        label="BUSINESS EMAIL"
      />
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <AutoCompleteController
          name="country"
          control={control}
          label={"COUNTRY"}
          sx={{ width: "49%" }}
          options={countries}
        />
        <AutoCompleteController
          name="city"
          control={control}
          label={"CITY"}
          sx={{ width: "49%" }}
          options={countries}
        />
      </Box>
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
      />{" "}
      <InputController
        name="phone_number"
        sx={{ width: "49%" }}
        control={control}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
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
            </InputAdornment>
          ),
        }}
        label={"PHONE NUMBER"}
        placeholder="Enter Your Phone Number"
      />
    </form>
  );
}

export default CompanyVerificationForm;
