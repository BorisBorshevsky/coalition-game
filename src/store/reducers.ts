import {Actions, gameAction} from "./actions";
import {GAME_SCREEN, GameCoalitionsZeroValue, Player, SETUP_SCREEN} from "../types/game";
import {GamePlayOfferState, initialGamePlayState, StateShape,} from "./state";

export const defaultState: StateShape = {
  gameCoalitions: GameCoalitionsZeroValue,
  gamePlay: initialGamePlayState,
  screen: SETUP_SCREEN

}

const appReducer = (state: StateShape = defaultState,
                    action: gameAction): StateShape => {
  switch (action.type) {
    case Actions.SUBMIT_OFFER:
      return {
        ...state,
        gamePlay: {
          ...state.gamePlay,
          allOffers: [...state.gamePlay.allOffers, action.payload.offer],
          gamePlayOfferState: GamePlayOfferState.ACCEPT_OFFER,
        }
      }
    case Actions.START_GAME:
      return {
        ...state,
        screen: GAME_SCREEN,
        gameCoalitions: action.payload.gameCoalitionsValues,
        gamePlay: {
          ...state.gamePlay,
          gamePlayOfferState: GamePlayOfferState.SELECT_COALITION,
          allOffers: [{
            offerFrom: Player.P2, split: {
              coalitionId: "23",
              [Player.P1]: 0,
              [Player.P2]: action.payload.gameCoalitionsValues["23"] / 2,
              [Player.P3]: action.payload.gameCoalitionsValues["23"] / 2,
            }
          }]

        }
      }
    case Actions.SELECT_COALITION:
      return {
        ...state,
        gamePlay: {
          ...state.gamePlay,
          selectedCoalition: action.payload.coalition,
          gamePlayOfferState: GamePlayOfferState.SUGGEST_OFFER,
        }
      }

    case Actions.BACK:
      return {
        ...state,
        gamePlay: {
          ...state.gamePlay,
          gamePlayOfferState: GamePlayOfferState.SELECT_COALITION,
        }
      }
    case Actions.RESTART_GAME:
      return {
        ...state,
        screen: "SETUP_SCREEN"
      }
    default:
      return state;
  }
}


export default appReducer;
