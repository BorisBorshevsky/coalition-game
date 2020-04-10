import { combineReducers } from "redux";
import { CoalitionsGameState } from "./state";
import { Actions, gameAction } from "./actions";

const gameCoalitions = (state: CoalitionsGameState, action: gameAction) => {
  switch (action.type) {
    case Actions.START_GAME:
      return {
        ...state,
        gameCoalitions: action.payload.gameCoalitions,
      };
    default:
      return state;
  }
};

export const appReducer = combineReducers({
  gameCoalitions: gameCoalitions,
});

export default appReducer;
