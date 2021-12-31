// importing library
import React from "react";
import "./Notes.css";
import NotesHeading from "./NotesHeading";
import MainNotes from "./MainNotes";
// importing main notes here
import notesRender from "../../data/NotesRender";

// functionality start from here
const Notes = (props) => {
  let _Input = props.data;
  let preNotes = notesRender();
  let filterNotes = preNotes.filter((note) => note.name === _Input);
  filterNotes = filterNotes[0]["fname"]();
  return (
    <div id={props.name} className="main-notes-section">
      <NotesHeading heading={_Input} />
      <MainNotes notes={filterNotes} />
    </div>
  );
};

// exporting functionlaity
export default Notes;
