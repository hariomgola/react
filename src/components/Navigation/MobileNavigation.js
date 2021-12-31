// importing the required files
import React from "react";
import "./MobileNavigation.css";
import NavigationBar from "./NavigationBar";

// functionality start from here
const MobileNavigation = (props) => {
  let expendMenu = () => {
    document.getElementsByClassName("navigation-overlay")[0].style.width =
      "100%";
  };
  let closeMenu = () => {
    document.getElementsByClassName("navigation-overlay")[0].style.width = "0%";
  };

  return (
    <>
      <div className="navigation-overlay">
        <button className="menu-button-close" onClick={closeMenu}>
          <span>Home</span>
        </button>
        <NavigationBar setdata={props.setdata} />
      </div>
      <button className="menu-button" onClick={expendMenu}>
        <span>Notes Menu</span>
      </button>
    </>
  );
};

export default MobileNavigation;
