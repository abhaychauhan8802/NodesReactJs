import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import NoteContainer from "./components/NoteContainer";
import AddNote from "./components/AddNote";

function App() {
  const [addNotePrompt, setAddNotePrompt] = useState(false);
  const [notes, setNotes] = useState([
    {
      title: "Note App in React Js",
      time: "2:10 PM",
      color: "cyan",
    },
    {
      title: "Note App in React Js",
      time: "2:10 PM",
      color: "green",
    },
  ]);

  const addNote = () => {
    setAddNotePrompt(true);
  };

  return (
    <>
      <Navbar />
      <div className="w-screen h-screen flex pt-36 pb-10">
        <Sidebar addNote={addNote} />
        <NoteContainer notes={notes} />
        {addNotePrompt === true ? <AddNote /> : null}
      </div>
    </>
  );
}

export default App;
