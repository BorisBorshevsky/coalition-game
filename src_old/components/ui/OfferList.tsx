import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import {createStyles, ListItem, ListItemText, Theme} from "@material-ui/core";
import {FixedSizeList, ListChildComponentProps} from 'react-window';
import {Offer} from "../../store/state";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      font: 'black',
      width: '100%',
      height: 400,
      maxWidth: 300,
      backgroundColor: theme.palette.background.paper,
      color: theme.palette.primary.main
    },
  })
);


function renderRow(props: ListChildComponentProps) {
  const {index, style, data} = props;
  const itemData = data[index] as Offer
  const text = `Offer From: ${itemData.offerFrom}, Coalition: ${itemData.split.coalitionId}, Split: ${itemData.split.P1}, ${itemData.split.P2}, ${itemData.split.P3}`

  return (
    <ListItem style={style} key={index}>
      <ListItemText primary={text} />
    </ListItem>
  );
}

export const OfferList = ({offers}: { offers: Offer[] }) => {
  const styles = useStyles()

  return <div className={styles.root}>
    <FixedSizeList height={400} width={300} itemSize={80} itemCount={offers.length} itemData={offers}>
      {renderRow}
    </FixedSizeList>
  </div>
}