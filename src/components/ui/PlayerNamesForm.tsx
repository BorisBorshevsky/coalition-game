import { createStyles, TextField, Theme, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React, { useState } from "react";


const useStyles = makeStyles((theme: Theme) =>
    createStyles({
      root: {
        margin: theme.spacing(1),
        width: '100%',
      },
      playerNames: {
        display: "flex"
      },
      playerNamesText: {
        minWidth: "280px",
        lineHeight: "48px"
      }
    }),
);


interface playerNamesFormProps {
  className?: string
}

export const PlayerNamesForm = (props: playerNamesFormProps) => {
  const classes = useStyles();

  return (
      <form className={classes.root} noValidate autoComplete="off">
        <SinglePlayerName playerNumber={"1"} />
        <SinglePlayerName playerNumber={"2"} />
        <SinglePlayerName playerNumber={"3"} />
      </form>);
}

interface singlePlayerNameProps {
  playerNumber: string
}

const SinglePlayerName = (props: singlePlayerNameProps) => {
  const classes = useStyles();
  const { playerNumber } = props;

  return (
      <div className={classes.playerNames}>
        <Typography color={"textPrimary"} className={classes.playerNamesText}>
          {`Enter name for player ${playerNumber}:`}
        </Typography>

        <TextField
            label="Player name"
            type="string"
            InputLabelProps={{ shrink: true }}
        />
      </div>
  );
}
