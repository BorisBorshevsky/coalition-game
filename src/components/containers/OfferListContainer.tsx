import {connect} from "react-redux";
import {StateShape, Offer} from "../../store/state";
import {Dispatch} from "redux";
import {gameAction} from "../../store/actions";
import {OfferList} from "../ui/OfferList";

interface DispatchProps {
}

interface StateProps {
  offers: Offer[]
}

interface OwnProps {
}

const mapStateToProps = (state: StateShape): StateProps => {
  return {
    // offers: (state.gamePlay && state.gamePlay.allOffers) || []
    offers: state.gamePlay.allOffers
    // offers: [{
    //   offerFrom: Player.P1,
    //   split: {
    //     coalitionId: "12",
    //     [Player.P1]: 23,
    //     [Player.P2]: 33,
    //     [Player.P3]: 2
    //
    //   }
    // }, {
    //   offerFrom: Player.P2,
    //   split: {
    //     coalitionId: "12",
    //     [Player.P1]: 23,
    //     [Player.P2]: 33,
    //     [Player.P3]: 2
    //
    //   }
    // }]
  };
};

const mapDispatchToProps = (dispatch: Dispatch<gameAction>): DispatchProps => {
  return {};
};

const OfferListContainer = connect<StateProps,
  DispatchProps,
  OwnProps,
  StateShape>(
  mapStateToProps,
  mapDispatchToProps
)(OfferList);

export {OfferListContainer as OfferList};
