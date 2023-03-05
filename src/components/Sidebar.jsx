import React from "react";
import plus from "../assets/plus.png";

const Sidebar = (props) => {
  return (
    <>
      <div className="px-8 sm:px-14 border-r-2 border-black fixed left-0 h-[80%]">
        <img
          src={plus}
          alt="plus"
          className="w-20 cursor-pointer"
          onClick={() => props.addNote()}
        />
      </div>
    </>
  );
};

export default Sidebar;
