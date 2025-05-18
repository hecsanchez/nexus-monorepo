import { type ReactNode } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../lib/utils";

const sidebarVariants = cva(
  "flex h-full w-[280px] flex-col border-r bg-sidebar text-sidebar-foreground",
  {
    variants: {
      variant: {
        default: "",
        compact: "w-[80px]",
      },
    },  
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface NavItem {
  title: string;
  href: string;
  icon: React.ReactNode;
  badge?: string | number;
}

export interface SidebarNavigationProps extends VariantProps<typeof sidebarVariants> {
  className?: string;
  items?: NavItem[];
  footer?: ReactNode;
  onNavItemClick?: (item: NavItem) => void;
}

export function SidebarNavigation({
  className,
  variant,
  items = [],
  footer,
  onNavItemClick,
}: SidebarNavigationProps) {
  return (
    <nav className={cn(sidebarVariants({ variant }), className)}>
      <div className="flex h-14 items-center border-b border-sidebar-border px-4">
        <span className="text-lg font-semibold">Nexus Admin</span>
      </div>
      
      <div className="flex-1 overflow-auto py-2">
        <div className="space-y-1 px-2">
          {items.map((item) => {
            return (
              <button
                key={item.href}
                onClick={() => onNavItemClick?.(item)}
                className={cn(
                  "flex w-full items-center gap-3 rounded-md px-3 py-2 text-sm font-medium",
                  "hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sidebar-ring",
                  variant === "compact" && "justify-center px-2"
                )}
              >
                {item.icon}
                {variant !== "compact" && (
                  <>
                    <span>{item.title}</span>
                    {item.badge && (
                      <span className="ml-auto rounded-full bg-sidebar-primary px-2 py-0.5 text-xs text-sidebar-primary-foreground">
                        {item.badge}
                      </span>
                    )}
                  </>
                )}
              </button>
            );
          })}
        </div>
      </div>

      {footer && (
        <div className="border-t border-sidebar-border p-4">
          {footer}
        </div>
      )}
    </nav>
  );
} 