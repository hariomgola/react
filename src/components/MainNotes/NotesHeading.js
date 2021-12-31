// importing libraries
import React from "react";
import "./NotesHeading.css";

// functionality start from here
const NotesHeading = (props) => {
  return <h1 className="heading">{props.heading}</h1>;
};

// exporting functionality
export default NotesHeading;
