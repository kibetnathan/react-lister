import { useState } from "react";

import React from "react";

function Form({ games, setGames }) {
  const [gameName, setGameName] = useState("");
  const [gameYear, setGameYear] = useState("");
  const [gameStudio, setGameStudio] = useState("");
  const [gameGenre, setGameGenre] = useState("");

const handleSubmit = (e) => {
  e.preventDefault();

  const newGame = {
    name: gameName,
    year: gameYear,
    studio: gameStudio,
    genre: gameGenre,
  };


  setGameName("");
  setGameYear("");
  setGameStudio("");
  setGameGenre("");
  setGames([...games, newGame]);
}
  return (
    <div className="w-full py-15 flex justify-center items-center bg-neutral-300">
      <form onSubmit={handleSubmit} className="bg-white p-5 rounded">
  <legend className="font-semibold text-2xl">Add game</legend>

  <label htmlFor="gameName">Game name</label> <br />
  <input
    className="my-2 outline-2 mx-4 p-2 rounded"
    type="text"
    name="gameName"
    id="gameName"
    value={gameName}
    onChange={(e) => setGameName(e.target.value)} // ✅
  />
  <br />

  <label htmlFor="gameYear">Release Year</label> <br />
  <input
    className="my-2 outline-2 mx-4 p-2 rounded"
    type="text"
    name="gameYear"
    id="gameYear"
    value={gameYear}
    onChange={(e) => setGameYear(e.target.value)} // ✅
  />
  <br />

  <label htmlFor="gameStudio">Studio name</label> <br />
  <input
    className="my-2 outline-2 mx-4 p-2 rounded"
    type="text"
    name="gameStudio"
    id="gameStudio"
    value={gameStudio}
    onChange={(e) => setGameStudio(e.target.value)} // ✅
  />
  <br />

  <label htmlFor="gameGenre">Genre</label> <br />
  <input
    className="my-2 outline-2 mx-4 p-2 rounded"
    type="text"
    name="gameGenre"
    id="gameGenre"
    value={gameGenre}
    onChange={(e) => setGameGenre(e.target.value)} // ✅
  />
  <br />

  <input
    className="bg-gray-300 p-2 m-2 rounded cursor-pointer"
    type="submit"
    value="Submit"
  />
</form>

    </div>
  );
}

export default Form;
