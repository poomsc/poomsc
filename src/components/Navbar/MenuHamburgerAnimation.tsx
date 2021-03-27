import React, { useState, useEffect } from "react";
import "./style.css";
import { observer } from "mobx-react";
import { useStores } from "hooks/useStore";

const MenuHamburgerAnimation = observer((applicationStore) => {
  const { setIsNavbarOpen } = applicationStore;

  const [isOpen, setIsOpen] = useState(false);

  const handleOnClick = () =>
    applicationStore.setIsNavbarOpen(!applicationStore.isNavbarOpen);
  return (
    <div
      className={`menuIconStyle ${isOpen && "open"}`}
      onClick={() => {
        handleOnClick();
        console.log("after : ",applicationStore.isNavbarOpen)
      }}
    >
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
});

export default MenuHamburgerAnimation;
