import {StateShape} from "./state";


const currentOffer = (state: StateShape) => {
  return state.gamePlay.allOffers[0]
}