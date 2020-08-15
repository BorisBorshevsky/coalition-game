import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  "@global": {
    body: {
      backgroundColor: theme.palette.common.white,
    },
    ul: {
      margin: 0,
      padding: 0,
    },
    li: {
      listStyle: "none",
    },
  },
  appBar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolbar: {
    flexWrap: "wrap",
  },
  toolbarTitle: {
    flexGrow: 1,
  },
  link: {
    margin: theme.spacing(1, 1.5),
  },
}));

interface GameAppBarProps {
  links?: { text: string; href: string }[];
  startGameOnClick: () => void;
}

export const GameAppBar = (props: GameAppBarProps) => {
  const { links, startGameOnClick } = props;

  const classes = useStyles();

  return (
    <AppBar
      position="sticky"
      color="default"
      elevation={0}
      className={classes.appBar}
    >
      <Toolbar className={classes.toolbar}>
        <Typography
          variant="h6"
          color="inherit"
          noWrap
          className={classes.toolbarTitle}
        >
          The Coalition Parachute game
        </Typography>
        <nav>
          {links?.map((link) => (
            <Link
              variant="button"
              color="textPrimary"
              href={link.href}
              className={classes.link}
            >
              {link.text}
            </Link>
          ))}
        </nav>
        <Button
          color="primary"
          variant="outlined"
          className={classes.link}
          onClick={startGameOnClick}
        >
          Start a new game
        </Button>
      </Toolbar>
    </AppBar>
  );
};
