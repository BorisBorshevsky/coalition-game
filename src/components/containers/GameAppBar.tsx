import { StateShape } from "../../store/state";
import { Dispatch } from "redux";
import { gameAction, restartGame } from "../../store/actions";
import { connect } from "react-redux";
import { GameAppBar } from "../ui/GameBar";

interface DispatchProps {
  startGameOnClick: () => void;
}

interface StateProps {
  links?: { text: string; href: string }[];
}

interface OwnProps {}

const mapStateToProps = (state: StateShape): StateProps => {
  return {
    links: [],
  };
};

const mapDispatchToProps = (dispatch: Dispatch<gameAction>): DispatchProps => {
  return {
    startGameOnClick: () => dispatch(restartGame()),
  };
};

const GameAppBarContainer = connect<
  StateProps,
  DispatchProps,
  OwnProps,
  StateShape
>(
  mapStateToProps,
  mapDispatchToProps
)(GameAppBar);

export { GameAppBarContainer as GameAppBar };
