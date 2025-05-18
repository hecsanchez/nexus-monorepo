import * as React from "react";
import { cn } from "@nexus/ui/utils";

type Step = {
  label: string;
  description?: string;
};

export interface PipelineProgressStepperProps extends React.HTMLAttributes<HTMLDivElement> {
  steps: Step[];
  currentStep: number;
}

const PipelineProgressStepper = React.forwardRef<HTMLDivElement, PipelineProgressStepperProps>(
  ({ steps, currentStep, className, ...props }, ref) => {
    return (
      <div ref={ref} className={cn("flex items-center gap-4", className)} {...props}>
        {steps.map((step, idx) => {
          const isActive = idx === currentStep;
          const isCompleted = idx < currentStep;
          return (
            <React.Fragment key={step.label}>
              <div className="flex flex-col items-center">
                <div
                  className={cn(
                    "flex items-center justify-center w-8 h-8 rounded-full border-2 text-sm font-medium transition-colors",
                    isCompleted
                      ? "bg-primary text-primary-foreground border-primary"
                      : isActive
                      ? "bg-background text-primary border-primary"
                      : "bg-muted text-muted-foreground border-muted"
                  )}
                >
                  {isCompleted ? (
                    <span className="material-icons text-lg">check</span>
                  ) : (
                    idx + 1
                  )}
                </div>
                <span className="mt-2 text-xs text-center font-medium text-muted-foreground">
                  {step.label}
                </span>
                {step.description && (
                  <span className="text-[10px] text-muted-foreground">{step.description}</span>
                )}
              </div>
              {idx < steps.length - 1 && (
                <div className={cn(
                  "flex-1 h-0.5",
                  isCompleted ? "bg-primary" : "bg-muted"
                )} />
              )}
            </React.Fragment>
          );
        })}
      </div>
    );
  }
);
PipelineProgressStepper.displayName = "PipelineProgressStepper";

export { PipelineProgressStepper }; 