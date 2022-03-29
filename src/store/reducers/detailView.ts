import { ON_DETAILVIEW, OFF_DETAILVIEW } from '../actions/types';
import { DetailViewAction } from '../actions/detailView';

export type DetailViewState = {
  id: number;
  isOpen: boolean;
};

const initialState: DetailViewState = {
  id: 0,
  isOpen: false,
};

const detailView = (
  state: DetailViewState = initialState,
  action: DetailViewAction
): DetailViewState => {
  switch (action.type) {
    case ON_DETAILVIEW:
      return {
        id: action.payload.id,
        isOpen: true,
      };
    case OFF_DETAILVIEW:
      return {
        id: 0,
        isOpen: false,
      };
    default:
      return state;
  }
};

export default detailView;
