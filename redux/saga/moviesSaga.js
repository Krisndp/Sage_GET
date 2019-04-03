import { FETCH_FAIL, FETCH_MOVIE, FETCH_SUCCESS } from '../action/actionType';

import { put, takeLatest } from 'redux-saga/effects';
import { API } from '../saga/API';

function* fetchMovies() {
    try {
        const receivedMovies = yield API.getMoviesFromAPI();
        yield put({ type: FETCH_SUCCESS, receivedMovies })
    } catch (error) {
        yield put({ type: FETCH_FAIL, error })
    }
}
export function* watchFetchMovies() {
    yield takeLatest(FETCH_MOVIE, fetchMovies)
}
