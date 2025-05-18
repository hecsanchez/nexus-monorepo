import * as React from "react";
import { cn } from "../../../../packages/ui/src/lib/utils";

export interface SolutionsEngineerContactCardProps extends React.HTMLAttributes<HTMLDivElement> {
  name: string;
  avatar?: React.ReactNode | string; // ReactNode or image URL
  email: string;
  phone?: string;
  role?: string;
  onChat?: () => void;
  className?: string;
}

const SolutionsEngineerContactCard = React.forwardRef<HTMLDivElement, SolutionsEngineerContactCardProps>(
  ({ name, avatar, email, phone, role, onChat, className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "flex items-center gap-4 rounded-lg border bg-card p-4 min-w-[260px]",
          className
        )}
        {...props}
      >
        <div className="flex-shrink-0">
          {typeof avatar === "string" ? (
            <img
              src={avatar}
              alt={name}
              className="w-12 h-12 rounded-full object-cover border"
            />
          ) : (
            avatar || (
              <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center text-lg font-bold text-muted-foreground">
                {name[0]}
              </div>
            )
          )}
        </div>
        <div className="flex-1 min-w-0">
          <div className="font-semibold text-foreground truncate">{name}</div>
          {role && <div className="text-xs text-muted-foreground truncate">{role}</div>}
          <div className="text-xs text-muted-foreground truncate">{email}</div>
          {phone && <div className="text-xs text-muted-foreground truncate">{phone}</div>}
        </div>
        <button
          type="button"
          onClick={onChat}
          className="ml-2 px-3 py-1.5 rounded-md bg-primary text-primary-foreground text-xs font-medium shadow hover:bg-primary/90 transition-colors"
        >
          Chat
        </button>
      </div>
    );
  }
);
SolutionsEngineerContactCard.displayName = "SolutionsEngineerContactCard";

export { SolutionsEngineerContactCard }; 