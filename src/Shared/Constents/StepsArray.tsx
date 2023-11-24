import { Control, FieldErrors } from "react-hook-form";
import CompanyVerificationForm from "../../Pages/CompleteRegisteration/CompanyVerificationForm";
import ImageUploadForm from "../../Pages/ImageForm/ImageUploadForm";
import TellUsMoreForm from "../../Pages/TellMoreForm/TellMoreForm";
import { CompanyVerificationSchema } from "./ComapnyVerification";
import { tellUsMoreSchema } from "./TellUsMoreSchema";
import { UploadFileSchema } from "./UploadImageSchema";
import { CompanyVerification } from "./Interfaces/CompanyVerification";
import { ImageUpload } from "./Interfaces/ImageUpload";
import { TellUsMore } from "./Interfaces/TellUsMoreInterface";
import EmailConfirmation from "../../Pages/EmailConfirmation/EmailConfirmation";
import ConfirmationSuccess from "../../Pages/ConfirmationSuccess/ConfirmationSuccess";

export const steps = [
  {
    component: ({ control }: { control: Control<TellUsMore> }) => (
      <TellUsMoreForm control={control} />
    ),
    schema: tellUsMoreSchema,
  },
  {
    component: ({ control }: { control: Control<CompanyVerification> }) => (
      <CompanyVerificationForm control={control} />
    ),
    schema: CompanyVerificationSchema,
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
  },
  {
    component: ({ email }: { email: string }) => (
      <EmailConfirmation email={email} />
    ),
  },

  {
    component: ({
      handleSendEmail,
    }: {
      handleSendEmail: () => Promise<void>;
    }) => <ConfirmationSuccess handleSendEmail={handleSendEmail} />,
  },
];
