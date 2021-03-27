import { createContext } from "react";
import { ApplicationStore } from "./applicationStore";

// export default RootStore;
export const rootStoreContext = createContext({
  applicationStore: new ApplicationStore()
});
