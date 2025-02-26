import { useState } from "react";
import { Home, Settings, BarChart, ChevronRight } from "lucide-react";

const menuItems = [
  {
    title: "Dashboard",
    link: "dashboard",
    icon: <Home size={20} className="menu-icon" />,
  },
  {
    title: "Settings",
    icon: <Settings size={20} className="menu-icon" />,
    submenu: [
      {
        title: "Profile",
        icon: <ChevronRight size={16} className="submenu-icon" />,
        submenu: [
          { title: "Edit Profile", link: "/settings/profile/edit" },
          { title: "Profile Settings", link: "/settings/profile/settings" },
        ],
      },
      { title: "Security", link: "/settings/security" },
    ],
  },
  {
    title: "Reports",
    icon: <BarChart size={20} className="menu-icon" />,
    submenu: [
      { title: "Sales", link: "/reports/sales" },
      { title: "Users", link: "/reports/users" },
    ],
  },
];

export default function Sidebar() {
  const [hoveredItem, setHoveredItem] = useState(null);
  const [hoveredSubItem, setHoveredSubItem] = useState(null);

  return (
    <div className="sidebar">
      <ul className="main-icon">
        {menuItems.map((item, index) => (
          <li
            key={index}
            onMouseEnter={() => setHoveredItem(index)}
            onMouseLeave={() => setHoveredItem(null)}
            className="menu-item-container"
          >
            <button className="menu-item">{item.icon}</button>
            {item.submenu && hoveredItem === index && (
              <div className="submenu-popup">
                <ul>
                  {item.submenu.map((subItem, subIndex) => (
                    <li
                      key={subIndex}
                      onMouseEnter={() => setHoveredSubItem(subIndex)}
                      onMouseLeave={() => setHoveredSubItem(null)}
                      className="submenu-item"
                    >
                      <span className="submenu-title">
                        {subItem.title}{" "}
                        {subItem.submenu && (
                          <ChevronRight size={14} className="submenu-icon" />
                        )}
                      </span>
                      {subItem.submenu && hoveredSubItem === subIndex && (
                        <ul className="nested-submenu">
                          {subItem.submenu.map((nestedItem, nestedIndex) => (
                            <li key={nestedIndex}>
                              <a
                                href={nestedItem.link}
                                className="nested-submenu-item"
                              >
                                {nestedItem.title}
                              </a>
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
