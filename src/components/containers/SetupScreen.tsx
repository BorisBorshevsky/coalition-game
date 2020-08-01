import { connect } from "react-redux";
import { SetupScreen } from "../ui/SetupScreen";
import { StateShape } from "../../store/state";
import { Dispatch } from "redux";
import { gameAction, startGame } from "../../store/actions";
import {GameCoalitionsValues} from "../../types/game";

interface DispatchProps {
  onStartGameClick: () => void;
}

interface StateProps {}

interface OwnProps {}

// TODO: remove this
const defaultGame: GameCoalitionsValues = {
  "12": 70,
  "13": 60,
  "23": 50,
  "123": 100,
};

const mapStateToProps = (state: StateShape): StateProps => {
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
  StateShape
>(
  mapStateToProps,
  mapDispatchToProps
)(SetupScreen);

export { SetupScreenContainer as SetupScreen };
