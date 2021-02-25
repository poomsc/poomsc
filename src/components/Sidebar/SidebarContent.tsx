import React, { useContext, useState, useEffect } from "react";
import UniverseLogo from "assets/images/testa-universe.svg";
import EthLogo from "assets/images/Astronaut.svg";
import memberIcon from "assets/icon/ic-member.svg";
import copyIcon from "assets/icon/ic-copy.svg";
import { useClipboard } from "use-clipboard-copy";
import { HiX } from "react-icons/hi";
import { FiCopy } from "react-icons/fi";
import { formatUnits } from "@ethersproject/units";
import { contractName } from "constants/index";
import { useContract } from "utils/web3CoreFunction";
import { useWeb3React } from "@web3-react/core";
import { Web3Provider } from "@ethersproject/providers";
import { SidebarContext } from "context/sidebarContext";

const BlackCardStyled = ({
  children,
}: React.PropsWithChildren<React.ReactNode>): JSX.Element => {
  return (
    <div
      style={{ borderRadius: "18px" }}
      className="px-4 py-2 w-full bg-secondary shadow-inner"
    >
      {children}
    </div>
  );
};

const OutlineCardStyled = ({
  children,
}: React.PropsWithChildren<React.ReactNode>): JSX.Element => {
  return (
    <div
      style={{ borderRadius: "18px" }}
      className="ripple inline-block my-4 py-3 w-full text-center text-white text-2xl leading-6 bg-transparent border-2 border-primary focus:outline-none transition"
    >
      {children}
    </div>
  );
};

const SidebarContent: React.FC = () => {
  const {
    closeSidebar,
  } = useContext(SidebarContext);
  const context = useWeb3React<Web3Provider>();
  const { account } = context;
  const [clickCopy, setClickCopy] = useState(false);


  const clipboard = useClipboard();
  return (
    <div className="relative items-center py-4 h-screen dark:text-gray-400 text-gray-500">
      <div className="pb-6 px-6">
        <div className="m block -mb-4 mt-1 px-6 lg:hidden">
          <HiX
            className="ml-auto text-primary text-xl cursor-pointer"
            onClick={closeSidebar}
          />
        </div>
        {/* <img src={UniverseLogo} className="mx-auto w-40" /> */}
        <BlackCardStyled>
          <div className="flex justify-between">
            {/* <img src={EthLogo} className="w-22" /> */}
            <div className="flex flex-col mt-auto">
              <div className="ml-auto text-white">ID 99</div>
              <div className="flex justify-items-end text-primary">
                0
              </div>
            </div>
          </div>
        </BlackCardStyled>
        <OutlineCardStyled>
          <div className="mx-auto">0 TESTA</div>
        </OutlineCardStyled>
        <OutlineCardStyled>
          <div className="mx-auto">0 jTESTA</div>
        </OutlineCardStyled>
        <BlackCardStyled>
          <p className="text-white">Affiliate Link</p>
          <div
            className="flex justify-between -mx-2 my-2 px-4 py-2 bg-dark-gray rounded-full cursor-pointer"
            onClick={() => {
              clipboard.copy(
                `${window.location.origin}/register?ref=${account}`
              );
              setClickCopy(true);
              setTimeout(() => {
                setClickCopy(false);
              }, 1500);
            }}
          >
            <div
              className={`w-40 text-sm truncate ${
                clickCopy ? "text-primary" : "text-white"
              }`}
            >
              {clickCopy ? "Copied!" : account}
            </div>
            <div className="my-auto cursor-pointer">
              <FiCopy />
            </div>
          </div>
        </BlackCardStyled>
        <br />
        <BlackCardStyled>
          <div className="flex flex-col items-center">
            <p className="my-1 text-white text-2xl font-semibold">
              0 ETH
            </p>
            <p className="my-1 text-primary text-sm">TOTAL REWARDS EARNED</p>
            <hr className="w-full border-white rounded-full" />
            <p className="my-1 text-white text-lg font-semibold">
              Claimable Rewards
            </p>
            <p className="my-1 text-white text-3xl font-semibold">
              0 ETH
            </p>
   
          </div>
        </BlackCardStyled>
      </div>
    </div>
  );
};

export default SidebarContent;
