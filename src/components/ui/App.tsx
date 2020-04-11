import React from "react";
import "../../stylesheets/App.css";
import { SetupScreen } from "../containers/SetupScreen";
import { GameScreen } from "./GameScreen";
import { GAME_SCREEN, ScreenType, SETUP_SCREEN } from "../../types/game";
import { CssBaseline } from "@material-ui/core";
import { GameAppBar } from "./GameBar";
import { MadeWithLove } from "./MadeWithLove";

interface AppProps {
  screenType: ScreenType;
}

const App = (props: AppProps) => {
  const { screenType } = props;
  return (
    <React.Fragment>
      <CssBaseline />
      <GameAppBar />
      <div className="app">
        {screenType === SETUP_SCREEN && <SetupScreen />}
        {screenType === GAME_SCREEN && <GameScreen />}
      </div>

      <MadeWithLove />
    </React.Fragment>
  );
};

export default App;
