import React, {ChangeEvent, useState} from 'react';
import { OfferForm } from "./OfferForm";
import { Player } from "../../types/game";
import {Button, Container, TextField} from "@material-ui/core";
import SimpleTabs from "./SetupScreenTabs";
import {PlayerNamesForm} from "./PlayerNamesForm";


interface SetupScreenProps {
  onStartGameClick: () => void;
}

export const SetupScreen: React.FunctionComponent<SetupScreenProps> = (
  props: SetupScreenProps
) => {
  const { onStartGameClick } = props;
  return (
    <Container maxWidth={"md"}>
      {/* tabs */}
      <SimpleTabs></SimpleTabs>

      {/* start game */}
      <Button variant="contained" color="primary" onClick={onStartGameClick}>
        Start Game
      </Button>
    </Container>
  );
};
