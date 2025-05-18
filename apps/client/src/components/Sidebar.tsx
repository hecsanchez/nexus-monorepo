import { SidebarNavigation, type NavItem } from "@nexus/ui";
import {
  MdDashboard,
  MdPeople,
  MdBusiness,
  MdCreditCard,
  MdSync,
  MdChat,
  MdPieChart,
  MdReportProblem,
  MdSecurity,
} from "react-icons/md";
import { useNavigate } from "react-router";

const navItems: NavItem[] = [
  {
    title: "Dashboard",
    href: "/",
    icon: <MdDashboard size={24} />,
  },
  {
    title: "Users",
    href: "/users",
    icon: <MdPeople size={24} />,
  },
  {
    title: "Clients",
    href: "/clients",
    icon: <MdBusiness size={24} />,
  },
  {
    title: "Credentials",
    href: "/credentials",
    icon: <MdSecurity size={24} />,
  },
  {
    title: "Billing",
    href: "/billing",
    icon: <MdCreditCard size={24} />,
  },
  {
    title: "Subscriptions",
    href: "/subscriptions",
    icon: <MdSync size={24} />,
  },
  {
    title: "Messaging",
    href: "/messaging",
    icon: <MdChat size={24} />,
  },
  {
    title: "Reporting",
    href: "/reporting",
    icon: <MdPieChart size={24} />,
  },
  {
    title: "Exceptions",
    href: "/exceptions",
    icon: <MdReportProblem size={24} />,
  },
];

const Sidebar = () => {
  const navigate = useNavigate();

  const handleNavItemClick = (item: NavItem) => {
    navigate(item.href);
  };

  return (
    <SidebarNavigation items={navItems} onNavItemClick={handleNavItemClick} />
  );
};

export default Sidebar;
