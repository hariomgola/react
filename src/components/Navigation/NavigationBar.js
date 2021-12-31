// importing library
import React from "react";
import "./NavigationBar.css";
import NotesRender from "../../data/NotesRender";
// importing component
import NavigationButton from "./NavigationButton";

// functionality start from here
const Navigation = (props) => {
  let notes = NotesRender();
  return (
    <div className="navigation-bar">
      {notes.map((note) => (
        <NavigationButton
          key={note.id}
          id={note.id}
          notes={note.name}
          setdata={props.setdata}
        />
      ))}
    </div>
  );
};

// export
export default Navigation;

/**
 * props.id
 * props.name
 * props.notes
 * props.setdata // usestatecall
 */
