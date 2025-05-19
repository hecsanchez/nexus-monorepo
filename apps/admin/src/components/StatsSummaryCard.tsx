import * as React from "react";
import { cn } from "@nexus/ui";
import { FaArrowUp, FaArrowDown } from "react-icons/fa";

export interface StatsSummaryCardProps extends React.HTMLAttributes<HTMLDivElement> {
  label: string;
  value: string | number;
  percentageChange?: number; // positive or negative
  className?: string;
}

const StatsSummaryCard = React.forwardRef<HTMLDivElement, StatsSummaryCardProps>(
  ({ label, value, percentageChange, className, ...props }, ref) => {
    const isPositive = percentageChange !== undefined && percentageChange >= 0;
    const isNegative = percentageChange !== undefined && percentageChange < 0;
    return (
      <div
        ref={ref}
        className={cn(
          "flex flex-col gap-2 rounded-lg border bg-card p-4 min-w-[160px] min-h-[100px] justify-between",
          className
        )}
        {...props}
      >
        <div className="flex items-start justify-between gap-2">
          <span className="text-lg text-muted-foreground block">{label}</span>
          {percentageChange !== undefined && (
            <span
              className={cn(
                "flex items-center font-semibold ml-2",
                isPositive && "text-green-600",
                isNegative && "text-red-600"
              )}
            >
              {isPositive && <FaArrowUp className="text-base mr-1" />}
              {isNegative && <FaArrowDown className="text-base mr-1" />}
              {Math.abs(percentageChange)}%
            </span>
          )}
        </div>
        <div className="flex items-end justify-between mt-2">
          <span className="text-3xl text-foreground antialiased">{value}</span>
        </div>
      </div>
    );
  }
);
StatsSummaryCard.displayName = "StatsSummaryCard";

export { StatsSummaryCard }; 