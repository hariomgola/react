// importing library
import React from "react";
import "./Loading.css";

// functionlaity start here
const Loading = () => {
  const _workingfunctionality = () => {
    setTimeout(() => {
      let _loader = document.getElementById("loader");
      _loader.classList = "loader loader--active";
      setTimeout(() => {
        _loader.classList = "loader";
      }, 2000);
    }, 0);
  };
  _workingfunctionality();
  return (
    <div id="loader" className="loader">
      <div id="loadertile" className="loadertile"></div>
      <div id="loadertile" className="loadertile"></div>
      <div id="loadertile" className="loadertile"></div>
      <div id="loadertile" className="loadertile"></div>
      <div id="loadertile" className="loadertile"></div>
    </div>
  );
};

// exporting the component
export default Loading;
