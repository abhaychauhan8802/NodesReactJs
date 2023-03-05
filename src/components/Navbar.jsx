import React from "react";

const Navbar = () => {
  return (
    <div className="bg-black flex justify-between items-center px-20 py-5 fixed w-full top-0">
      <h1 className="text-white text-3xl font-mono">Navbar</h1>
      <div>
        <input
          type="text"
          className="bg-gray-800 py-2 px-4 outline-none rounded-md text-white"
          placeholder="Search..."
        />
      </div>
    </div>
  );
};

export default Navbar;
