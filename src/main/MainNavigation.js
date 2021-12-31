// importing libraries
import React from "react";
// importing components here
import Navigation from "../components/Navigation/Navigation";

// functionality start from here
const mainNavigation = () => {
  let _deviceType = window.innerWidth <= 700 ? "mobile" : "window";
  console.log(`Using device ${_deviceType}`);
  return <Navigation device={_deviceType} />;
};

// exporting the component
export default mainNavigation;
