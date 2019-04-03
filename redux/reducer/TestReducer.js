import { ADD_NEW, FETCH_FAIL, FETCH_MOVIE, FETCH_SUCCESS } from '../action/actionType';
const defaultState = []
const TestReducer = (state = defaultState, action) => {
    switch (action.type) {
        case ADD_NEW:
            return [
                ...state,
                action.newMovie
            ];
        case FETCH_FAIL:
            return [];
        case FETCH_SUCCESS:
            return action.receivedMovies;
        // case FETCH_MOVIE:
        //     return action.newState;
        default:
            return state
    }
}

export default TestReducer;