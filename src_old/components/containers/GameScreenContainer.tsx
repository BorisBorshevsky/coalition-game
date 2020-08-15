import {StateShape} from "../../store/state";
import {Dispatch} from "redux";
import {back, gameAction, giveUp, selectCoalition, submitOffer} from "../../store/actions";
import {connect} from "react-redux";
import {GameScreen} from "../ui/GameScreen";
import {CoalitionId, Player, ScreenType, Split} from "../../types/game";

interface DispatchProps {
  onSubmit: (offerFrom: Player, split: Split) => void;
  onGiveUp: (player: Player) => void;
  onSelectCoalition: (c: CoalitionId) => void
  backToSelectCoalition: () => void
}

interface StateProps {
  screenType: ScreenType,
  wholeState: StateShape
}

interface OwnProps {
}

const mapStateToProps = (state: StateShape): StateProps => {
  return {
    screenType: state.screen,
    wholeState: state
  };
};

export type GameScreenProps = DispatchProps & StateProps & OwnProps

const mapDispatchToProps = (dispatch: Dispatch<gameAction>): DispatchProps => {
  return {
    onSubmit: (offerFrom: Player, split: Split) => {
      dispatch(submitOffer(split, offerFrom))
    },
    onGiveUp: (player: Player) => {
      dispatch(giveUp(player))
    },
    onSelectCoalition: (c: CoalitionId) => {
      dispatch(selectCoalition(c))
    },
    backToSelectCoalition: () => {
      dispatch(back())
    }


  };
};

const GameScreenContainer = connect<StateProps,
  DispatchProps,
  OwnProps,
  StateShape>(
  mapStateToProps,
  mapDispatchToProps
)(GameScreen);

export {GameScreenContainer as GameScreen};
