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
import { useNavigate, useLocation, Link } from "react-router";
import logo from "@/assets/logo.svg";

const navItems: NavItem[] = [
  {
    title: "Dashboard",
    href: "/",
    icon: <MdDashboard size={24} />,
    bgColor: "bg-[#FAF9F8]",
  },
  {
    title: "Users",
    href: "/users",
    icon: <MdPeople size={24} />,
    bgColor: "bg-[#FAF9F8]",
  },
  {
    title: "Clients",
    href: "/clients",
    icon: <MdBusiness size={24} />,
    bgColor: "bg-[#FCF6F0]",
  },
  {
    title: "Credentials",
    href: "/credentials",
    icon: <MdSecurity size={24} />,
    bgColor: "bg-[#FCF6F0]",
  },
  {
    title: "Billing",
    href: "/billing",
    icon: <MdCreditCard size={24} />,
    bgColor: "bg-[#FAF9F8]",
  },
  {
    title: "Subscriptions",
    href: "/subscriptions",
    icon: <MdSync size={24} />,
    bgColor: "bg-[#EFEAEA]",
  },
  {
    title: "Messaging",
    href: "/messaging",
    icon: <MdChat size={24} />,
    bgColor: "bg-pink-50 dark:bg-pink-950",
  },
  {
    title: "Reporting",
    href: "/reporting",
    icon: <MdPieChart size={24} />,
    bgColor: "bg-teal-50 dark:bg-teal-950",
  },
  {
    title: "Exceptions",
    href: "/exceptions",
    icon: <MdReportProblem size={24} />,
    bgColor: "bg-[#F7F6F3]",
  },
];

const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavItemClick = (item: NavItem) => {
    navigate(item.href);
  };

  return (
    <SidebarNavigation 
      items={navItems} 
      onNavItemClick={handleNavItemClick}
      currentRoute={location.pathname}
      logoComponent={
      <Link to="/">
        <img src={logo} alt="Logo" className="w-8 h-8" />
      </Link>
      }
    />
  );
};

export default Sidebar;
