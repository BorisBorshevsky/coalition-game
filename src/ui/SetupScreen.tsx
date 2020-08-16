import React from "react";
import { Parachute } from "./Parachute";
import { GameCoalitionsValues, Player } from "../types/game";

interface setupScreenProps {
  coalitionsValues: GameCoalitionsValues;
  players: Player[];
  onUpdateCoalition: (c: GameCoalitionsValues) => void;
  onGameStart: () => void;
}

const presetGames: Array<GameCoalitionsValues> = [
  {
    "12": 50,
    "13": 70,
    "23": 90,
    "123": 110,
  },
  {
    "12": 40,
    "13": 70,
    "23": 80,
    "123": 90,
  },
  {
    "12": 50,
    "13": 70,
    "23": 20,
    "123": 80,
  },
  {
    "12": 15,
    "13": 25,
    "23": 30,
    "123": 100,
  },
  {
    "12": 10,
    "13": 70,
    "23": 90,
    "123": 92,
  },
  {
    "12": 56,
    "13": 70,
    "23": 88,
    "123": 100,
  },
  {
    "12": 25,
    "13": 30,
    "23": 40,
    "123": 70,
  },
];

export const SetupScreen = (props: setupScreenProps) => {
  const handlePresetGame = (v: GameCoalitionsValues) => {
    props.onUpdateCoalition && props.onUpdateCoalition(v);
    props.onGameStart();
  };

  return (
    <div className={"setup_root"}>
      <h2>You can edit the values of the coalitions:</h2>
      <Parachute {...props} editable={true} />
      <h2>Or you can select one of the preset games:</h2>
      <div className={"preset_btns"}>
        {presetGames.map((value, idx) => {
          return (
            <button
              onClick={() => handlePresetGame(value)}
              className={"game_btn"}
              title={JSON.stringify(value)}
              key={idx}
            >{`Game ${idx + 1}`}</button>
          );
        })}
      </div>
    </div>
  );
};
