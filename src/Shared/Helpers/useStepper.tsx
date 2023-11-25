import { yupResolver } from "@hookform/resolvers/yup";
import { Control, useForm, FieldErrors } from "react-hook-form";
import { CompanyVerification } from "../Constents/Interfaces/CompanyVerification";
import { TellUsMore } from "../Constents/Interfaces/TellUsMoreInterface";
import { steps } from "../Constents/StepsArray";
import { ImageUpload } from "../Constents/Interfaces/ImageUpload";
import { http } from "../http/http";
import { useState } from "react";

const sendValues = async (values: any) => {
  await http.post("https://id.safav2.io.safavisa.com/register", values);
};

function useStepper(step: number, setStep: any) {
  const [isLoading, setLoading] = useState(false);

  const handleSendEmail = async () => {
    setLoading(true);

    try {
      await handleSubmit(sendValues)();
    } catch (err: any) {
      alert(err);
    }
    setLoading(false);
  };
  const { control, trigger, formState, setValue, getValues, handleSubmit } =
    useForm<CompanyVerification | TellUsMore | ImageUpload>({
      resolver:
        step < 3
          ? yupResolver<CompanyVerification | TellUsMore | ImageUpload>(
              steps[step].schema as any
            )
          : undefined,
    });
  const next = async () => {
    if (step < 3) {
      trigger();
      if (formState.isValid) {
        setStep((prevStep: number) => prevStep + 1);
      }
    } else {
      await handleSendEmail();

      setStep(step + 1);
    }
  };
  const prev = () => {
    if (step > 0)
      setStep((prev: number) => {
        return prev - 1;
      });
  };

  const errors = formState.errors;

  const component = steps[step].component({
    email: getValues("user_email"),
    handleSendEmail: handleSendEmail,

    control: control as Control<CompanyVerification> &
      Control<TellUsMore> &
      Control<ImageUpload>,
    errors,
  });
  return { step, component, next, prev, setValue, formState, isLoading };
}

export default useStepper;
