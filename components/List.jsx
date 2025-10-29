import { useState } from "react";
import React from "react";
import Form from "./Form";

function List() {
  const [games, setGames] = useState([
    {
      name: "The Legend of Zelda: Breath of the Wild",
      year: "2017",
      studio: "Nintendo EPD",
      genre: "Action-Adventure",
    },
    {
      name: "The Witcher 3: Wild Hunt",
      year: "2015",
      studio: "CD Projekt Red",
      genre: "Action RPG",
    },
    {
      name: "Dark Souls",
      year: "2011",
      studio: "FromSoftware",
      genre: "Action RPG",
    },
    {
      name: "Portal 2",
      year: "2011",
      studio: "Valve Corporation",
      genre: "Puzzle-Platformer",
    },
    {
      name: "Red Dead Redemption 2",
      year: "2018",
      studio: "Rockstar Games",
      genre: "Action-Adventure",
    },
    {
      name: "Hades",
      year: "2020",
      studio: "Supergiant Games",
      genre: "Roguelike Action",
    },
    {
      name: "Minecraft",
      year: "2011",
      studio: "Mojang Studios",
      genre: "Sandbox/Survival",
    },
    {
      name: "Elden Ring",
      year: "2022",
      studio: "FromSoftware",
      genre: "Action RPG",
    },
    {
      name: "Celeste",
      year: "2018",
      studio: "Maddy Makes Games",
      genre: "Platformer",
    },
    {
      name: "Hollow Knight",
      year: "2017",
      studio: "Team Cherry",
      genre: "Metroidvania",
    },
    {
      name: "Stardew Valley",
      year: "2016",
      studio: "ConcernedApe",
      genre: "Farming Simulation",
    },
    {
      name: "God of War",
      year: "2018",
      studio: "Santa Monica Studio",
      genre: "Action-Adventure",
    },
    {
      name: "Baldur's Gate 3",
      year: "2023",
      studio: "Larian Studios",
      genre: "RPG",
    },
    {
      name: "Overwatch",
      year: "2016",
      studio: "Blizzard Entertainment",
      genre: "First-Person Shooter",
    },
    { name: "Undertale", year: "2015", studio: "Toby Fox", genre: "RPG" },
  ]);
  return (
    <>
      <div className="w-full flex justify-center items-center">
        <div className="w-[50%] flex flex-col">
          <h2 className="text-2xl">Video Games of the 20th Century</h2>
          <ul className="text-left list-decimal">
            {games.map((game, index) => (
              <li
                key={index}
                className="my-1"
              >
                <span>
                  <span className="font-semibold">{game.name}</span> (
                  {game.year}) - {game.studio} - {game.genre}
                </span>

                <button
                  className="bg-red-500 px-3 py-1 rounded text-sm text-white hover:bg-red-600"
                  onClick={() => {
                    const updatedGames = games.filter((_, i) => i !== index);
                    setGames(updatedGames);
                  }}
                >
                  Del
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <Form games={games} setGames={setGames} />
    </>
  );
}

export default List;
