import React, {ChangeEvent, useState} from 'react';
import { OfferForm } from "./OfferForm";
import { Player } from "../../types/game";
import {Button, Container, TextField} from "@material-ui/core";
import SimpleTabs from "./SetupScreenTabs";
import {PlayerNamesForm} from "./PlayerNamesForm";


interface SetupScreenProps {
  onStartGameClick: () => void;
}

interface HelloWorldProps {
  name: string;
  onTextClick?: () => void;
  children?: React.ReactNode;
}

const HelloWorld = (props : HelloWorldProps) => {
  const { name, onTextClick } = props;
  const [ text, setText ] = useState("");
  // const onChange = (event : ChangeEvent<HTMLInputElement>) => {
  //   setText(event.target.value);
  // }
  return (
      <div>
        <p onClick={onTextClick}> Hello {name}!</p>
        <TextField id="standard-basic" label="Standard" onChange={event => setText(event.target.value)}/>
        <Button variant="contained" color="primary" onClick={() => alert(text)}>
          Submit
        </Button>
      </div>
  )
}

export const SetupScreen: React.FunctionComponent<SetupScreenProps> = (
  props: SetupScreenProps
) => {
  const { onStartGameClick } = props;
  return (
    <Container maxWidth={"md"}>
      {/* offer */}
      <OfferForm offerFrom={Player.P1}/>
      {/* player names */}
      <PlayerNamesForm/>
      {/* hello world */}
      <HelloWorld name={"A"} onTextClick={() => alert('hello')}/>
      <HelloWorld name={"B"}>
        Hey
      </HelloWorld>

      {/* tabs */}
      <SimpleTabs></SimpleTabs>

      {/* start game */}
      <Button variant="contained" color="primary" onClick={onStartGameClick}>
        Start Game
      </Button>
    </Container>
  );
};
