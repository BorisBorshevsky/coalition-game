import { connect } from "react-redux";
import { Dispatch } from "redux";
import { GameScreen, StateShape } from "../store/state";
import {
  GameAction,
  giveUp,
  respondOffer,
  restartGame,
  selectCoalition,
  startGame,
  submitOffer,
  undo,
} from "../store/actions";
import { App } from "../ui/App";
import {
  CoalitionId,
  GameCoalitionsValues,
  Offer,
  Player,
  respStatus,
  Split,
} from "../types/game";

const defaultGame: GameCoalitionsValues = {
  "12": 70,
  "13": 60,
  "23": 50,
  "123": 100,
};

const defaultOffer: Offer = {
  P1: "NON_RELEVANT",
  P2: "ACCEPTED",
  P3: "ACCEPTED",
  actor: Player.P2,
  selectedCoalition: "23",
  split: {
    P1: 0,
    P2: 25,
    P3: 25,
  },
};

interface DispatchProps {
  onGameStart: () => void;
  onGameRestart: () => void;
  onCoalitionSelect: (c: CoalitionId) => void;
  onOfferSubmit: (
    split: Split,
    coalitionId: CoalitionId,
    offerFrom: Player
  ) => void;
  onOfferRespond: (p: Player, response: respStatus) => void;
  onUndo: () => void;
  onGiveUp: () => void;
}

interface StateProps {
  coalitionsValues: GameCoalitionsValues;
  screen: GameScreen;
  players: Array<Player>;
  currentTurn: Player;
  coalitionForOffer: CoalitionId;
  offers: Array<Offer>;
}

interface OwnProps {}

export type AppContainerProps = DispatchProps & StateProps;

const mapStateToProps = (state: StateShape): StateProps => {
  return {
    screen: state.screen,
    coalitionsValues: state.coalitionsValues,
    players: state.players,
    currentTurn: state.currentTurn,
    coalitionForOffer: state.coalitionForOffer,
    offers: state.offers,
  };
};

const mapDispatchToProps = (dispatch: Dispatch<GameAction>): DispatchProps => {
  return {
    onUndo: () => dispatch(undo()),
    onCoalitionSelect: (c: CoalitionId) => dispatch(selectCoalition(c)),
    onGameRestart: () => dispatch(restartGame()),
    onGameStart: () => dispatch(startGame(defaultGame, defaultOffer)),
    onOfferSubmit: (
      split: Split,
      coalitionId: CoalitionId,
      offerFrom: Player
    ) => dispatch(submitOffer(split, coalitionId, offerFrom)),
    onOfferRespond: (p: Player, response: respStatus) =>
      dispatch(respondOffer(p, response)),
    onGiveUp: () => dispatch(giveUp()),
  };
};

const AppContainer = connect<StateProps, DispatchProps, OwnProps, StateShape>(
  mapStateToProps,
  mapDispatchToProps
)(App);

export { AppContainer as App };
