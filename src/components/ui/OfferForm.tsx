import {CoalitionId, GameCoalitionsValues, Player, Split} from "../../types/game";
import {createStyles, TextField, Theme} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import React, {useMemo, useState} from "react";
import {LabelledOutline} from "./LabledOutline";
import SentimentVeryDissatisfiedIcon from "@material-ui/icons/SentimentVeryDissatisfied";
import Button from "@material-ui/core/Button";
import {getParticipants, getPlayerName,} from "../../types/helpers";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    singleOffer: {
      display: "flex",
      "& > *": {
        margin: theme.spacing(1),
        width: "185px",
      },
      "& > button": {
        marginLeft: "auto",
        minWidth: "180px",
      },
    },
    offerOutline: {
      marginTop: "30px",
      marginBottom: "30px",
    },
    giveUp: {
      display: "flex",
      justifyContent: "flex-end",
      margin: "0 20px",
      "& > button": {
        minWidth: "180px",
      },
    },
  })
);

interface offerFormProps {
  className?: string;
  offerFrom: Player;
  onSubmit: (offerFrom: Player, split: Split) => void;
  onGiveUp: (offerFrom: Player) => void;
  coalitionsValues: GameCoalitionsValues;
  coalition: CoalitionId
  back: () => void
}



export const OfferForm = (props: offerFormProps) => {
  const {offerFrom, onSubmit, onGiveUp, coalitionsValues, coalition, back} = props;

  const giveUpHandler = () => {
    onGiveUp(offerFrom)
  }

  return (
    <form noValidate autoComplete="off">
      <LabelledOutline label={`It is ${getPlayerName(offerFrom)}'s Turn to make an offer!`}>
        <SingleOffer
          offerFrom={offerFrom}
          onSubmit={onSubmit}
          coalitionId={coalition}
          coalitionsValues={coalitionsValues}
        />
        <GiveUp onClick={giveUpHandler} />
        <Back onClick={back}/>

      </LabelledOutline>
    </form>
  );
};

const Back = ({onClick}: { onClick: () => void }) => {
  return (
    <div>
      <Button
        variant={"contained"}
        color={"secondary"}
        onClick={onClick}
      >
        Back
      </Button>
    </div>
  );
}

const GiveUp = ({onClick}: { onClick: () => void }) => {
  const classes = useStyles();
  return (
    <div className={classes.giveUp}>
      <Button
        variant={"contained"}
        color={"secondary"}
        onClick={onClick}
        endIcon={<SentimentVeryDissatisfiedIcon />}
      >
        Can't give you a better offer!
      </Button>
    </div>
  );
};

interface singleOfferProps {
  coalitionId: CoalitionId;
  offerFrom: Player;
  onSubmit: (offerFrom: Player, split: Split) => void;
  coalitionsValues: GameCoalitionsValues;
}

const SingleOffer = (props: singleOfferProps) => {
  const {offerFrom, onSubmit, coalitionId, coalitionsValues} = props;
  const participants = getParticipants(coalitionId);
  const offerToText = `Coalition with ${participants.map(getPlayerName).join(", ")}, Total value: ${coalitionsValues[coalitionId]}`

  const classes = useStyles();

  const [input, setInput] = useState<Split>({
    P1: 0,
    P2: 0,
    P3: 0,
    coalitionId: coalitionId,
  });

  const disabled = useMemo<boolean>(() => {
    return input.P1 + input.P2 + input.P3 !== coalitionsValues[coalitionId]
  }, [input, coalitionId, coalitionsValues]);

  const onChange = (player: Player) => (newValue: number) => {
    setInput((prevState) => {
      // We copy the prev state
      const result = {
        ...prevState,
      };

      const fixValue = (value: number) => {

        if (value < 0) {
          return 0
        }

        if (value > coalitionsValues[coalitionId]) {
          return coalitionsValues[coalitionId]
        }

        return value
      }

      // This is ugly we need to put this mapping somewhere
      switch (player) {
        case Player.P1:
          result.P1 = fixValue(newValue) || 0;
          break;
        case Player.P2:
          result.P2 = fixValue(newValue) || 0;
          break;
        case Player.P3:
          result.P3 = fixValue(newValue) || 0;
          break;
      }

      return result;
    });
  };

  const onButtonClick = () => {
    onSubmit(offerFrom, input);
  };


  return (
    <LabelledOutline
      label={offerToText}
      className={classes.offerOutline}
    >
      <div className={classes.singleOffer}>
        <OfferNumField
          player={Player.P1}
          participants={participants}
          onChange={onChange(Player.P1)}
          value={input.P1}
        />
        <OfferNumField
          player={Player.P2}
          participants={participants}
          onChange={onChange(Player.P2)}
          value={input.P2}
        />
        <OfferNumField
          player={Player.P3}
          participants={participants}
          onChange={onChange(Player.P3)}
          value={input.P3}

        />
        <Button
          variant="contained"
          size="small"
          disabled={disabled}
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
  onChange: (newVal: number) => void;
  value: number
}

const OfferNumField = (props: OfferNumFieldProps) => {
  const {
    participants, player, onChange, value
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
      value={value}
      disabled={!enabled}
      onChange={(e) => onChange(parseInt(e.target.value))}
    />
  );
};
