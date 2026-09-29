import React, { useEffect, useState } from "react";
import gameService from "../services/game-service";
import Game from "../models/game";
import useGame from "../hooks/useGame";

interface FetchGamesResponse {
  count: number;
  results: Game[];
}

const GameGrid = () => {
  const { games, error } = useGame();

  return (
    <>
      <p>{error ? "Error loading games" : "Games List"}</p>
      <ul>
        {games.map((game) => (
          <li key={game.id}>{game.name}</li>
        ))}
      </ul>
    </>
  );
};

export default GameGrid;
