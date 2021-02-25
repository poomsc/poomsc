import React from "react";
import DesktopSidebar from "components/Sidebar/DesktopSidebar";
import MobileSidebar from "components/Sidebar/MobileSidebar";

const Sidebar = ():JSX.Element => {
  return (
    <>
      <DesktopSidebar />
      <MobileSidebar />
    </>
  );
};

export default Sidebar;