import React, { useState, useMemo, useEffect } from "react";
import { useWeb3React } from "@web3-react/core";
import { Web3Provider } from "@ethersproject/providers";
import { ConnectorType } from "types/web3ConnectorType";
import { useEagerConnect, useInactiveListener } from "hooks/connectorHook";

type ContextType = {
  isSidebarOpen: boolean;
  toggleSidebar: () => void;
  closeSidebar: () => void;
  blockNumber?: number;
};

export const SidebarContext = React.createContext({} as ContextType);

export const ContextProvider = ({
  children,
}: React.PropsWithChildren<React.ReactNode>): JSX.Element => {
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);
  const [
    activatingConnector,
    setActivatingConnector,
  ] = useState<ConnectorType>();
  const [blockNumber, setBlockNumber] = useState<number>();

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
  const closeSidebar = () => setIsSidebarOpen(false);

  const web3Context = useWeb3React<Web3Provider>();
  const { library, chainId, connector } = web3Context;

  useEffect(() => {
    if (activatingConnector && activatingConnector === connector) {
      setActivatingConnector(undefined);
    }
  }, [activatingConnector, connector]);

  const triedEager = useEagerConnect();
  useInactiveListener((!triedEager || activatingConnector) as boolean);

  useEffect(() => {
    if (library) {
      let stale = false;

      library
        .getBlockNumber()
        .then((blockNumber: number) => {
          if (!stale) {
            setBlockNumber(blockNumber);
          }
        })
        .catch(() => {
          if (!stale) {
            setBlockNumber(undefined);
          }
        });

      const updateBlockNumber = (blockNumber: number) => {
        setBlockNumber(blockNumber as number);
      };

      library.on("block", updateBlockNumber);
      return () => {
        stale = true;
        library.removeListener("block", updateBlockNumber);
        setBlockNumber(undefined);
      };
    }
  }, [library, chainId]);

  const value = useMemo(
    () => ({
      isSidebarOpen,
      toggleSidebar,
      closeSidebar,
      blockNumber,
    }),
    [isSidebarOpen, blockNumber]
  );

  return (
    <SidebarContext.Provider value={value}>{children}</SidebarContext.Provider>
  );
};
