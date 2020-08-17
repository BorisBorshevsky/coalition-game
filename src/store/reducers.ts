import { defaultState, GameScreen, StateShape } from "./state";
import { Actions, GameAction } from "./actions";
import {
  getMissingPlayer,
  getParticipants,
  isOfferAccepted,
  isOfferFinished,
  isOfferRejected,
} from "../types/helpers";
import { Offer, Player } from "../types/game";

export const appReducer = (
  state: StateShape = defaultState,
  action: GameAction
): StateShape => {
  switch (action.type) {
    case Actions.START_GAME:
      return {
        ...state,
        screen: "SELECT_COAL",
        coalitionsValues: { ...state.coalitionsValues },
        offers: [buildDefaultOffer(state)],
        states: [...state.states, cleanState(state)],
      };
    case Actions.RESTART_GAME:
      return { ...state, screen: "INTRO" };
    case Actions.SELECT_COALITION:
      return {
        ...state,
        screen: "OFFER",
        coalitionForOffer: action.payload.selectedCoalition,
        states: [...state.states, cleanState(state)],
      };
    case Actions.SUBMIT_OFFER:
      const { actor, selectedCoalition, split } = action.payload;
      const users = getParticipants(selectedCoalition);
      const offer: Offer = {
        actor,
        selectedCoalition,
        split,
        P1: "NON_RELEVANT",
        P2: "NON_RELEVANT",
        P3: "NON_RELEVANT",
      };
      users.forEach((u) => (offer[u] = "TBD"));
      offer[actor] = "PROPOSED";

      return {
        ...state,
        screen: "ACK",
        offers: [...state.offers, offer],
        states: [...state.states, cleanState(state)],
      };
    case Actions.RESPOND_OFFER:
      const { actor: resOfferActor, status } = action.payload;
      const lastOffer = { ...state.offers.pop()! };

      if (status === "ACCEPT") {
        lastOffer[resOfferActor] = "ACCEPTED";
      }

      if (status === "REJECT") {
        lastOffer[resOfferActor] = "REJECTED";
      }

      if (!isOfferFinished(lastOffer)) {
        return {
          ...state,
          offers: [...state.offers, lastOffer],
          states: [...state.states, cleanState(state)],
        };
      }

      //offer finished
      if (isOfferRejected(lastOffer)) {
        return {
          ...state,
          offers: [...state.offers, lastOffer],
          reason: "OFFER_REJECTED",
          screen: "SELECT_COAL",
          states: [...state.states, cleanState(state)],
        };
      }

      if (isOfferAccepted(lastOffer)) {
        let screen: GameScreen = "SELECT_COAL";

        if (lastOffer.selectedCoalition === "123") {
          screen = "FINISHED";
        }

        return {
          ...state,
          offers: [...state.offers, lastOffer],
          reason: "OFFER_ACCEPTED",
          screen: screen,
          currentTurn: getMissingPlayer(lastOffer.selectedCoalition),
          states: [...state.states, cleanState(state)],
        };
      }

      throw new Error("Should not happen");

    case Actions.UNDO:
      if (state.states) {
        const lastState = state.states[state.states.length - 1];

        return {
          ...lastState,
          states: state.states.slice(0, -1),
        };
      }

      return { ...state };

    case Actions.GIVE_UP:
      return {
        ...state,
        states: [...state.states, cleanState(state)],
        screen: "FINISHED",
      };

    case Actions.SETUP:
      return {
        ...state,
        screen: "SETUP",
        states: [...state.states, cleanState(state)],
      };
    case Actions.UPDATE_COALITION_VALUES:
      return {
        ...state,
        coalitionsValues: { ...action.payload.c },
      };

    default:
      return {
        ...state,
      };
  }
};

const cleanState = (s: StateShape): StateShape => {
  const res = { ...s };
  res.states = [];
  return res;
};

const buildDefaultOffer = (s: StateShape): Offer => {
  return {
    P1: "NON_RELEVANT",
    P2: "ACCEPTED",
    P3: "ACCEPTED",
    actor: Player.P1,
    selectedCoalition: "23",
    split: {
      P1: 0,
      P2: Math.floor(s.coalitionsValues["23"] / 2),
      P3: Math.ceil(s.coalitionsValues["23"] / 2),
    },
  };
};
