import React from "react";
import { OfferForm } from "./OfferForm";
import { Player } from "../../types/game";
import { Container } from "@material-ui/core";

export const GameScreen = () => {
  return (
    <Container maxWidth={"md"}>
      <OfferForm
        offerFrom={Player.P1}
        onSubmit={() => console.log("TODO dispatch submit offer")}
      />
    </Container>
  );
};
