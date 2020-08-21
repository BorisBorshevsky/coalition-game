import React from "react";
import { GameScreen } from "../store/state";

interface topBarProps {
  onStartGame: () => void;
  onIntroClick: () => void;
  onSetupClick: () => void;
  onUndo: () => void;
  screen: GameScreen;
}

export const TopBar = (props: topBarProps) => {
  return (
    <div className={"root_topbar"}>
      <span className={"root_topbar_title"}>The Coalition Parachute game</span>
      <span>
        {props.screen === "INTRO" && (
          <button className={"root_topbar_button"} onClick={props.onSetupClick}>
            Setup
          </button>
        )}

        {props.screen !== "INTRO" && (
          <button className={"root_topbar_button"} onClick={props.onUndo}>
            Undo
          </button>
        )}

        {(props.screen === "SETUP") && (
          <button className={"root_topbar_button"} onClick={props.onStartGame}>
            Start Game
          </button>
        )}
        {props.screen !== "INTRO" && props.screen !== "SETUP" && (
          <button className={"root_topbar_button"} onClick={props.onIntroClick}>
            Restart
          </button>
        )}
      </span>
    </div>
  );
};
