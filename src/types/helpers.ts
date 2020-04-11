import { CoalitionId, Player } from "./game";
import { CoalitionsCombinations } from "./globals";

/**
 * This is temporal until we get the player name form state
 * @param player
 */
export const getPlayerName = (player: Player) => {
  switch (player) {
    case Player.P1:
      return "Player One";
    case Player.P2:
      return "Player Two";
    case Player.P3:
      return "Player Three";
  }
};

/**
 * This is temporal until we get the player name form state
 * @param player
 */
export const coalitionsForPlayer = (
  player: Player
): [CoalitionId, CoalitionId, CoalitionId] => {
  switch (player) {
    case Player.P1:
      return ["12", "13", "123"];
    case Player.P2:
      return ["12", "23", "123"];
    case Player.P3:
      return ["13", "23", "123"];
  }
};

export const getParticipants = (coalitionId: CoalitionId) => {
  return CoalitionsCombinations[coalitionId];
};
