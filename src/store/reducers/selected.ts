import { TOGGLE_CHECKBOX, ALL_CHECK, ALL_UNCHECK } from '../actions/types';
import { SelectedAction } from '../actions/selected';

export type selectedState = {
  id: number[];
};

const initialState: selectedState = {
  id: [-1],
};

const selected = (
  state: selectedState = initialState,
  action: SelectedAction
): selectedState => {
  switch (action.type) {
    case TOGGLE_CHECKBOX:
      return {
        id: state.id.includes(action.payload.idx)
          ? state.id.filter((id) => id !== action.payload.idx)
          : [...state.id, action.payload.idx],
      };
    default:
      return state;
  }
};

export default selected;
