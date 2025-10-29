import { useState } from "react";

import React from "react";

function Form() { 
  return (
    <div className="w-full py-15 flex justify-center items-center bg-neutral-300">
      <form className="bg-white p-5 rounded">
        <legend className="font-semibold text-2xl">Add game</legend>
        <label htmlFor="">Game name</label> <br />
        <input className="my-2 outline-2 mx-4 p-2 rounded" type="text" name="gameName" id="gameName" /> <br />
        <label htmlFor="">Release Year</label> <br />
        <input className="my-2 outline-2 mx-4 p-2 rounded" type="text" name="gameName" id="gameName" /> <br />
        <label htmlFor="">Studio name</label> <br />
        <input className="my-2 outline-2 mx-4 p-2 rounded" type="text" name="gameName" id="gameName" /> <br />
        <label htmlFor="">Genre</label> <br />
        <input className="my-2 outline-2 mx-4 p-2 rounded" type="text" name="gameName" id="gameName" /> <br />
        <input className="bg-gray-300 p-2 m-2 rounded" type="submit" value="submit" />
      </form>
    </div>
  );
}

export default Form;
