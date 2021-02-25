import React from "react";
import SidebarContent from "components/Sidebar/SidebarContent";

const DesktopSidebar: React.FC = () => {
  return (
    <aside className="z-40 hidden flex-shrink-0 w-72 dark:bg-gray-800 bg-dark-gray overflow-y-auto lg:block">
      <SidebarContent />
    </aside>
  );
};

export default DesktopSidebar;
