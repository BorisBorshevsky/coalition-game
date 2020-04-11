import { GameCoalitionsCombination, Player } from "./game";

export const CoalitionsCombinations: GameCoalitionsCombination = {
  "12": [Player.P1, Player.P2],
  "13": [Player.P1, Player.P3],
  "23": [Player.P2, Player.P3],
  "123": [Player.P1, Player.P2, Player.P3],
};
