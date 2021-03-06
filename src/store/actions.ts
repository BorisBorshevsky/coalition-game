import {
  CoalitionId,
  GameCoalitionsValues,
  Offer,
  Player,
  respStatus,
  Split,
} from "../types/game";

export enum Actions {
  START_GAME = "START_GAME",
  CONFIGURE_GAME = "CONFIGURE_GAME",
  RESTART_GAME = "RESTART_GAME",
  SELECT_COALITION = "SELECT_COALITION",
  SUBMIT_OFFER = "SUBMIT_OFFER",
  RESPOND_OFFER = "RESPOND_OFFER",
  UNDO = "UNDO",
  SETUP = "SETUP",
  UPDATE_COALITION_VALUES = "UPDATE_COALITION_VALUES",
  // ACCEPT_OFFER = "ACCEPT_OFFER",
  // REJECT_OFFER = "REJECT_OFFER",
  BACK = "BACK",
  GIVE_UP = "GIVE_UP",
}

export const updateCoalitions = (
  c: GameCoalitionsValues
): UpdateCoalitionsAction => {
  return {
    type: Actions.UPDATE_COALITION_VALUES,
    payload: {
      c,
    },
  };
};

export const setup = (): SetupAction => {
  return {
    type: Actions.SETUP,
    payload: {},
  };
};

export const giveUp = (): GiveUpAction => {
  return {
    type: Actions.GIVE_UP,
    payload: {},
  };
};

export const undo = (): UndoAction => {
  return {
    type: Actions.UNDO,
    payload: {},
  };
};

export const respondOffer = (
  actor: Player,
  status: respStatus
): RespondOfferAction => {
  return {
    type: Actions.RESPOND_OFFER,
    payload: {
      actor: actor,
      status: status,
    },
  };
};

export const startGame = (offer: Offer): StartGameAction => {
  return {
    type: Actions.START_GAME,
    payload: {
      offer: offer,
    },
  };
};

export const restartGame = (): RestartAction => {
  return {
    type: Actions.RESTART_GAME,
    payload: {},
  };
};

export const selectCoalition = (c: CoalitionId): SelectCoalitionAction => {
  return {
    type: Actions.SELECT_COALITION,
    payload: {
      selectedCoalition: c,
    },
  };
};

export const submitOffer = (
  split: Split,
  coalitionId: CoalitionId,
  offerFrom: Player
): SubmitOfferAction => {
  return {
    type: Actions.SUBMIT_OFFER,
    payload: {
      actor: offerFrom,
      selectedCoalition: coalitionId,
      split: split,
    },
  };
};

interface StartGameAction {
  type: Actions.START_GAME;
  payload: {
    offer: Offer;
  };
}

interface ConfigureAction {
  type: Actions.CONFIGURE_GAME;
  payload: {
    gameCoalitionsValues: GameCoalitionsValues;
  };
}

interface RestartAction {
  type: Actions.RESTART_GAME;
  payload: {};
}

interface SelectCoalitionAction {
  type: Actions.SELECT_COALITION;
  payload: {
    selectedCoalition: CoalitionId;
  };
}

interface SubmitOfferAction {
  type: Actions.SUBMIT_OFFER;
  payload: {
    actor: Player;
    selectedCoalition: CoalitionId;
    split: Split;
  };
}

//
interface UndoAction {
  type: Actions.UNDO;
  payload: {};
}

interface GiveUpAction {
  type: Actions.GIVE_UP;
  payload: {};
}

interface SetupAction {
  type: Actions.SETUP;
  payload: {};
}

interface RespondOfferAction {
  type: Actions.RESPOND_OFFER;
  payload: {
    actor: Player;
    status: respStatus;
  };
}

interface UpdateCoalitionsAction {
  type: Actions.UPDATE_COALITION_VALUES;
  payload: {
    c: GameCoalitionsValues;
  };
}

export type GameAction =
  | StartGameAction
  | ConfigureAction
  | SelectCoalitionAction
  | RestartAction
  | SubmitOfferAction
  | RespondOfferAction
  | UndoAction
  | GiveUpAction
  | SetupAction
  | UpdateCoalitionsAction;
