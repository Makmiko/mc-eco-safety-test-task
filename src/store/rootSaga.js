import { all } from 'redux-saga/effects';
import { searchFilmsWatcher } from './sagas/filmsSaga';
import { searchAutocompleteFilmsWatcher } from './sagas/autocompleteFilmsSaga';
import { searchFilmWatcher } from './sagas/filmSaga';

export function* rootSaga() {
  yield all([
    searchFilmsWatcher(),
    searchAutocompleteFilmsWatcher(),
    searchFilmWatcher(),
  ]);
}
