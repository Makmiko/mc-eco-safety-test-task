import { takeLatest, put, call } from 'redux-saga/effects';
import { SEARCH_FILM_REQUEST, SEARCH_FILM_ERROR, SEARCH_FILM_SUCCESS } from '../types';
import axios from 'axios';

export function *searchFilmWatcher() {
  yield takeLatest(SEARCH_FILM_REQUEST, searchFilm);
}

function *searchFilm(action) {
  try {
    const id = action.payload;
    if (!id) {
      yield put({
        type: SEARCH_FILM_ERROR,
        payload: {
          Error: 'No id provided for a request',
          Search: [],
          Request: false,
        }
      });
      return;
    }
    const data = yield call(searchFilmRequest, id);
    if (data && data.Response !== 'False') {
      yield put({
        type: SEARCH_FILM_SUCCESS,
        payload: data,
      });
    } else {
      yield put({
        type: SEARCH_FILM_ERROR,
        payload: data,
      });
    }
  } catch (e) {
    console.log('error occurred while fetching film: ', e.message);
    yield put({
      type: SEARCH_FILM_ERROR,
      payload: {
        Error: e.message,
        Search: [],
        Request: false,
      }
    });
  }
}

async function searchFilmRequest(id) {
  const query = (
    `https://www.omdbapi.com/?apikey=${process.env.APP_TOKEN}&i=${id}`);
  const response = await axios.get(query);
  return response.data;
}
