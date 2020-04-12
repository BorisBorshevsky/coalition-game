import { GameCoalitions, ScreenType, SETUP_SCREEN } from "../types/game";
import { modalType } from "./actions";

export interface CoalitionsGameGlobalState {
  gameCoalitions?: GameCoalitions;
  screen: ScreenType;
  modal: modalRedux;
}

export interface modalRedux {
  modalType?: modalType;
  modalProps: modalPropsRedux;
}

type modalPropsRedux = {} & { open: boolean };

export const initialState: CoalitionsGameGlobalState = {
  screen: SETUP_SCREEN,
  modal: {
    modalType: undefined,
    modalProps: {
      open: false,
    },
  },
};
