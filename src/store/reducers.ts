import { combineReducers } from "redux";
import { Actions, gameAction } from "./actions";
import {
  GAME_SCREEN,
  GameCoalitions,
  GameCoalitionsZeroValue,
  ScreenType,
  SETUP_SCREEN,
} from "../types/game";

const gameCoalitions = (
  state: GameCoalitions = GameCoalitionsZeroValue,
  action: gameAction
) => {
  switch (action.type) {
    case Actions.START_GAME:
      return action.payload.gameCoalitions;
    default:
      return state;
  }
};

const screen = (screen: ScreenType = SETUP_SCREEN, action: gameAction) => {
  switch (action.type) {
    case Actions.START_GAME:
      return GAME_SCREEN;
    default:
      return screen;
  }
};

export const appReducer = combineReducers({
  gameCoalitions: gameCoalitions,
  screen: screen,
});

export default appReducer;
