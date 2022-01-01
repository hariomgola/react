// importing libraries
import React, { useState } from "react";
import MainNavigation from "./MainNavigation";
import Notes from "../components/MainNotes/Notes";

// functionality
const MainContent = (props) => {
  const [data, setdata] = useState("React Notes");
  return (
    <>
      <MainNavigation setdata={setdata} />
      <Notes data={data} />
    </>
  );
};

// export
export default MainContent;

/**
 * No props requiered
 */
