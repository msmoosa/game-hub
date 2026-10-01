import { useState, useEffect } from "react";
import useData from "./useData";
import Game from "../models/game";
import gameService, { FetchGamesResponse } from "../services/game-service";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";
import { Genre } from "./useGenres";

interface Platform {
  id: number;
  name: string;
  slug: string;
}

const useGame = (selectedGenre: Genre | null) =>
  useData<Game>("/games", { params: { genres: selectedGenre?.id } }, [
    selectedGenre?.id,
  ]);

export default useGame;
