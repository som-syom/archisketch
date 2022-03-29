import { combineReducers } from 'redux';
import detailView from './detailView';
import images from './images';
// import menu from './menu';

const rootReducer = combineReducers({
  detailView,
  images,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
