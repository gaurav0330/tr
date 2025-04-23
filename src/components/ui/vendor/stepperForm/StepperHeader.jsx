import { useState } from "react";
import BasicInfoForm from "./steps/BasicInfoForm";

const steps = [
  { id: 1, label: "Basic Info" },
  { id: 2, label: "Business" },
  { id: 3, label: "Pricing" },
  { id: 4, label: "Review" },
];

const MultiStepForm = () => {
  const [currentStep, setCurrentStep] = useState(1);

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <div>
            <BasicInfoForm />
          </div>
        );
      case 2:
        return <div>Form content for Business</div>;
      case 3:
        return <div>Form content for Pricing</div>;
      case 4:
        return <div>Form content for Review</div>;
      default:
        return null;
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-card rounded-2xl shadow-lg">
      {/* Step Circles */}
      <div className="flex justify-between mb-6">
        {steps.map((step) => {
          const isActive = currentStep === step.id;
          const isCompleted = currentStep > step.id;

          return (
            <div
              key={step.id}
              className="flex flex-col items-center flex-1 relative"
            >
              <div
                className={`w-10 h-10 flex items-center justify-center rounded-full text-sm font-bold
                  ${
                    isActive
                      ? "bg-primary text-white"
                      : isCompleted
                      ? "bg-secondary text-white"
                      : "bg-muted text-muted-foreground"
                  }`}
              >
                {isCompleted ? "✓" : step.id}
              </div>
            </div>
          );
        })}
      </div>

      {/* Step Form */}
      <div className="mb-6">{renderStepContent()}</div>

      {/* Navigation Buttons */}
      <div className="flex justify-between">
        <button
          onClick={() => setCurrentStep((prev) => Math.max(prev - 1, 1))}
          disabled={currentStep === 1}
          className="px-4 py-2 rounded bg-muted text-muted-foreground hover:bg-muted/70 disabled:opacity-50"
        >
          Back
        </button>
        <button
          onClick={() =>
            setCurrentStep((prev) => Math.min(prev + 1, steps.length))
          }
          className="px-4 py-2 rounded bg-primary text-white hover:bg-primary/90"
        >
          {currentStep === steps.length ? "Finish" : "Next"}
        </button>
      </div>
    </div>
  );
};

export default MultiStepForm;
