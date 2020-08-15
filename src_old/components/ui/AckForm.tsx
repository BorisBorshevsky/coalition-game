import React from "react";
import { Split } from "../../types/game";
import { Divider, Typography } from "@material-ui/core";

interface AckFormProps {
  split: Split;
}

export const AckForm = () => {
  return (
    <div>
      <Typography variant={"body1"}>
        Just to make sure nobody changed his mind
      </Typography>
      <Typography variant={"body1"}>The agreed split is:</Typography>
      <Typography variant={"body1"}>The agreed split is:</Typography>
      <p>
        {" "}
        Player one Gets: 30 <Divider orientation="vertical" flexItem />
        Player Two Gets: 30
        <Divider orientation="vertical" flexItem />
        Player Three Gets: 30
      </p>
    </div>
  );
};
