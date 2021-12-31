// importing library
import React from "react";
import "./Notes.css";
import NotesHeading from "./NotesHeading";
import MainNotes from "./MainNotes";

// functionality start from here
const Notes = (props) => {
  let preNotes = props.notes;
  return (
    <div id={props.name} className="main-notes-section">
      <NotesHeading heading={props.name} />
      <MainNotes notes={preNotes} />
    </div>
  );
};

// exporting functionlaity
export default Notes;
