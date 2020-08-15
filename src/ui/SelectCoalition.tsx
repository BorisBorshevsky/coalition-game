import React from "react"
import {Parachute} from "./Parachute";
import {CoalitionId, GameCoalitionsValues, Offer, Player} from "../types/game";
import {coalitionsForPlayer, getCoalitionString, getPlayerName, latestAcceptedOffer} from "../types/helpers";

interface selectCoalitionProps {
  coalitionsValues: GameCoalitionsValues;
  players: Player[];
  currentTurn: Player;
  onCoalitionSelect: (c: CoalitionId) => void
  offers: Array<Offer>
  onGiveUp: () => void
}

export const SelectCoalition = (props: selectCoalitionProps) => {
  return (<div className={"coal_select_root"}>
    <Parachute {...props} />
    <div>{`Its ${getPlayerName(props.currentTurn)}'s Turn to make an offer:`}</div>
    <CurrentAgreement latestAcceptedOffer={latestAcceptedOffer(props.offers)!} />
    <ActualSelection {...props} />
  </div>)
}

const ActualSelection = (props: selectCoalitionProps) => {
  const {coalitionsValues, currentTurn, onGiveUp} = props
  const coalitions = coalitionsForPlayer(currentTurn)

  return (<div className={"coal_selections"}>
    {coalitions.map(
      (c: CoalitionId, idx: number) => <SingleCoal key={idx} coalitionsValues={coalitionsValues} coalitionId={c}
                                                   onCoalitionSelect={props.onCoalitionSelect} />
    )}
    <div className={"give_up_root"}>
      <p>{"Can't offer anything better."}</p>
      <button onClick={onGiveUp} className={"give_up_btn"}>Give up</button>
    </div>
  </div>)

}


interface singleCoalProps {
  coalitionId: CoalitionId
  coalitionsValues: GameCoalitionsValues
  onCoalitionSelect: (c: CoalitionId) => void
}

const SingleCoal = (props: singleCoalProps) => {
  const {coalitionId, coalitionsValues, onCoalitionSelect} = props
  const txt = getCoalitionString(props.coalitionId)

  const onClickHandler = () => {
    return onCoalitionSelect(coalitionId)
  }

  return (
    <div className={"single_coal_selection"}>
      <p>{`${txt}`}</p>
      <p>{`value: ${coalitionsValues[coalitionId]}`}</p>
      <button onClick={onClickHandler}>Select</button>
    </div>
  )
}


interface agreementProps {
  latestAcceptedOffer: Offer
}

const CurrentAgreement = (props: agreementProps) => {
  const {latestAcceptedOffer: o} = props

  return (<div className={"aggr"}>
    <p>If nobody will accept any offers, The split will be As follows:<br />
      {[Player.P1, Player.P2, Player.P3].map((p, idx) => {
        return <span key={idx} className={'aggr_split'}>{`${p} will get:`}<span
          className={'value'}>{`${o.split[p]}`}</span></span>
      })}
    </p>
  </div>)
}