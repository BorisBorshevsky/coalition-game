import React from "react";
import {OfferForm} from "./OfferForm";
import {CoalitionId, Player, Split} from "../../types/game";
import {Container, createStyles, Theme} from "@material-ui/core";
import {Parachute} from "./Parachute";
import {AllPlayers, CoalitionsValues} from "../../types/globals";
import {makeStyles} from "@material-ui/core/styles";
import {OfferList} from "../containers/OfferListContainer";
import {SelectCoalition} from "./SelectCoalition";
import {GamePlayOfferState, StateShape} from "../../store/state";

interface gameScreenProps {
  onSubmit: (offerFrom: Player, split: Split) => void;
  onGiveUp: (player: Player) => void;
  wholeState: StateShape;
  onSelectCoalition: (c: CoalitionId) => void
  backToSelectCoalition: () => void
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    topPart: {
      display: "flex",
      maxHeight: "420px",
      "& > *": {
        border: "1px solid",
        borderColor: "black"
      },
    },
  })
);

export const GameScreen = (props: gameScreenProps) => {
  const {onGiveUp, onSubmit, wholeState, onSelectCoalition, backToSelectCoalition} = props


  return (
    <Container maxWidth={"md"}>
      <TopPart />
      {wholeState.gamePlay.gamePlayOfferState === GamePlayOfferState.SELECT_COALITION &&
      <SelectCoalition currentTurn={wholeState.gamePlay.currentTurn}
                       coalitionValues={wholeState.gameCoalitions}
                       onClick={onSelectCoalition} />
      }

      {wholeState.gamePlay.gamePlayOfferState === GamePlayOfferState.SUGGEST_OFFER &&
      <OfferForm
          coalition={wholeState.gamePlay.selectedCoalition}
          offerFrom={Player.P1}
          onSubmit={onSubmit}
          onGiveUp={onGiveUp}
          coalitionsValues={CoalitionsValues}
          back={backToSelectCoalition}
      />
      }
    </Container>
  );
};

export const TopPart = () => {
  const classes = useStyles();
  return <div className={classes.topPart}>
    <OfferList />
    <Parachute coalitionsValues={CoalitionsValues} players={AllPlayers} />
  </div>

}


