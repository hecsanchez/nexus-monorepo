import { type ReactNode } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../lib/utils";

const sidebarVariants = cva(
  "flex h-full w-64 flex-col border-r bg-sidebar text-sidebar-foreground",
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
  bgColor?: string;
}

export interface SidebarNavigationProps extends VariantProps<typeof sidebarVariants> {
  className?: string;
  items?: NavItem[];
  footer?: ReactNode;
  currentRoute?: string;
  onNavItemClick?: (item: NavItem) => void;
  logoComponent: ReactNode;
}

export function SidebarNavigation({
  className,
  variant,
  items = [],
  footer,
  currentRoute = "",
  onNavItemClick,
  logoComponent,
}: SidebarNavigationProps) {
  // Enhance regex to match any /clients/:sid subroute
  const isClientSubroute =
    /^\/clients\/[^/]+(\/.*)?$/.test(currentRoute);

  // If on a client subroute, use the /clients nav item color
  const clientsNavItem = items.find(item => item.href === '/clients');
  const currentNavItem = isClientSubroute
    ? clientsNavItem
    : items.find(item => item.href === currentRoute);
  const currentRouteColor = currentNavItem?.bgColor || "bg-gray-50 dark:bg-gray-950";

  return (
    <nav className={cn(
      sidebarVariants({ variant }), 
      "transition-colors duration-700",
      currentRouteColor,
      className
    )}>
      <div className="flex h-20 items-center px-4">
        {logoComponent}
      </div>
      
      <div className="flex-1 overflow-auto py-2">
        <div className="space-y-1 px-2">
          {items.map((item) => {
            const isActive =
              (isClientSubroute && item.href === '/clients') ||
              (!isClientSubroute && item.href === currentRoute);
            return (
              <button
                key={item.href}
                onClick={() => onNavItemClick?.(item)}
                className={cn(
                  "cursor-pointer flex w-full items-center gap-3 rounded-md px-3 py-2 text-sm font-medium",
                  "hover:bg-sidebar-accent",
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sidebar-ring",
                  variant === "compact" && "justify-center px-2",
                  isActive && "bg-black text-sidebar-accent-foreground hover:bg-black"
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