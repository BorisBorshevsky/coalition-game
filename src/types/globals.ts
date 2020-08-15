import {Player,} from "./game";


export interface GameCoalitionsCombination {
  "12": Array<Player>;
  "13": Array<Player>;
  "23": Array<Player>;
  "123": Array<Player>;
}

export const CoalitionsCombinations: GameCoalitionsCombination = {
  "12": [Player.P1, Player.P2],
  "13": [Player.P1, Player.P3],
  "23": [Player.P2, Player.P3],
  "123": [Player.P1, Player.P2, Player.P3],
};


