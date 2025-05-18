import * as React from "react";
import { cn } from "../../../../packages/ui/src/lib/utils";

export interface StatsSummaryCardProps extends React.HTMLAttributes<HTMLDivElement> {
  label: string;
  value: string | number;
  icon?: React.ReactNode;
  percentageChange?: number; // positive or negative
  className?: string;
}

const StatsSummaryCard = React.forwardRef<HTMLDivElement, StatsSummaryCardProps>(
  ({ label, value, icon, percentageChange, className, ...props }, ref) => {
    const isPositive = percentageChange !== undefined && percentageChange >= 0;
    const isNegative = percentageChange !== undefined && percentageChange < 0;
    return (
      <div
        ref={ref}
        className={cn(
          "flex flex-col gap-2 rounded-lg border bg-card p-4 shadow-sm min-w-[160px] min-h-[100px] justify-between",
          className
        )}
        {...props}
      >
        <div className="flex items-center gap-2">
          {icon && <span className="text-xl text-muted-foreground">{icon}</span>}
          <span className="text-xs font-medium text-muted-foreground">{label}</span>
        </div>
        <div className="flex items-end justify-between mt-2">
          <span className="text-2xl font-bold text-foreground">{value}</span>
          {percentageChange !== undefined && (
            <span
              className={cn(
                "flex items-center text-xs font-semibold ml-2",
                isPositive && "text-green-600",
                isNegative && "text-red-600"
              )}
            >
              {isPositive && <span className="material-icons text-base mr-1">arrow_upward</span>}
              {isNegative && <span className="material-icons text-base mr-1">arrow_downward</span>}
              {Math.abs(percentageChange)}%
            </span>
          )}
        </div>
      </div>
    );
  }
);
StatsSummaryCard.displayName = "StatsSummaryCard";

export { StatsSummaryCard }; 