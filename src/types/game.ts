// Defines the enum of players. TODO
export enum Player {
  P1 = "P1",
  P2 = "P2",
  P3 = "P3",
}

export const SETUP_SCREEN = "SETUP_SCREEN";
export const GAME_SCREEN = "GAME_SCREEN";

// Defines screen types.
export type ScreenType = typeof SETUP_SCREEN | typeof GAME_SCREEN;

// Defines all possible coalitions.
export interface GameCoalitions {
  value12: number;
  value23: number;
  value13: number;
  value123: number;
}

export const GameCoalitionsZeroValue: GameCoalitions = {
  value12: 0,
  value13: 0,
  value23: 0,
  value123: 0,
};

export interface IPlayer {
  name: string;
}

export interface Player1 extends IPlayer {
  id: Player.P1;
}

export interface Player2 extends IPlayer {
  id: Player.P2;
}

export interface Player3 extends IPlayer {
  id: Player.P3;
}

export type CoalitionsCombination =
  | [Player.P1, Player.P2]
  | [Player.P1, Player.P3]
  | [Player.P2, Player.P3]
  | [Player.P1, Player.P2, Player.P3];

export interface GameCoalitionsCombination {
  "12": [Player.P1, Player.P2];
  "13": [Player.P1, Player.P3];
  "23": [Player.P2, Player.P3];
  "123": [Player.P1, Player.P2, Player.P3];
}

export interface GameCoalitionsValues {
  "12": number;
  "13": number;
  "23": number;
  "123": number;
}

export type CoalitionId = keyof GameCoalitionsCombination;

export interface Coalition {
  members: CoalitionsCombination;
}

export type Split = { [key in Player]: number } & { coalitionId: CoalitionId };
