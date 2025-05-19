import * as React from "react";
import { cn } from "../../../../packages/ui/src/lib/utils";
import { Button } from "@nexus/ui";
import { MessageSquareIcon } from "lucide-react";
export interface SolutionsEngineerContactCardProps extends React.HTMLAttributes<HTMLDivElement> {
  name: string;
  avatar?: React.ReactNode | string; // ReactNode or image URL
  email: string;
  phone?: string;
  role?: string;
  onChat?: () => void;
  className?: string;
  size?: "lg" | "sm";
}

const SolutionsEngineerContactCard = React.forwardRef<HTMLDivElement, SolutionsEngineerContactCardProps>(
  ({ name, avatar, email, phone, role, onChat, className, size = "sm", ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "rounded-lg border bg-card p-4 min-w-[260px]",
          className
        )}
        {...props}
      >
        <div className="flex items-center gap-4">
          <div className="flex-shrink-0">
            {typeof avatar === "string" ? (
              <img
                src={avatar}
                alt={name}
                className={cn(
                  "rounded-full object-cover border",
                  size === "lg"
                    ? "w-16 h-16"
                    : "w-12 h-12"
                )}
              />
            ) : (
              avatar || (
                <div className={cn(
                  "rounded-full bg-muted flex items-center justify-center text-lg font-bold text-muted-foreground",
                  size === "lg"
                    ? "w-16 h-16"
                    : "w-12 h-12"
                )}>
                  {name[0]}
                </div>
              )
            )}
          </div>
          <div className="flex-1 min-w-0">
            <div className={cn(
              "font-semibold text-foreground truncate",
              size === "lg"
                ? "text-lg"
                : ""
            )}>{name}</div>
            {role && <div className={
              size === "lg"
                ? "text-sm text-muted-foreground truncate"
                : "text-xs text-muted-foreground truncate"
            }>{role}</div>}
            {size === "sm" && (
              <>
                <div className="text-xs text-muted-foreground truncate">{email}</div>
                {phone && <div className="text-xs text-muted-foreground truncate">{phone}</div>}
              </>
            )}
          </div>
          {size === "sm" && (
            <Button
              onClick={onChat}
              className="ml-2 px-3 py-1.5"
          >
              Chat
            </Button>
          )}
        </div>
        {size === "lg" && (
          <Button
            onClick={onChat}
            className="w-full mt-4 text-lg font-normal h-10"
          >
            <MessageSquareIcon className="w-4 h-4 mr-2" />
            Message SE
          </Button>
        )}
      </div>
    );
  }
);
SolutionsEngineerContactCard.displayName = "SolutionsEngineerContactCard";

export { SolutionsEngineerContactCard }; 