import { SidebarNavigation, type NavItem } from "@nexus/ui";
import { useNavigate, useLocation, Link } from "react-router";
import logo from "@/assets/logo.svg";
import {
  FaHome,
  FaUsers,
  FaComments,
  FaChartLine,
  FaExclamationTriangle,
  FaKey,
  FaReceipt,
  FaChartBar
} from "react-icons/fa";

const navItems: NavItem[] = [
  {
    title: "Dashboard",
    href: "/",
    icon: <FaHome size={16} />,
    bgColor: "bg-[#FAF9F8]",
  },
  {
    title: "Workflow ROI",
    href: "/workflows",
    icon: <FaChartLine size={16} />,
    bgColor: "bg-[#FCF6F0]",
  },
  {
    title: "Reporting",
    href: "/reporting",
    icon: <FaChartBar size={16} />,
    bgColor: "bg-[#FCF6F0]",
  },
  {
    title: "Credentials",
    href: "/credentials",
    icon: <FaKey size={16} />,
    bgColor: "bg-[#FCF6F0]",
  },
  {
    title: "Exceptions",
    href: "/exceptions",
    icon: <FaExclamationTriangle size={16} />,
    bgColor: "bg-[#F7F6F3]",
  },
  {
    title: "Users",
    href: "/users",
    icon: <FaUsers size={16} />,
    bgColor: "bg-[#FAF9F8]",
  },
  {
    title: "Billing",
    href: "/billing",
    icon: <FaReceipt size={16} />,
    bgColor: "bg-[#FAF9F8]",
  },
  {
    title: "Messaging",
    href: "/messaging",
    icon: <FaComments size={16} />,
    bgColor: "bg-[#EFEAEA]",
  }
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
