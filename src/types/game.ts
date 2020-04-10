export enum Players {
  P1,
  P2,
  P3,
}

export const SETUP_SCREEN = "SETUP_SCREEN";
export const GAME_SCREEN = "GAME_SCREEN";

export type ScreenType = typeof SETUP_SCREEN | typeof GAME_SCREEN;

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

export interface split {
  coalition: keyof GameCoalitions;
  P1: number;
  P2: number;
  P3: number;
}
