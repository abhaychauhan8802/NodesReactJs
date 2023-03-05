import React from "react";
import Note from "./Note";

const NoteContainer = (props) => {
  return (
    <>
      <div className="ml-36 sm:ml-48 px-14">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-8 items-center">
          {props.notes.map((note, index) => {
            return <Note note={note} key={index} />;
          })}
        </div>
      </div>
    </>
  );
};

export default NoteContainer;
