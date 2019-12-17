
import { FETCH_ROOTS, FETCH_ROOTS_FAILURE, FETCH_ROOTS_SUCCESS } from '../constants';

export const initialState = {
    isLoading: false,
    payload: void 0,
    error: void 0,
};

export default (state = initialState, action) => {
    switch (action.type) {
        case FETCH_ROOTS:
            return { isLoading: true };

        case FETCH_ROOTS_FAILURE:
            return {
                isLoading: false,
                error: action.payload,
            };

        case FETCH_ROOTS_SUCCESS:
            return {
                isLoading: false,
                payload: action.payload,
            };

        default:
            return state;
    }
};
