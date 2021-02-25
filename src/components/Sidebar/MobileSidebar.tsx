import React, { useContext } from "react";
import SidebarContent from "components/Sidebar/SidebarContent";
import { Transition, Backdrop } from "@windmill/react-ui";
import { SidebarContext } from "context/sidebarContext";


const MobileSidebar: React.FC = () => {
  const { isSidebarOpen, closeSidebar } = useContext(SidebarContext);

  return (
    <Transition show={isSidebarOpen}>
      <>
        <Transition
          enter="transition ease-in-out duration-150"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition ease-in-out duration-150"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Backdrop onClick={closeSidebar} />
        </Transition>

        <Transition
          enter="transition ease-in-out duration-150"
          enterFrom="opacity-0 transform -translate-x-20"
          enterTo="opacity-100"
          leave="transition ease-in-out duration-150"
          leaveFrom="opacity-100"
          leaveTo="opacity-0 transform -translate-x-20"
        >
          <aside className="fixed z-40 inset-y-0 flex-shrink-0  w-screen dark:bg-gray-800 bg-dark-gray overflow-y-auto lg:hidden">
            <SidebarContent />
          </aside>
        </Transition>
      </>
    </Transition>
  );
};

export default MobileSidebar;
