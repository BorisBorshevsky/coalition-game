import { GameCoalitions, ScreenType, SETUP_SCREEN } from "../types/game";

export interface CoalitionsGameGlobalState {
  gameCoalitions?: GameCoalitions;
  screen: ScreenType;
}

export const initialState: CoalitionsGameGlobalState = {
  screen: SETUP_SCREEN,
};
