import { Player, Split } from "../../types/game";
import { createStyles, TextField, Theme, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React, { useState } from "react";


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      margin: theme.spacing(1),
      width: '100%',
    },
    offer: {
      display: "flex"
    },
    offerText: {
      minWidth: "280px",
      lineHeight: "48px"
    }
  }),
);


interface offerFormProps {
  className?: string
  offerFrom: Player
}


export const OfferForm = (props: offerFormProps) => {
  const classes = useStyles();
  const otherPlayers = [Player.P1, Player.P2, Player.P3].filter(p => p != props.offerFrom);

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <SingleOffer offerTo={[...otherPlayers].slice(0, 1)} />
      <SingleOffer offerTo={[...otherPlayers].slice(1, 1)} />
      <SingleOffer offerTo={[...otherPlayers].slice(0, 2)} />
    </form>);
}


interface singleOfferProps {
  offerFrom?: Player
  offerTo: Array<Player>
  onSubmit?: (split: Split) => void
}

const SingleOffer = (props: singleOfferProps) => {
  const classes = useStyles();
  const [count, setCount] = useState(0);
  const { offerFrom, offerTo } = props;

  const offerToText = offerTo?.length <= 1 ? `${offerTo[0]}` : `${offerTo[0]} and ${offerTo[1]}`;

  return (
    <div className={classes.offer}>
      <Typography color={"textPrimary"} className={classes.offerText}>
        {`Suggest an offer to ${offerToText}:`}
      </Typography>

      <TextField
        label="Number"
        type="number"
        InputLabelProps={{
          shrink: true,
        }}

      />
    </div>
  );


}
