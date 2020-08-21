import React, {PropsWithChildren} from "react";
import {CoalitionId, GameCoalitionsValues, Player} from "../types/game";

interface ParachuteProps {
  coalitionsValues: GameCoalitionsValues;
  players: Player[];
  editable?: boolean;
  onUpdateCoalition?: (c: GameCoalitionsValues) => void;
}

export const Parachute = (props: ParachuteProps) => {
  const {
    coalitionsValues,
    players,
    editable,
    onUpdateCoalition = () => {
    },
  } = props;

  const newCoalValues = {...coalitionsValues};

  const handleUpdateVal = (c: CoalitionId) => {
    return (value: number) => {
      const newInput = {...coalitionsValues, [c]: value};
      onUpdateCoalition(newInput);
    };
  };
  console.log(newCoalValues);
  return (
    <div className={"par_root"}>
      <div className={"par_top_line"} />
      <div className={"par_left_line"} />
      <div className={"par_right_line"} />
      <div className={"par_bottom_right_line"} />
      <div className={"par_bottom_middle_line"} />
      <div className={"par_bottom_left_line"} />
      <div className={"par_top"}>
        <ValueButton
          disabled={!editable}
          value={newCoalValues["13"]}
          onUpdate={handleUpdateVal("13")}
        />
      </div>
      <div className={"par_second"}>
        <ValueButton
          disabled={!editable}
          value={newCoalValues["12"]}
          onUpdate={handleUpdateVal("12")}
        />
        <ValueButton
          disabled={!editable}
          value={newCoalValues["23"]}
          onUpdate={handleUpdateVal("23")}
        />
      </div>
      <div className={"par_row_of_players"}>
        <PlayerButton>{players[0]}</PlayerButton>
        <PlayerButton>{players[1]}</PlayerButton>
        <PlayerButton>{players[2]}</PlayerButton>
      </div>
      <div className={"par_bottom"}>
        <ValueButton
          disabled={!editable}
          value={newCoalValues["123"]}
          onUpdate={handleUpdateVal("123")}
        />
      </div>
    </div>
  );
};

interface valueButtonProps {
  disabled?: boolean;
  value: number;
  onUpdate: (n: number) => void;
}

const ValueButton = (props: valueButtonProps) => {
  return (
    <input
      type="number"
      disabled={!!props.disabled}
      className={"value_button"}
      value={props.value}
      onChange={(e) => {
        return props.onUpdate(parseInt(e.target.value));
      }}
    />
  );
};

const PlayerButton = (props: PropsWithChildren<{}>) => {
  return <button className={"player_button"}>{props.children}</button>;
};
