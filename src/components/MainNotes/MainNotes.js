// importing libraries
import React from "react";
import "./MainNotes.css";

// functionality start from here
const Notes = (props) => {
  return <div className="main-pre-notes">{props.notes}</div>;
};
export default Notes;
