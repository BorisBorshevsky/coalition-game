import {AckStatus, CoalitionId, GameCoalitionsValues, Offer, Player, respStatus} from "../types/game";
import React from "react";
import {Parachute} from "./Parachute";

interface props {
  coalitionForOffer: CoalitionId;
  coalitionsValues: GameCoalitionsValues;
  players: Player[];
  currentTurn: Player;
  offers: Array<Offer>
  onOfferRespond: (p: Player, response: respStatus) => void
}

export const AckForm = (props: props) => {
  const {onOfferRespond} = props
  const latestOffer = props.offers[props.offers.length - 1]

  const relevantAckStatus = (status: AckStatus) => {
    return status !== "NON_RELEVANT" && status !== "PROPOSED"
  }

  const handleOnClick = (p: Player) => {
    return (status: respStatus) => {
      onOfferRespond(p, status)

      console.log(`Clicked ${p},${status} `)
    }
  }

  return (<div className={"ack_form_root"}>
    <Parachute {...props} />
    <div className={"ack_form"}>
      {[Player.P1, Player.P2, Player.P3].map((p: Player, idx: number) => {
        return relevantAckStatus(latestOffer[p]) &&
            <SingleSelect key={idx} onClick={handleOnClick(p)} player={p} disabled={latestOffer[p] !== "TBD"} />
      })}
    </div>

  </div>)
}

interface toggleProps {
  player: Player
  onClick: (status: respStatus) => void
  disabled?: boolean
}

const SingleSelect = (props: toggleProps) => {
  const {player, onClick, disabled} = props
  return (<div className="single_ack">

    <p className={"question"}>{`${player}, What do you think about the offer?`}</p>
    <div className={"answer"}>
      <span>Looks good!</span>
      <button className={"accept"} onClick={() => onClick("ACCEPT")} disabled={disabled}>Accept</button>
    </div>
    <div className={"answer"}>
      <span>No way!</span>
      <button className={"reject"} onClick={() => onClick("REJECT")} disabled={disabled}>Reject</button>
    </div>
  </div>)
}