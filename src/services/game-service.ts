import Game from "../models/game";

class GameService {
  getAll(): Promise<Game[]> {
    return Promise.resolve([
      {
        id: 1,
        name: "Game 1",
        background_image:
          "https://media.rawg.io/media/crop/600/400/games/b92/b92b55aeab9ed1777104f71f4b22a613.jpg",
      },
      {
        id: 2,
        name: "Game 2",
        background_image:
          "https://media.rawg.io/media/crop/600/400/games/b92/b92b55aeab9ed1777104f71f4b22a613.jpg",
      },
      {
        id: 3,
        name: "Game 3",
        background_image:
          "https://media.rawg.io/media/crop/600/400/games/b92/b92b55aeab9ed1777104f71f4b22a613.jpg",
      },
      {
        id: 4,
        name: "Game 4",
        background_image:
          "https://media.rawg.io/media/crop/600/400/games/b92/b92b55aeab9ed1777104f71f4b22a613.jpg",
      },
      {
        id: 5,
        name: "Game 5",
        background_image:
          "https://media.rawg.io/media/crop/600/400/games/b92/b92b55aeab9ed1777104f71f4b22a613.jpg",
      },
      {
        id: 6,
        name: "Game 6",
        background_image:
          "https://media.rawg.io/media/crop/600/400/games/b92/b92b55aeab9ed1777104f71f4b22a613.jpg",
      },
      {
        id: 7,
        name: "Game 7",
        background_image:
          "https://media.rawg.io/media/crop/600/400/games/b92/b92b55aeab9ed1777104f71f4b22a613.jpg",
      },
      {
        id: 8,
        name: "Game 8",
        background_image:
          "https://media.rawg.io/media/crop/600/400/games/b92/b92b55aeab9ed1777104f71f4b22a613.jpg",
      },
      {
        id: 9,
        name: "Game 9",
        background_image:
          "https://media.rawg.io/media/crop/600/400/games/b92/b92b55aeab9ed1777104f71f4b22a613.jpg",
      },
      {
        id: 10,
        name: "Game 10",
        background_image:
          "https://media.rawg.io/media/crop/600/400/games/b92/b92b55aeab9ed1777104f71f4b22a613.jpg",
      },
      {
        id: 11,
        name: "Game 11",
        background_image:
          "https://media.rawg.io/media/crop/600/400/games/b92/b92b55aeab9ed1777104f71f4b22a613.jpg",
      },
      {
        id: 12,
        name: "Game 12",
        background_image:
          "https://media.rawg.io/media/crop/600/400/games/b92/b92b55aeab9ed1777104f71f4b22a613.jpg",
      },
    ]);
  }
}

export default new GameService();
