import React, { useEffect, useState } from "react";
import gameService from "../services/game-service";
import Game from "../models/game";
import useGame from "../hooks/useGame";
import { SimpleGrid } from "@chakra-ui/react";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";

interface FetchGamesResponse {
  count: number;
  results: Game[];
}

const GameGrid = () => {
  const { games, error, isLoading } = useGame();
  const skeletons = [1, 2, 3, 4, 5, 6];

  return (
    <>
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
        spacing={6}
        padding="8"
      >
        {isLoading &&
          skeletons.map((skeleton) => <GameCardSkeleton key={skeleton} />)}
        {games.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
