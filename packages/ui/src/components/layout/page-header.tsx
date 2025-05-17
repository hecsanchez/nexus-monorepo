import * as React from "react";
import { cn } from "../../lib/utils";
import { Button } from "../ui/button";

export interface PageHeaderAction {
  label: string;
  onClick: () => void;
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link";
  icon?: React.ReactNode;
}

export interface PageHeaderProps {
  className?: string;
  title: string;
  description?: string;
  actions?: PageHeaderAction[];
  children?: React.ReactNode;
}

export function PageHeader({
  className,
  title,
  description,
  actions,
  children,
}: PageHeaderProps) {
  return (
    <div className={cn("space-y-4 pb-4", className)}>
      <div className="flex items-center justify-between">
        <div className="space-y-1">
          <h1 className="text-2xl font-semibold tracking-tight">{title}</h1>
          {description && (
            <p className="text-sm text-muted-foreground">{description}</p>
          )}
        </div>
        {actions && actions.length > 0 && (
          <div className="flex items-center gap-2">
            {actions.map((action, index) => (
              <Button
                key={index}
                variant={action.variant || "default"}
                onClick={action.onClick}
              >
                {action.icon && (
                  <span className="mr-2 inline-flex">{action.icon}</span>
                )}
                {action.label}
              </Button>
            ))}
          </div>
        )}
      </div>
      {children && <div className="mt-4">{children}</div>}
    </div>
  );
} 