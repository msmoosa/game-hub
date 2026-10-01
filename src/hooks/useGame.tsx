import { useState, useEffect } from "react";
import useData from "./useData";
import Game from "../models/game";
import gameService, { FetchGamesResponse } from "../services/game-service";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

interface Platform {
  id: number;
  name: string;
  slug: string;
}

const useGame = () => useData<Game>("/games");

export default useGame;
