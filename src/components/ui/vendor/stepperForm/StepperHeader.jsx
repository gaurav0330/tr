import { useState } from "react";
import BasicInfoForm from "./steps/BasicInfoForm";
import AvailabilityForm from "./steps/AvailabilityForm";
import PricingGalleryForm from "./steps/PricingGalleryForm";
import VerificationForm from "./steps/VerificationForm";

const steps = [
  { id: 1, label: "Basic Info" },
  { id: 2, label: "Business" },
  { id: 3, label: "Pricing" },
  { id: 4, label: "Verification" },
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
        return (
          <div>
            <AvailabilityForm />
          </div>
        );
      case 3:
        return (
          <div>
            <PricingGalleryForm />
          </div>
        );
      case 4:
        return (
          <div>
            <VerificationForm />
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-card rounded-2xl shadow-lg text-text">
      {/* Step Circles */}
      <div className="flex justify-between mb-10">
        {steps.map((step, index) => {
          const isActive = currentStep === step.id;
          const isCompleted = currentStep > step.id;

          return (
            <div
              key={step.id}
              className="flex-1 relative flex flex-col items-center"
            >
              {/* Step Circle */}
              <div
                className={`w-10 h-10 flex items-center justify-center rounded-full text-sm font-bold transition
                ${
                  isActive
                    ? "bg-accent text-white"
                    : isCompleted
                    ? "bg-secondary text-white"
                    : "bg-muted text-muted-foreground"
                }`}
              >
                {isCompleted ? "✓" : step.id}
              </div>

              {/* Step Label */}
              <span className="mt-2 text-xs text-center text-muted-foreground">
                {step.label}
              </span>

              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="absolute top-5 left-1/2 w-full h-0.5 bg-border -z-10 translate-x-1/2"></div>
              )}
            </div>
          );
        })}
      </div>

      {/* Step Form Content */}
      <div className="mb-8">{renderStepContent()}</div>

      {/* Navigation Buttons */}
      <div className="flex justify-between">
        <button
          onClick={() => setCurrentStep((prev) => Math.max(prev - 1, 1))}
          disabled={currentStep === 1}
          className="px-4 py-2 rounded-md bg-muted text-muted-foreground hover:bg-muted/70 transition disabled:opacity-50"
        >
          Back
        </button>
        <button
          onClick={() =>
            setCurrentStep((prev) => Math.min(prev + 1, steps.length))
          }
          className="px-4 py-2 rounded-xl bg-accent text-white hover:bg-accent/80 transition"
        >
          {currentStep === steps.length ? "Finish" : "Next"}
        </button>
      </div>
    </div>
  );
};

export default MultiStepForm;
