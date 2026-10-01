import Game from "../models/game";
import apiClient from "./api-client";

interface FetchGamesResponse {
  results: Game[];
}

class GameService {
  getAll(): Promise<Game[]> {
    return apiClient.get<FetchGamesResponse>("/games").then((response) => {
      return response.data.results;
    });
  }
}

export default new GameService();
