import React, { useContext } from 'react';
import IntroduceSteps from './introduce-steps';
import Button from '../ui/button';
import StepOne from './step-one';
import StepTwo from './step-two';
import StepThree from './step-three';
import { CreateJourneyCtx } from '../../context/create-journey-context';

function CreateJourneyContent() {
  const [state, dispatch] = useContext(CreateJourneyCtx);
  return (
    <div className="container mx-auto mt-8">
      <div className="mt-6 p-4 sm:p-0 sm:mt-18">
        {state.activeStep === 0 && (
          <>
            <IntroduceSteps />
            <div className="flex justify-center my-12 p-4 sm:p-0">
              <Button
                onClick={() => dispatch({ type: 'setActiveStep', step: 1 })}
                variant="custom"
                color="#FCFCFC"
                className="uc-onboarding-step1-continue-btn"
              >
                CONTINUE
              </Button>
            </div>
          </>
        )}
        {state.activeStep === 1 && <StepOne />}
        {state.activeStep === 2 && <StepTwo />}
        {state.activeStep === 3 && <StepThree />}
      </div>
    </div>
  );
}

export default CreateJourneyContent;
