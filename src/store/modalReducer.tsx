import { Actions, gameAction } from "./actions";
import { modalRedux } from "./state";

const initialState = {
  modalType: undefined,
  modalProps: {
    open: false,
  },
};

export default (state: modalRedux = initialState, action: gameAction) => {
  switch (action.type) {
    case Actions.SHOW_MODAL:
      return {
        modalProps: {
          ...action.modalProps,
          open: true
        },
        modalType: action.modalType,
        type: action.type,
      };
    case Actions.HIDE_MODAL:
      return initialState;
    default:
      return state;
  }
};
