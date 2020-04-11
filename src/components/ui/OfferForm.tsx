import { CoalitionId, Player, Split } from "../../types/game";
import { createStyles, TextField, Theme } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React, { useState } from "react";
import { LabelledOutline } from "./LabledOutline";
import Button from "@material-ui/core/Button";
import {
  coalitionsForPlayer,
  getParticipants,
  getPlayerName,
} from "../../types/helpers";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    singleOffer: {
      display: "flex",
      "& > *": {
        margin: theme.spacing(1),
        width: "12ch",
      },
      "& > button": {
        width: "20ch",
        marginLeft: "auto",
      },

    },
    offerOutline: {
      marginTop: "30px",
      marginBottom: "30px"
    }
  })
);

interface offerFormProps {
  className?: string;
  offerFrom: Player;
  onSubmit: (split: Split) => void;
}

export const OfferForm = (props: offerFormProps) => {
  const { offerFrom, onSubmit } = props;
  const coalitions = coalitionsForPlayer(offerFrom);

  return (
    <form noValidate autoComplete="off">
      <SingleOffer
        offerFrom={offerFrom}
        onSubmit={onSubmit}
        coalitionId={coalitions[0]}
      />
      <SingleOffer
        offerFrom={offerFrom}
        onSubmit={onSubmit}
        coalitionId={coalitions[1]}
      />
      <SingleOffer
        offerFrom={offerFrom}
        onSubmit={onSubmit}
        coalitionId={coalitions[2]}
      />
    </form>
  );
};

interface singleOfferProps {
  coalitionId: CoalitionId;
  offerFrom: Player;
  onSubmit: (split: Split) => void;
}

const SingleOffer = (props: singleOfferProps) => {
  const { offerFrom, onSubmit, coalitionId } = props;
  const participants = getParticipants(coalitionId);
  const participantsWithoutSelf = participants.filter((p) => p !== offerFrom);

  const offerToText =
    participantsWithoutSelf.length <= 1
      ? `${participantsWithoutSelf[0]}`
      : `${participantsWithoutSelf[0]} and ${participantsWithoutSelf[1]}`;
  const classes = useStyles();

  const [input, setInput] = useState<Split>({ P1: 0, P2: 0, P3: 0, coalitionId: coalitionId });

  const onChange = (player: Player) => (newValue: number) => {
    setInput((prevState) => {
      // We copy the prev state
      const result = {
        ...prevState,
      };

      // This is ugly we need to put this mapping somewhere
      switch (player) {
        case Player.P1:
          result.P1 = newValue;
          break;
        case Player.P2:
          result.P2 = newValue;
          break;
        case Player.P3:
          result.P3 = newValue;
          break;
      }

      return result;
    });
  };

  const onButtonClick = () => {
    onSubmit(input);
  };

  return (
    <LabelledOutline label={`Suggest an offer to ${offerToText}:`} className={classes.offerOutline}>
      <div className={classes.singleOffer}>
        <OfferNumField
          player={Player.P1}
          participants={participants}
          onChange={onChange(Player.P1)}
        />
        <OfferNumField
          player={Player.P2}
          participants={participants}
          onChange={onChange(Player.P2)}
        />
        <OfferNumField
          player={Player.P3}
          participants={participants}
          onChange={onChange(Player.P3)}
        />
        <Button
          variant="contained"
          color="primary"
          size="small"
          onClick={onButtonClick}
        >
          Make an offer!
        </Button>
      </div>
    </LabelledOutline>
  );
};

interface OfferNumFieldProps {
  player: Player;
  participants: Array<Player>;
  defaultValue?: number;
  onChange?: (newVal: number) => void;
}

const OfferNumField = (props: OfferNumFieldProps) => {
  const {
    participants, player, defaultValue = 0, onChange = () => {
    }
  } = props;
  const enabled = participants.indexOf(player) !== -1;
  const labelText = `${getPlayerName(player)} will get:`;

  return (
    <TextField
      label={labelText}
      type="number"
      InputLabelProps={{
        shrink: true,
      }}
      defaultValue={defaultValue}
      disabled={!enabled}
      onChange={(e) => onChange(parseInt(e.target.value))}
    />
  );
};
