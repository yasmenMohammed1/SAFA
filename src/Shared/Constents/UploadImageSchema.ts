import * as yup from "yup";

export const UploadFileSchema = yup.object().shape({
  img: yup
    .mixed<FileList>() // Pass in the type of `fileUpload`
    .test("fileSize", "Only documents up to 2MB are permitted.", (files) => {
      if (!files || files.length === 0) {
        return false;
      }
      return files[0].size < 200000;
    }),
});
