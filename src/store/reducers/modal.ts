import { TOGGLE_MODAL } from '../actions/types';
import { ModalAction } from '../actions/modal';

export type modalState = {
  isOpen: boolean;
};

const initialState: modalState = {
  isOpen: false,
};

const modal = (
  state: modalState = initialState,
  action: ModalAction
): modalState => {
  switch (action.type) {
    case TOGGLE_MODAL:
      return {
        isOpen: !state.isOpen,
      };
    default:
      return state;
  }
};

export default modal;
