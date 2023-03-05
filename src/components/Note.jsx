import React from "react";

const Note = (props) => {
  return (
    <div
      className="p-6 rounded-xl"
      style={{ backgroundColor: props.note.color }}
    >
      <textarea
        cols="25"
        rows="8"
        className="resize-none bg-transparent outline-none"
        disabled
        value={props.note.title}
      />
      <p>{props.note.time}</p>
    </div>
  );
};

export default Note;
