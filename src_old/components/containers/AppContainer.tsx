import { connect } from "react-redux";
import { StateShape } from "../../store/state";
import { Dispatch } from "redux";
import { gameAction } from "../../store/actions";
import App from "../ui/App";
import { ScreenType } from "../../types/game";

interface DispatchProps {}

interface StateProps {
  screenType: ScreenType;
}

interface OwnProps {}

const mapStateToProps = (state: StateShape): StateProps => {
  return {
    screenType: state.screen,
  };
};

const mapDispatchToProps = (dispatch: Dispatch<gameAction>): DispatchProps => {
  return {};
};

const AppContainer = connect<
  StateProps,
  DispatchProps,
  OwnProps,
  StateShape
>(
  mapStateToProps,
  mapDispatchToProps
)(App);

export { AppContainer as App };
