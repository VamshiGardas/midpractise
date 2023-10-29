import React from "react";
import "../CSS/Note.css";

function Note(props) {
  function handleClick() {
    props.onDelete(props.id);
  }

  return (
    <div className="note">
      <span> {props.id + 1}</span>{" "}
      {/* Displaying the note ID (offset by 1 for display purposes) */}
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={handleClick}>DELETE</button>
    </div>
  );
}

export default Note;
