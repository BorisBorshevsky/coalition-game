import React from "react";
import { Button, Container } from "@material-ui/core";

interface SetupScreenProps {
  onStartGameClick: () => void;
}

export const SetupScreen: React.FunctionComponent<SetupScreenProps> = (
  props: SetupScreenProps
) => {
  const { onStartGameClick } = props;
  return (
    <Container maxWidth={"sm"}>
      <Button variant="contained" color="primary" onClick={onStartGameClick}>
        Start Game
      </Button>
    </Container>
  );
};
