import {Container, createStyles, TextField, Theme, Typography,} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React, { useState } from "react";
import {PlayerNamesForm} from "./PlayerNamesForm";


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


interface enterManuallyFormProps {
  className?: string
}

export const EnterManuallyForm = (props: enterManuallyFormProps) => {
  const classes = useStyles();


  return (
      <Container maxWidth={"md"}>
        <form className={classes.root} noValidate autoComplete="off">
          <SingleCoalition coalitionName={"1-2"} />
          <SingleCoalition coalitionName={"1-3"} />
          <SingleCoalition coalitionName={"2-3"} />
          <SingleCoalition coalitionName={"1-2-3"} />
        </form>
        <br/>
        <PlayerNamesForm/>
      </Container>
      );
}

interface singleCoalitionProps {
  coalitionName: string
}

const SingleCoalition = (props: singleCoalitionProps) => {
  const classes = useStyles();
  const { coalitionName } = props;

  return (
      <div className={classes.coalitionNames}>
        <Typography color={"textPrimary"} className={classes.coalitionNamesText}>
          {`Enter value for ${coalitionName} coalition:`}
        </Typography>

        <TextField
            label="Coalition value"
            type="number"
            inputProps={{min: 0}}
            InputLabelProps={{ shrink: true }}
        />
      </div>
  );
}
