import React from "react";
import { Box, Typography } from "@mui/material";
import "../../Shared/Styles/form.css";
function EmailConfirmation({ email }: { email: String }) {
  return (
    <div className="form">
      <Box sx={{ textAlign: "center", padding: 4, margin: "auto" }}>
        <img width={"40%"} height={"40%"} alt="email " src="email.png" />
        <Typography variant="subtitle1" color={"red"} textAlign={"center"}>
          We will send you a message on this e-mail
        </Typography>
        <Typography variant="subtitle2" color={"black"} textAlign={"center"}>
          {email}
        </Typography>
      </Box>
    </div>
  );
}

export default EmailConfirmation;
