import {
  CoalitionId,
  defaultGameCoalitionsValues,
  GameCoalitionsValues,
  Offer,
  Player,
} from "../types/game";

export type GameScreen = "INTRO" | "SELECT_COAL" | "OFFER" | "ACK" | "FINISHED";
export type ChangeReason = "OFFER_REJECTED" | "OFFER_ACCEPTED";

export interface StateShape {
  // gameCoalitions: GameCoalitionsValues;
  // screen: ScreenType;
  // gamePlay: GamePlayState;
  coalitionsValues: GameCoalitionsValues;
  screen: GameScreen;
  players: Array<Player>;
  currentTurn: Player;
  coalitionForOffer: CoalitionId;
  offers: Array<Offer>;
  reason: ChangeReason;
  states: Array<StateShape>;
}

export const defaultState: StateShape = {
  screen: "INTRO",
  coalitionsValues: defaultGameCoalitionsValues,
  players: [Player.P1, Player.P2, Player.P3],
  currentTurn: Player.P1,
  coalitionForOffer: "23",
  offers: [],
  reason: "OFFER_ACCEPTED",
  states: [],

  // gameCoalitions: GameCoalitionsZeroValue,
  // screen: SETUP_SCREEN,
  // gamePlay: initialGamePlayState,
};
