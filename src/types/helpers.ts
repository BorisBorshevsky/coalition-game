import { AckStatus, CoalitionId, Offer, Player } from "./game";
import { CoalitionsCombinations } from "./globals";

/**
 * This is temporal until we get the player name form state
 * @param player
 */
export const getPlayerName = (player: Player) => {
  switch (player) {
    case Player.P1:
      // return "Player One";
      return "P1";
    case Player.P2:
      // return "Player Two";
      return "P2";
    case Player.P3:
      return "P3";
    // return "Player Three";
  }
};

/**
 * This is temporal until we get the player name form state
 * @param player
 */
export const coalitionsForPlayer = (player: Player): Array<CoalitionId> => {
  switch (player) {
    case Player.P1:
      return ["12", "13", "123"];
    case Player.P2:
      return ["12", "23", "123"];
    case Player.P3:
      return ["13", "23", "123"];
  }
};

export const getParticipants = (coalitionId: CoalitionId): Array<Player> => {
  return CoalitionsCombinations[coalitionId];
};

export const getCoalitionString = (c: CoalitionId) => {
  switch (c) {
    case "12":
      return `Coalition of ${getPlayerName(Player.P1)} and ${getPlayerName(
        Player.P2
      )}`;
    case "13":
      return `Coalition of ${getPlayerName(Player.P1)} and ${getPlayerName(
        Player.P3
      )}`;
    case "23":
      return `Coalition of ${getPlayerName(Player.P2)} and ${getPlayerName(
        Player.P3
      )}`;
    case "123":
      return `Coalition of ${getPlayerName(Player.P1)}, ${getPlayerName(
        Player.P2
      )} and ${getPlayerName(Player.P3)}`;
  }
};

export const isOfferFinished = (o: Offer) => {
  return (
    finiteStatus(o[Player.P1]) &&
    finiteStatus(o[Player.P2]) &&
    finiteStatus(o[Player.P3])
  );
};

export const finiteStatus = (status: AckStatus) => {
  const finiteStatuses = ["PROPOSED", "ACCEPTED", "REJECTED", "NON_RELEVANT"];
  return finiteStatuses.indexOf(status) !== -1;
};

export const isOfferAccepted = (o: Offer) => {
  const acceptStatus = (s: AckStatus) => {
    const acceptStatuses = ["PROPOSED", "ACCEPTED", "NON_RELEVANT"];
    return acceptStatuses.indexOf(s) !== -1;
  };

  return (
    acceptStatus(o[Player.P1]) &&
    acceptStatus(o[Player.P2]) &&
    acceptStatus(o[Player.P3])
  );
};

export const isOfferRejected = (o: Offer) => {
  return isOfferFinished(o) && !isOfferAccepted(o);
};

export const getMissingPlayer = (c: CoalitionId) => {
  switch (c) {
    case "123":
      return Player.P1;
    case "23":
      return Player.P1;
    case "13":
      return Player.P2;
    case "12":
      return Player.P3;
  }
};

export const latestAcceptedOffer = (offers: Array<Offer>) => {
  return offers.slice().reverse().find(isOfferAccepted)!;
};
