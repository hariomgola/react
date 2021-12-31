// importing libraries
import React from "react";
// importing components here
import Navigation from "../components/Navigation/Navigation";

// functionality start from here
const mainNavigation = (props) => {
  let _deviceType = window.innerWidth <= 700 ? "mobile" : "window";
  console.warn(`Accessing notes on ${_deviceType}`);
  return <Navigation device={_deviceType} setdata={props.setdata} />;
};

// exporting the component
export default mainNavigation;
