import { useState, useEffect } from "react";
import Game from "../models/game";
import gameService from "../services/game-service";

const useGame = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    // Fetch games from the API here
    gameService
      .getAll()
      .then((games) => {
        setGames(games);
      })
      .catch((error) => {
        setError(error.message);
      });
  }, []);

  return { games, error };
};

export default useGame;
