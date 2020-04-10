import React from "react";
import "../../stylesheets/App.css";
import { SetupScreen } from "../containers/SetupScreen";
import { GameScreen } from "./GameScreen";
import { GAME_SCREEN, ScreenType, SETUP_SCREEN } from "../../types/game";

interface AppProps {
  screenType: ScreenType;
}

const App = (props: AppProps) => {
  const { screenType } = props;
  return (
    <div className="app">
      {screenType === SETUP_SCREEN && <SetupScreen />}
      {screenType === GAME_SCREEN && <GameScreen />}
    </div>
  );
};

export default App;
