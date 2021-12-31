// importing libaries
import React, { useState } from "react";
import Preloading from "../components/Preloading/Preloading";
import Loading from "../components/Loading/Loading";
import MainNavigation from "./MainNavigation";
import Notes from "../components/MainNotes/Notes";

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
      }, 5000);
    };
    console.log(state);
    stateManagment();
    setFlag(false);
  }

  return (
    <>
      {state === "preloading" && <Preloading />}
      {state === "loading" && <Loading />}
      {state === "main" && (
        <>
          <MainNavigation />
          <Notes />
        </>
      )}
    </>
  );
};

export default Main;
