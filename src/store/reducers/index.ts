import { combineReducers } from 'redux';
import detailView from './detailView';
// import menu from './menu';

const rootReducer = combineReducers({
  detailView,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
