// importing libraries
import React from "react";
import "./Preloading.css";

// functionality start from here
const Preloading = () => {
  return (
    <>
      <div id="body" className="body">
        <span id="main">
          <span id="mainspan"></span>
          <span id="mainspan"></span>
          <span id="mainspan"></span>
          <span id="mainspan"></span>
        </span>
        <div className="base" id="base">
          <span id="basespan"></span>
          <div className="face"></div>
        </div>
      </div>
      <h1>Created and developer by @hariomgola (Github)</h1>
      <div id="longfazers" className="longfazers">
        <span id="longspan"></span>
        <span id="longspan"></span>
        <span id="longspan"></span>
        <span id="longspan"></span>
      </div>
    </>
  );
};

// exporting module
export default Preloading;
