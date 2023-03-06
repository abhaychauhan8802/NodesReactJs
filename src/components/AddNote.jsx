import React from "react";

const AddNote = (props) => {
  return (
    <>
      <div className="bg-white shadow-2xl p-10 z-10 rounded-lg absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] h-2/3 w-1/2 box-border">
        <h1 className="text-center text-2xl pb-5">Add Note</h1>
        <textarea
          className="bg-transparent outline-none resize-none w-full h-[85%] border p-2 rounded"
          placeholder="Write your note here"
        />
        <div className="flex justify-end mt-3">
          <button
            className="rounded ml-5 px-4 py-2 border-2"
            onClick={() => props.cancleAddingNote()}
          >
            Cancle
          </button>
          <button className="bg-green-700 text-white rounded ml-5 px-3 py-2">
            Save
          </button>
        </div>
      </div>
    </>
  );
};

export default AddNote;
