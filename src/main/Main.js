// importing libaries
import React, { useState } from "react";
import Preloading from "../components/Preloading/Preloading";
import Loading from "../components/Loading/Loading";
import MainContent from "./MainContent";
import Footer from "../components/Footer/Footer";

// functionality start from here
const Main = () => {
  const [state, setState] = useState("preloading");
  const [flag, setFlag] = useState(true);
  if (flag) {
    const stateManagment = () => {
      setTimeout(() => {
        setState("loading");
        setTimeout(() => {
          setState("main");
        }, 3300);
      }, 4800);
    };
    console.warn(`Initial state - ${state}`);
    stateManagment();
    setFlag(false);
  }

  return (
    <>
      {state === "preloading" && <Preloading />}
      {state === "loading" && <Loading />}
      {state === "main" && (
        <>
          <MainContent />
          <Footer />
        </>
      )}
    </>
  );
};

export default Main;
