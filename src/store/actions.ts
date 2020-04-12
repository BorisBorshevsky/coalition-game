import { GameCoalitions } from "../types/game";
import { Dispatch } from "redux";

export enum Actions {
  START_GAME = "START_GAME",
  RESTART_GAME = "RESTART_GAME",
  SHOW_MODAL = "SHOW_MODAL",
  HIDE_MODAL = "HIDE_MODAL",
}

interface startGameAction {
  type: Actions.START_GAME;
  payload: {
    gameCoalitions: GameCoalitions;
  };
}

interface restartGameAction {
  type: Actions.RESTART_GAME;
}

interface showModalAction {
  type: Actions.SHOW_MODAL;
  modalType: modalType;
  modalProps: any;
}

interface hideModalAction {
  type: Actions.HIDE_MODAL;
}

export type gameAction =
  | startGameAction
  | restartGameAction
  | showModalAction
  | hideModalAction;

export function startGame(gameCoalitions: GameCoalitions): startGameAction {
  return {
    type: Actions.START_GAME,
    payload: {
      gameCoalitions: gameCoalitions,
    },
  };
}

export function restartGame(): restartGameAction {
  return {
    type: Actions.RESTART_GAME,
  };
}

interface modalOptions {
  modalProps: any;
  modalType: modalType;
}

export type modalType = string;

export const showModal = (options: modalOptions) => (
  dispatch: Dispatch<gameAction>
) => {
  const { modalProps, modalType } = options;
  dispatch({
    type: Actions.SHOW_MODAL,
    modalProps: modalProps,
    modalType: modalType,
  });
};

export const hideModal = () => (dispatch: Dispatch<gameAction>) => {
  dispatch({
    type: Actions.HIDE_MODAL,
  });
};
