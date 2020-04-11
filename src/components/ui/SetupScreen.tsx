import React from "react";
import { Button, Container } from "@material-ui/core";
import { OfferForm } from "./OfferForm";
import { Player } from "../../types/game";

interface SetupScreenProps {
  onStartGameClick: () => void;
}

export const SetupScreen: React.FunctionComponent<SetupScreenProps> = (
  props: SetupScreenProps
) => {
  const { onStartGameClick } = props;
  return (
    <Container maxWidth={"md"}>
      <OfferForm offerFrom={Player.P1}/>


      <Button variant="contained" color="primary" onClick={onStartGameClick}>
        Start Game
      </Button>
    </Container>
  );
};
