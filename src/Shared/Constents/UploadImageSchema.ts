import * as yup from "yup";

export const UploadFileSchema = yup.object().shape({
  picture: yup
    .mixed<FileList>() // Pass in the type of `fileUpload`
    .test(
      "fileSize",
      "Only documents up to 2MB are permitted.",
      (files) =>
        !files || // Check if `files` is defined
        files.length === 0 || // Check if `files` is not an empty list
        Array.from(files).every((file) => file.size <= 2_000_000)
    ),
});
