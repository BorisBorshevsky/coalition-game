import Button from "@material-ui/core/Button";
import React from "react";
import {CoalitionId, GameCoalitionsValues, Player} from "../../types/game";
import {coalitionsForPlayer, getParticipants, getPlayerName} from "../../types/helpers";
import {makeStyles} from "@material-ui/core/styles";
import {createStyles, Theme, Typography} from "@material-ui/core";


interface selectCoalitionProps {
  currentTurn: Player,
  coalitionValues: GameCoalitionsValues,
  onClick: (c: CoalitionId) => void
}


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      "& > *": {
        margin: "20px"
      }
    },
  })
);


export const SelectCoalition = (props: selectCoalitionProps) => {
  const {currentTurn, coalitionValues, onClick} = props
  const coalitions = coalitionsForPlayer(currentTurn)
  const coalition1 = coalitions[0]
  const coalition2 = coalitions[1]
  const coalition3 = coalitions[2]

  const getOnClick = (c: CoalitionId) => () => {
    onClick(c)
  }

  const styles = useStyles()

  return <div className={styles.root}>
    <Typography>
      {`Coalition of ${getParticipants(coalition1).map(getPlayerName).join(", ")} -    Total Value ${coalitionValues[coalition1]}`}
    </Typography>

    <div>
      <Button
        variant={"contained"}
        onClick={getOnClick(coalition1)}
      >
        {`Coalition of ${getParticipants(coalition1).map(getPlayerName).join(", ")} -    Total Value ${coalitionValues[coalition1]}`}
      </Button>
    </div>

    <div>
      <Button
        variant={"contained"}
        onClick={getOnClick(coalition2)}
      >
        {`Coalition of ${getParticipants(coalition2).map(getPlayerName).join(", ")} 
       
       Total Value ${coalitionValues[coalition2]}`}
      </Button>
    </div>

    <div>
      <Button
        variant={"contained"}
        onClick={getOnClick(coalition3)}
      >
        {`Coalition of ${getParticipants(coalition3).map(getPlayerName).join(", ")} 
       
       Total Value ${coalitionValues[coalition3]}`}
      </Button>
    </div>
  </div>
}