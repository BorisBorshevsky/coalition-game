import {
  CoalitionId,
  GameCoalitionsValues,
  GameCoalitionsZeroValue,
  Player,
  ScreenType,
  SETUP_SCREEN,
  Split,
} from "../types/game";

export interface StateShape {
  gameCoalitions: GameCoalitionsValues;
  screen: ScreenType;
  gamePlay: GamePlayState;
}

export interface GamePlayState {
  currentTurn: Player;
  gamePlayOfferState: GamePlayOfferState;
  selectedCoalition: CoalitionId
  allOffers: Offer[]
}

export interface Offer {
  offerFrom: Player,
  split: Split
}



export enum GamePlayOfferState {
  SELECT_COALITION = "SELECT_COALITION",
  SUGGEST_OFFER = "SUGGEST_OFFER",
  ACCEPT_OFFER = "ACCEPT_OFFER",
}

export const initialGamePlayState: GamePlayState = {
  allOffers: [],
  selectedCoalition: "12",
  currentTurn: Player.P1,
  gamePlayOfferState: GamePlayOfferState.SUGGEST_OFFER
};

export const initialState: StateShape = {
  gameCoalitions: GameCoalitionsZeroValue,
  screen: SETUP_SCREEN,
  gamePlay: initialGamePlayState,
};
