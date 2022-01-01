// importing libraries
import React from "react";
import "./NotesHeading.css";

// functionality start from here
const NotesHeading = (props) => {
  return <h2 className="heading">{props.heading}</h2>;
};

// exporting functionality
export default NotesHeading;
