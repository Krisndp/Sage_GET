import {watchFetchMovies} from './moviesSaga';
import {call, all} from 'redux-saga/effects';

export default function* saga(){
    yield call(watchFetchMovies);
}
