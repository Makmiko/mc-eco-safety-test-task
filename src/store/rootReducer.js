import { combineReducers } from 'redux';
import { filmsReducer } from './reducers/filmsReducer';
import { filmReducer } from './reducers/filmReducer';

export const rootReducer = combineReducers({
  films: filmsReducer,
  film: filmReducer,
});
