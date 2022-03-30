import { combineReducers } from 'redux';
import detailView from './detailView';
import images from './images';
import modal from './modal';
import selected from './selected';

const rootReducer = combineReducers({
  detailView,
  images,
  modal,
  selected,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
