import React, { useContext } from "react";
import "./App.css";
import ConnectWallet from "components/ConnectWallet";
import Sidebar from "components/Sidebar";
import { SidebarContext } from "context/sidebarContext";


function App() {
  const { isSidebarOpen, closeSidebar } = useContext(SidebarContext);
  return (
    <div
      className={`flex h-screen bg-secondary dark:bg-gray-900 ${
        isSidebarOpen && "overflow-hidden"
      }`}
    >
      <Sidebar />
      <div className="flex flex-1 flex-col w-full">
        {/* <Navbar />
          <Main>
            <Dashboard />
          </Main> */}
      </div>
    </div>
  );
}

export default App;
