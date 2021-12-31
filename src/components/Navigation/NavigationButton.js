// importing files
import React from "react";
import "./NavigationButton.css"; // css file

// functionality start from here
const NavButton = (props) => {
  const _click = (event) => {
    console.warn(`|>_ ${event.target.innerHTML} is clicked`);
  };
  return (
    <button id={props.id} className="navigation-button" onClick={_click}>
      {props.notes}
    </button>
  );
};

// exporting components
export default NavButton;
