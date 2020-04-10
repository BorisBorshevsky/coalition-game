import {gameCoalitions} from "../types/game";

export enum Actions {
    START_GAME = "START_GAME"
}

interface startGameAction {
    type: Actions.START_GAME,
    payload: {
        gameCoalitions: gameCoalitions
    }
}


export type gameAction = startGameAction

export function startGame(gameCoalitions: gameCoalitions): startGameAction {
    return {
        type: Actions.START_GAME,
        payload: {
            gameCoalitions: gameCoalitions
        }
    }
}