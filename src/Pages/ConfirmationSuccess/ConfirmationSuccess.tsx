import { Box, Typography } from "@mui/material";

function ConfirmationSuccess({
  handleSendEmail,
}: {
  handleSendEmail: () => Promise<void>;
}) {
  return (
    <div className="form">
      <Box sx={{ textAlign: "center", padding: 4, margin: "auto" }}>
        <img width={"40%"} height={"40%"} alt="email " src="email.png" />
        <Typography fontWeight={600} variant="body1" color={"#324356"}>
          Congrats, you successfully created your account
        </Typography>
        <Typography color={"#324356"}>
          We just sent you a confirmation email <br />
          Please Check your E-mail
        </Typography>
        <Typography mt={3} variant="body2" color={"#324356"}>
          Didn't receive it ?
        </Typography>
        <Box
          color={"#324356"}
          justifyContent={"center"}
          textAlign={"center"}
          alignItems={"center"}
          display={"flex"}
          gap={".5%"}
        >
          <Typography> Check your Spam Folder or</Typography>
          <Typography
            onClick={() => {
              handleSendEmail();
            }}
            color={"error"}
            sx={{ cursor: "pointer" }}
          >
            Resend it
          </Typography>
        </Box>
      </Box>
    </div>
  );
}

export default ConfirmationSuccess;
