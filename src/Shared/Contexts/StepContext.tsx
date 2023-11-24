import { PropsWithChildren, createContext, useContext, useState } from "react";

type ContextType = {
  activeStep: number;
  handleStepChange: (step: number) => void;
};
export const StepContext = createContext<ContextType>({
  activeStep: 1,
  handleStepChange: (step: number) => {},
});

export const StepProvider = ({ children }: PropsWithChildren<{}>) => {
  const [activeStep, handleStepChange] = useState<ContextType["activeStep"]>(1);

  return (
    <StepContext.Provider value={{ activeStep, handleStepChange }}>
      {children}
    </StepContext.Provider>
  );
};

export const useStep = () => {
  const context = useContext(StepContext);
  // return context ?? { activeStep: 0, handleStepChange: () => {} };

  return context;
};
