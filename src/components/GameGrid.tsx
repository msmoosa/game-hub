import React, { useEffect, useState } from "react";
import gameService from "../services/game-service";
import Game from "../models/game";
import useGame from "../hooks/useGame";
import { SimpleGrid } from "@chakra-ui/react";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";

const GameGrid = () => {
  const { data, error, isLoading } = useGame();
  const skeletons = [1, 2, 3, 4, 5, 6];

  return (
    <>
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
        spacing={6}
        padding="8"
      >
        {isLoading &&
          skeletons.map((skeleton) => (
            <GameCardContainer key="{skeleton}">
              <GameCardSkeleton key={skeleton} />
            </GameCardContainer>
          ))}
        {data.map((game) => (
          <GameCardContainer key={game.id}>
            <GameCard key={game.id} game={game} />
          </GameCardContainer>
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
