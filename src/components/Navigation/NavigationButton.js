// importing files
import React, { useState } from "react";
import "./NavigationButton.css"; // css file

// functionality start from here
const NavButton = (props) => {
  const [flag, setflag] = useState(true);
  const _click = (event) => {
    console.warn(`|>_ ${event.target.innerHTML} is clicked`);
    if (window.innerWidth < 700) {
      document.getElementsByClassName("navigation-overlay")[0].style.width =
        "0%";
    }
    activeButton(event.target.id);
    props.setdata(event.target.innerHTML);
  };
  const activeButton = (id) => {
    let _active = document.getElementsByClassName("navigation-button active");
    if (_active.length > 0) {
      _active[0].className = "navigation-button";
    }
    let current = document.getElementById(id);
    current.classList = "navigation-button active";
  };
  setTimeout(() => {
    if (flag) {
      let _active = document.getElementsByClassName("navigation-button")[0];
      _active.className = "navigation-button active";
      setflag(false);
    }
  }, 0);
  return (
    <button id={props.id} className="navigation-button" onClick={_click}>
      {props.notes}
    </button>
  );
};

// exporting components
export default NavButton;

/**
 * props.id
 * props.notes
 */
