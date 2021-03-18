import React from "react";
import "./App.css";

function App() {
  return <div>Hello world</div>;
}

export default App;
// import React, { useContext } from "react";
// import "./App.css";
// import ConnectWallet from "components/ConnectWallet";
// import Sidebar from "components/Sidebar";
// import { SidebarContext } from "context/sidebarContext";
// import Main from "container/Main";
// import Navbar from "components/Navbar";

// function App() {
//   const { isSidebarOpen } = useContext(SidebarContext);
//   return (
//     <div
//       className={`flex h-screen bg-secondary dark:bg-gray-900 ${
//         isSidebarOpen && "overflow-hidden"
//       }`}
//     >
//       {/* <Sidebar /> */}
//       <div className="flex flex-1 flex-col w-full">
//         <Navbar />
//         <Main>
//           Hello world
//         </Main>
//       </div>
//     </div>
//   );
// }

// export default App;
