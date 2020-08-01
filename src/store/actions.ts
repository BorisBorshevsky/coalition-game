import {CoalitionId, GameCoalitionsValues, Player, Split} from "../types/game";


export enum Actions {
  START_GAME = "START_GAME",
  RESTART_GAME = "RESTART_GAME",
  SUBMIT_OFFER = "SUBMIT_OFFER",
  GIVE_UP = "GIVE_UP",
  SELECT_COALITION = "SELECT_COALITION",
  BACK = "BACK",
}

interface selectCoalitionAction {
  type: Actions.SELECT_COALITION,
  payload: {
    coalition: CoalitionId
  }
}

interface backAction {
  type: Actions.BACK,
  payload: {}
}


interface startGameAction {
  type: Actions.START_GAME;
  payload: {
    gameCoalitionsValues: GameCoalitionsValues;
  };
}

interface restartGameAction {
  type: Actions.RESTART_GAME;
}


interface giveUpAction {
  type: Actions.GIVE_UP;
  payload: {
    offerFrom: Player;
  };
}


interface submitOfferAction {
  type: Actions.SUBMIT_OFFER;
  payload: {
    offer: {
      split: Split;
      offerFrom: Player;
    }
  };
}

export type gameAction =
  | startGameAction
  | restartGameAction
  | submitOfferAction
  | giveUpAction
  | selectCoalitionAction
  | backAction;

export function startGame(gameCoalitions: GameCoalitionsValues): startGameAction {
  return {
    type: Actions.START_GAME,
    payload: {
      gameCoalitionsValues: gameCoalitions,
    },
  };
}

export function restartGame(): restartGameAction {
  return {
    type: Actions.RESTART_GAME,
  };
}

export const submitOffer = (split: Split, offerFrom: Player): submitOfferAction => {
  return {
    type: Actions.SUBMIT_OFFER,
    payload: {
      offer: {
        offerFrom,
        split,
      }
    },
  };
};

export const giveUp = (offerFrom: Player): giveUpAction => {
  return {
    type: Actions.GIVE_UP,
    payload: {
      offerFrom: offerFrom
    }
  }
}


export const selectCoalition = (c: CoalitionId): selectCoalitionAction => {
  return {
    type: Actions.SELECT_COALITION,
    payload: {
      coalition: c
    }
  }
}

export const back = (): backAction => {
  return {
    type: Actions.BACK,
    payload: {}
  }
}