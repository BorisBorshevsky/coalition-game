import React from "react";
import { allPlayers, Offer, Player } from "../types/game";
import { latestAcceptedOffer } from "../types/helpers";

const getSuggestedBy = (o: Offer) => {
  if (o[Player.P1] == "PROPOSED") {
    return Player.P1;
  }

  if (o[Player.P2] == "PROPOSED") {
    return Player.P2;
  }

  if (o[Player.P3] == "PROPOSED") {
    return Player.P3;
  }

  return "Initial";
};

const getRejectedBy = (o: Offer) => {
  if (o[Player.P1] == "REJECTED") {
    return Player.P1;
  }

  if (o[Player.P2] == "REJECTED") {
    return Player.P2;
  }

  if (o[Player.P3] == "REJECTED") {
    return Player.P3;
  }
};

interface singleOfferProps {
  offer: Offer;
}

export const SingleOffer = (props: singleOfferProps) => {
  const { offer: o } = props;
  return (
    <li>
      <span>{`suggested by: ${getSuggestedBy(o)}`}</span>
      <span>{`Values: P1: ${o.split.P1}, P2: ${o.split.P2}, P3: ${o.split.P3}`}</span>
      <span>{`Rejected by: ${getRejectedBy(o)}`}</span>
    </li>
  );
};

interface listOfOffersProps {
  offers: Array<Offer>;
}

export const ListOfOffers = (props: listOfOffersProps) => {
  const { offers } = props;
  return (
    <ul className={"list_offers"}>
      {offers.map((offer) => (
        <SingleOffer offer={offer} />
      ))}
    </ul>
  );
};

interface props {
  offers: Array<Offer>;
}

export const FinishScreen = (props: props) => {
  const lao = latestAcceptedOffer(props.offers);
  return (
    <div>
      The game was finished and we have a coalition !!
      {allPlayers.map((p) => {
        return (
          <p>
            {`${p} gets `}
            <span className={"finish_value"}>{`${lao.split[p]}`}</span>
          </p>
        );
      })}
      <ListOfOffers {...props} />
    </div>
  );
};
