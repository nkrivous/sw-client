
import { FETCH_RESOURCE, FETCH_RESOURCE_FAILURE, FETCH_RESOURCE_SUCCESS } from '../constants';

export const initialState = {};

const resourceState = {
    isLoading: false,
    payload: void 0,
    error: void 0,
};

export default (state = initialState, action) => {
    switch (action.type) {
        case FETCH_RESOURCE:
            return {
                ...state,
                [action.resource]: {
                    ...resourceState,
                    isLoading: true,
                },
            };
        case FETCH_RESOURCE_FAILURE:
            return {
                ...state,
                [action.resource]: {
                    ...resourceState,
                    isLoading: false,
                    error: action.payload,
                },
            };

        case FETCH_RESOURCE_SUCCESS:
            return {
                ...state,
                [action.resource]: {
                    ...resourceState,

                    isLoading: false,
                    payload: action.payload,
                },
            };

        default:
            return state;
    }
};
