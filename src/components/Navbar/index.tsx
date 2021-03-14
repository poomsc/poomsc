import React, { useContext } from "react";
import { HiOutlineMenuAlt4, HiX } from "react-icons/hi";
import { SidebarContext } from "context/sidebarContext";

const Navbar = (): JSX.Element => {
  const { toggleSidebar, isSidebarOpen } = useContext(SidebarContext);

  return (
    <header className="shadow-bottom z-20  bg-dark-gray dark:bg-gray-800 lg:hidden">
      <div className="container flex items-center justify-between mx-auto px-6 h-full dark:text-purple-300 text-purple-600">
        {/* <img src={UniverseLogo} className="w-16" /> */}
        <button
          className="focus:shadow-outline-purple -ml-1 mr-5 p-1 rounded-md focus:outline-none"
          onClick={toggleSidebar}
          aria-label="Menu"
        >
          {isSidebarOpen ? (
            <HiX className="text-xl" />
          ) : (
            <HiOutlineMenuAlt4 className="text-xl" />
          )}
          {isSidebarOpen ? "Hello" : "world"}
        </button>
      </div>
    </header>
  );
};

export default Navbar;
