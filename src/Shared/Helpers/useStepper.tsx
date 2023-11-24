import { yupResolver } from "@hookform/resolvers/yup";
import { Control, useForm } from "react-hook-form";
import { CompanyVerification } from "../Constents/Interfaces/CompanyVerification";
import { TellUsMore } from "../Constents/Interfaces/TellUsMoreInterface";
import { steps } from "../Constents/StepsArray";
import { ImageUpload } from "../Constents/Interfaces/ImageUpload";

function useStepper(step: number, setStep: any) {
  const { control, trigger, formState, setValue } = useForm<
    CompanyVerification | TellUsMore | ImageUpload
  >({
    resolver: yupResolver<CompanyVerification | TellUsMore | ImageUpload>(
      steps[step].schema as any
    ),
  });
  const next = () => {
    if (step < 4) {
      trigger();
      if (formState.isValid) {
        setStep((prevStep: number) => prevStep + 1);
      } else {
        console.log("first", formState.errors);
      }
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
    control: control as Control<CompanyVerification> &
      Control<TellUsMore> &
      Control<ImageUpload>,
    errors,
  });
  return { step, component, next, prev, setValue, formState };
}

export default useStepper;
