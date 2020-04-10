import { GameCoalitions } from "../types/game";

export enum Actions {
  START_GAME = "START_GAME",
}

interface startGameAction {
  type: Actions.START_GAME;
  payload: {
    gameCoalitions: GameCoalitions;
  };
}

export type gameAction = startGameAction;

export function startGame(gameCoalitions: GameCoalitions): startGameAction {
  return {
    type: Actions.START_GAME,
    payload: {
      gameCoalitions: gameCoalitions,
    },
  };
}
