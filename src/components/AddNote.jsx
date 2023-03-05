import React from "react";

const AddNote = () => {
  return (
    <>
      <div className="bg-white shadow-2xl p-10 z-10 rounded-lg absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] h-2/3 w-1/2">
        <h1 className="text-center text-2xl pb-5">Add Note</h1>
        <textarea
          className="bg-transparent outline-none resize-none w-full h-full"
          placeholder="Write your note here"
        />
      </div>
    </>
  );
};

export default AddNote;
