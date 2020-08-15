import {
  GameCoalitionsCombination,
  GameCoalitionsValues,
  Player,
} from "./game";

export const CoalitionsCombinations: GameCoalitionsCombination = {
  "12": [Player.P1, Player.P2],
  "13": [Player.P1, Player.P3],
  "23": [Player.P2, Player.P3],
  "123": [Player.P1, Player.P2, Player.P3],
};

export const CoalitionsValues: GameCoalitionsValues = {
  "12": 70,
  "13": 60,
  "23": 50,
  "123": 100,
};

export const AllPlayers: [Player, Player, Player] = [
  Player.P1,
  Player.P2,
  Player.P3,
];
