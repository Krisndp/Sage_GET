import { ADD_NEW, FETCH_FAIL, FETCH_MOVIE, FETCH_SUCCESS } from './actionType'

export function fetchMoviesAction(newState) {
    return {
        type: FETCH_MOVIE,
        newState
    }
}

export function addMovieAction(newMovie) {
    return {
        type: ADD_NEW,
        newMovie
    }
}

export function fetchSuccessAction(receivedMovies) {
    return {
        type: FETCH_SUCCESS,
        receivedMovies
    }
}

export function fetchFailedAction(error) {
    return {
        type: FETCH_FAIL,
        error
    }
}