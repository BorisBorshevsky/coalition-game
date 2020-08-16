import React from "react";
import "../stylesheets/App.css";
import "../stylesheets/sliders.css";
import { TopBar } from "./TopBar";
import { AppContainerProps } from "../containers/AppContainer";
import { Intro } from "./Intro";
import { Container } from "./Container";
import { SelectCoalition } from "./SelectCoalition";
import { OfferForm } from "./OfferForm";
import { AckForm } from "./AckForm";
import { FinishScreen } from "./Finished";
import { SetupScreen } from "./SetupScreen";

export const App = (props: AppContainerProps) => {
  const {
    onGameStart,
    screen,
    onCoalitionSelect,
    coalitionForOffer,
    onUndo,
    onSetupClick,
  } = props;
  return (
    <React.Fragment>
      <TopBar
        onStartGame={onGameStart}
        onIntroClick={props.onGameRestart}
        screen={screen}
        onUndo={onUndo}
        onSetupClick={onSetupClick}
      />
      <Container className={"app"}>
        {screen === "SETUP" && <SetupScreen {...props} />}
        {screen === "INTRO" && <Intro />}
        {screen === "SELECT_COAL" && (
          <SelectCoalition {...props} onCoalitionSelect={onCoalitionSelect} />
        )}
        {screen === "OFFER" && <OfferForm {...props} />}
        {screen === "ACK" && <AckForm {...props} />}
        {screen === "FINISHED" && <FinishScreen {...props} />}
      </Container>
    </React.Fragment>
  );
};
