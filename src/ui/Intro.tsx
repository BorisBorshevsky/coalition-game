import React from "react";
import game_class_img from "../stylesheets/game_class.png";

interface introProps {}

export const Intro = (props: introProps) => {
  return (
    <div className={"intro_root"}>
      <p>{`This game is going to simulate the parachute game we did in class, playing in turns, On each turn a player 
    will have the chance to make an offer to the other participants to join him, create a coalition, and share the 
    point of the coalition they have created.`}</p>
      <p>
        {`Pay attention that the point of the coalition you create are not split evenly and try to get the best value 
      you can in the current game set`}
      </p>
      <p>{"Good luck"}</p>
      <img className={"intro_img"} src={game_class_img} alt={"parachute"} />
    </div>
  );
};
