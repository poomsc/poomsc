import React from "react";
import { Web3ReactProvider } from "@web3-react/core";
import getLibrary from "utils/getLibrary";
import Routes from "routes/routes";
import Navbar from "components/Navbar";
import MenuHamburgerAnimation from "components/Navbar/MenuHamburgerAnimation";

function App() {
  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <Navbar />
      <MenuHamburgerAnimation />
      <Routes />
    </Web3ReactProvider>
  );
}

export default App;
