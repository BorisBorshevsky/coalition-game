import React from "react";
import { OfferForm } from "./OfferForm";
import { Player } from "../../types/game";
import { Container } from "@material-ui/core";
import { Parachute } from "./Parachute";
import { AllPlayers, CoalitionsValues } from "../../types/globals";

export const GameScreen = () => {
  return (
    <Container maxWidth={"md"}>
      <Parachute coalitionsValues={CoalitionsValues} players={AllPlayers} />
      <OfferForm
        offerFrom={Player.P1}
        onSubmit={() => console.log("TODO dispatch submit offer")}
        onGiveUp={() => console.log("TODO dispatch give up")}
      />
    </Container>
  );
};
