import { Control, FormState, FieldErrors } from "react-hook-form";
import CompanyVerificationForm from "../../Pages/CompleteRegisteration/CompanyVerificationForm";
import ImageUploadForm from "../../Pages/ImageForm/ImageUploadForm";
import TellUsMoreForm from "../../Pages/TellMoreForm/TellMoreForm";
import { CompanyVerificationSchema } from "./ComapnyVerification";
import { tellUsMoreSchema } from "./TellUsMoreSchema";
import { UploadFileSchema } from "./UploadImageSchema";
import { CompanyVerification } from "./Interfaces/CompanyVerification";
import { ImageUpload } from "./Interfaces/ImageUpload";
import { TellUsMore } from "./Interfaces/TellUsMoreInterface";

export const steps = [
  {
    component: ({
      control,
    }: // errors,
    {
      control: Control<CompanyVerification>;
      // errors: FieldErrors<CompanyVerification>;
    }) => <CompanyVerificationForm control={control} />,
    schema: CompanyVerificationSchema,
    title: "ddd",
  },
  {
    component: ({
      control,
    }: //   errors,
    {
      control: Control<TellUsMore>;
      //  errors: FieldErrors<TellUsMore>;
    }) => <TellUsMoreForm control={control} />,
    schema: tellUsMoreSchema,
    title: "ddd",
  },
  {
    component: ({
      control,
      errors,
    }: {
      control: Control<ImageUpload>;
      errors: FieldErrors<ImageUpload>;
    }) => <ImageUploadForm control={control} errors={errors} />,
    schema: UploadFileSchema,
    title: "ddd",
  },
];
