import {CoalitionId, GameCoalitionsValues, Offer, Player, Split} from "../types/game";
import React, {ChangeEvent, FormEventHandler, useState} from "react";
import {getParticipants, latestAcceptedOffer} from "../types/helpers";
import {Parachute} from "./Parachute";

interface props {
  coalitionForOffer: CoalitionId;
  coalitionsValues: GameCoalitionsValues;
  players: Player[];
  currentTurn: Player;
  onOfferSubmit: (split: Split, coalitionId: CoalitionId, offerFrom: Player) => void
  offers: Array<Offer>
}

export const OfferForm = (props: props) => {
  const {coalitionForOffer, coalitionsValues, onOfferSubmit, currentTurn, offers} = props
  const [input, setInput] = useState<Split>({
    P1: 0,
    P2: 0,
    P3: 0,
  });

  const players = getParticipants(coalitionForOffer)

  const handleSubmit: FormEventHandler = (event: ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    onOfferSubmit(input, coalitionForOffer, currentTurn)

  }

  const onChangeHandler = (p: Player) => (value: number) => {
    const res = {...input}
    res[p] = value >= 0 ? value : 0

    setInput(res)
  }

  return (
    <div className={"offer_form_root"}>
      <Parachute {...props} />
      <form className={"offer_form"} onSubmit={handleSubmit}>

        {players.map(p => {
          return (
            <PlayerInput value={input[p]} player={p} onChange={onChangeHandler(p)} />
          )
        })}
        <p>{`Total input: ${input.P1 + input.P2 + input.P3}, Expected input: ${coalitionsValues[coalitionForOffer]}`}</p>
        <input type="submit" value="Submit"
               disabled={input.P1 + input.P2 + input.P3 !== coalitionsValues[coalitionForOffer]} />
      </form>
    </div>
  );
}

interface inputPros {
  player: Player
  value: number
  onChange: (value: number) => void
}

const PlayerInput = (props: inputPros) => {
  const {player, value, onChange} = props
  return (
    <div className={"offer_input"}>
      <label>{player} will get:</label>
      <input type="number" value={value} onChange={(e) => onChange(parseInt(e.target.value) || 0)} />
    </div>
  )
}
