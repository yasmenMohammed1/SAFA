import { Button, Box, Avatar, Typography } from "@mui/material";
import InputController from "../../Shared/Components/input-controller";
import "../../Shared/Styles/form.css";
import PhotoSizeSelectActualIcon from "@mui/icons-material/PhotoSizeSelectActual";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { Control, FieldErrors } from "react-hook-form";

import { ImageUpload } from "../../Shared/Constents/Interfaces/ImageUpload";
function ImageUploadForm({
  control,
  errors,
}: {
  control: Control<ImageUpload>;
  errors: FieldErrors<ImageUpload>;
}) {
  return (
    <form className="form">
      <Box
        sx={{
          border: "1px #EAE8E9 solid ",
          borderRadius: "50%",
          padding: "5px",
          margin: "auto",
          width: 130,
          height: 130,
          position: "relative",
        }}
      >
        {" "}
        <AddCircleIcon
          sx={{
            position: "absolute",
            right: 0,
            top: 2,
            backgroundColor: "white",
            borderRadius: "50%",
            color: "#FF5F59",
            fontSize: "50px",
            width: "40px",
            height: "40px",
            zIndex: 333,
          }}
        />
        <Avatar
          component="label"
          sx={{
            position: "fixed",
            bgcolor: "#EAE8E9",
            color: "#ACACAC",
            margin: "auto",
            width: 130,
            cursor: "pointer",
            height: 130,
          }}
        >
          <PhotoSizeSelectActualIcon fontSize={"large"} />
          <InputController
            label="upload"
            name="picture"
            control={control}
            InputProps={{
              type: "file",
              sx: {
                clip: "rect(0 0 0 0)",
                clipPath: "inset(50%)",
                height: 1,
                overflow: "hidden",
                position: "absolute",
                bottom: 0,
                left: 0,
                whiteSpace: "nowrap",
                width: 1,
              },
            }}
          />
        </Avatar>
      </Box>
      <Typography
        sx={{
          fontSize: 14,
          color: "#ff5f59",
          textAlign: "center",
          paddingTop: 3,
          paddingBottom: 3,
        }}
      >
        {errors.picture?.message}
      </Typography>
      <Typography
        sx={{
          fontSize: 14,
          color: "grey",
          textAlign: "center",
          paddingTop: 3,
          paddingBottom: 3,
        }}
      >
        Only images with a size lower than 500KB are allowed
      </Typography>
    </form>
  );
}

export default ImageUploadForm;
