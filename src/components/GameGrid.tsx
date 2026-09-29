import React, { useEffect, useState } from "react";
import gameService from "../services/game-service";
import Game from "../models/game";
import useGame from "../hooks/useGame";
import { SimpleGrid } from "@chakra-ui/react";
import GameCard from "./GameCard";

interface FetchGamesResponse {
  count: number;
  results: Game[];
}

const GameGrid = () => {
  const { games, error } = useGame();

  return (
    <>
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
        spacing={6}
        padding="8"
      >
        {games.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
