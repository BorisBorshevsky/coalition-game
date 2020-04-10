import { connect } from "react-redux";
import { SetupScreen } from "../ui/SetupScreen";
import { CoalitionsGameGlobalState } from "../../store/state";
import { Dispatch } from "redux";
import { gameAction, startGame } from "../../store/actions";
import { GameCoalitions } from "../../types/game";

interface DispatchProps {
  onStartGameClick: () => void;
}

interface StateProps {}

interface OwnProps {}

// TODO: remove this
const defaultGame: GameCoalitions = {
  value12: 70,
  value13: 60,
  value23: 50,
  value123: 100,
};

const mapStateToProps = (state: CoalitionsGameGlobalState): StateProps => {
  return {};
};

const mapDispatchToProps = (dispatch: Dispatch<gameAction>): DispatchProps => {
  return {
    onStartGameClick: () => dispatch(startGame(defaultGame)),
  };
};

const SetupScreenContainer = connect<
  StateProps,
  DispatchProps,
  OwnProps,
  CoalitionsGameGlobalState
>(
  mapStateToProps,
  mapDispatchToProps
)(SetupScreen);

export { SetupScreenContainer as SetupScreen };
