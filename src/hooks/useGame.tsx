import useData from "./useData";
import Game from "../models/game";
import { GameQuery } from "../App";

interface Platform {
  id: number;
  name: string;
  slug: string;
}

const useGame = (gameQuery: GameQuery) =>
  useData<Game>(
    "/games",
    {
      params: {
        genres: gameQuery.genre?.id,
        parent_platforms: gameQuery.platform?.id,
        ordering: gameQuery.sortOrder,
      },
    },
    [gameQuery],
  );

export default useGame;
