import React, { PropsWithChildren } from "react";
import { GameCoalitionsValues, Player } from "../types/game";
// import {GameCoalitionsValues, Player} from "../../types/game";
// import {getPlayerName} from "../../types/helpers";

// const useStyles = makeStyles((theme) => ({
//   root: {
//     width: "480px",
//     minWidth: "480px",
//     padding: "20px",
//     backgroundImage: `url(${parachuteImg})`,
//     backgroundSize: "cover",
//     margin: "auto",
//     "& > div > *": {
//       border: "1px solid",
//       flexBasis: "15%",
//       textAlign: "center",
//       borderRadius: "10px",
//     },
//   },
//   top: {
//     display: "flex",
//     justifyContent: "center",
//   },
//   second: {
//     marginTop: "25px",
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "space-around",
//   },
//   bottom: {
//     display: "flex",
//     justifyContent: "center",
//     marginTop: "175px",
//   },
//   rowOfPlayers: {
//     marginTop: "25px",
//     color: "green",
//     display: "flex",
//     justifyContent: "space-between",
//   },
// }));

interface ParachuteProps {
  coalitionsValues: GameCoalitionsValues;
  players: Player[];
}

export const Parachute = (props: ParachuteProps) => {
  const { coalitionsValues, players } = props;

  return (
    <div className={"par_root"}>
      <div className={"par_top"}>
        <ValueButton>{coalitionsValues["13"]}</ValueButton>
      </div>
      <div className={"par_second"}>
        <ValueButton>{coalitionsValues["12"]}</ValueButton>
        <ValueButton>{coalitionsValues["23"]}</ValueButton>
      </div>
      <div className={"par_row_of_players"}>
        <PlayerButton>{players[0]}</PlayerButton>
        <PlayerButton>{players[1]}</PlayerButton>
        <PlayerButton>{players[2]}</PlayerButton>
      </div>
      <div className={"par_bottom"}>
        <ValueButton>{coalitionsValues["123"]}</ValueButton>
      </div>
    </div>
  );
};

const ValueButton = (props: PropsWithChildren<{}>) => {
  return <button className={"value_button"}>{props.children}</button>;
  // return (
  //   <Button
  //     variant={"outlined"}
  //     size={"small"}
  //     disableRipple={true}
  //     style={{cursor: "default"}}
  //   >
  //     {props.children}
  //   </Button>
  // );
};

const PlayerButton = (props: PropsWithChildren<{}>) => {
  return <button className={"player_button"}>{props.children}</button>;
  // return (
  //   <Button
  //     size={"small"}
  //     variant={"contained"}
  //     disableRipple={true}
  //     style={{cursor: "default"}}
  //   >
  //     {props.children}
  //   </Button>
  // );
};
