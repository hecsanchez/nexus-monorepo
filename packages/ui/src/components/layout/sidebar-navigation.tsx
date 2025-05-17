import { type ReactNode } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../lib/utils";
import { 
  LayoutDashboard, 
  Workflow, 
  FileText, 
  CreditCard, 
  Users, 
  Building2, 
  KeyRound,
  type LucideIcon 
} from "lucide-react";

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
  icon: LucideIcon;
  badge?: string | number;
}

const defaultNavItems: NavItem[] = [
  {
    title: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "Workflows",
    href: "/workflows",
    icon: Workflow,
  },
  {
    title: "Reports",
    href: "/reports",
    icon: FileText,
  },
  {
    title: "Billing",
    href: "/billing",
    icon: CreditCard,
  },
  {
    title: "Users",
    href: "/users",
    icon: Users,
  },
  {
    title: "Clients",
    href: "/clients",
    icon: Building2,
  },
  {
    title: "Credentials",
    href: "/credentials",
    icon: KeyRound,
  },
];

export interface SidebarNavigationProps extends VariantProps<typeof sidebarVariants> {
  className?: string;
  items?: NavItem[];
  footer?: ReactNode;
  onNavItemClick?: (item: NavItem) => void;
}

export function SidebarNavigation({
  className,
  variant,
  items = defaultNavItems,
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
            const Icon = item.icon;
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
                <Icon className="h-5 w-5" />
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