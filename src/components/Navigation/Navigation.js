// importing libraries
import React, { useState } from "react";
import NavigationBar from "./NavigationBar";
import MobileNavigation from "./MobileNavigation";

// functionality start from here
const Navigation = (props) => {
  // using react hook
  const [Device, setDevice] = useState(props.device);
  // code for checking wheater application is using on mobile of not
  let checkwidth = () => {
    let width = window.innerWidth;
    if (width <= 700) {
      setDevice("mobile");
    } else {
      setDevice("window");
    }
  };

  window.addEventListener("resize", checkwidth); // Adding event handler on window resize
  return (
    <>
      {Device === "mobile" && <MobileNavigation />}
      {Device === "window" && <NavigationBar />}
    </>
  );
};
export default Navigation;
