import { SidebarNavigation, type NavItem } from "@nexus/ui";
import {
  FaHouseUser,
  FaUsers,
  FaBuilding,
  FaReceipt,
  FaKey,
  FaCreditCard,
  FaComments,
  FaChartLine,
  FaExclamationTriangle,
} from "react-icons/fa";
import { useNavigate } from "react-router";

const navItems: NavItem[] = [
  {
    title: "Dashboard",
    href: "/",
    icon: <FaHouseUser size={24} />,
  },
  {
    title: "Users",
    href: "/users",
    icon: <FaUsers size={24} />,
  },
  {
    title: "Clients",
    href: "/clients",
    icon: <FaBuilding size={24} />,
  },
  {
    title: "Credentials",
    href: "/credentials",
    icon: <FaKey size={24} />,
  },
  {
    title: "Billing",
    href: "/billing",
    icon: <FaReceipt size={24} />,
  },
  {
    title: "Subscriptions",
    href: "/subscriptions",
    icon: <FaCreditCard size={24} />,
  },
  {
    title: "Messaging",
    href: "/messaging",
    icon: <FaComments size={24} />,
  },
  {
    title: "Reporting",
    href: "/reporting",
    icon: <FaChartLine size={24} />,
  },
  {
    title: "Exceptions",
    href: "/exceptions",
    icon: <FaExclamationTriangle size={24} />,
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
