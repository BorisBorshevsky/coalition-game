import {Container, createStyles, Theme } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React, { useState } from "react";
import {PlayerNamesForm} from "./PlayerNamesForm";
import PreSetGamesButtonGroup from "./PreSetGamesButtonGroup";


const useStyles = makeStyles((theme: Theme) =>
    createStyles({
      root: {
        margin: theme.spacing(1),
        width: '100%',
      },
      coalitionNames: {
        display: "flex"
      },
      coalitionNamesText: {
        minWidth: "280px",
        lineHeight: "48px"
      },
    }),
);


interface preSetGamesFormProps {
  className?: string
}

export const PreSetGamesForm = (props: preSetGamesFormProps) => {
  const classes = useStyles();


  return (
  <Container maxWidth={"md"}>
    <PreSetGamesButtonGroup/>
    <br/>
    <PlayerNamesForm/>
  </Container>
);
}
