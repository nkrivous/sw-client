import { getRoot, getRoots } from './api';
import {
	FETCH_RESOURCE,
	FETCH_RESOURCE_FAILURE,
	FETCH_RESOURCE_SUCCESS,
	FETCH_ROOTS,
	FETCH_ROOTS_FAILURE,
	FETCH_ROOTS_SUCCESS,
} from './constants';

export const fetchRoots = () => dispatch => {
	dispatch({ type: FETCH_ROOTS });

	const request = getRoots();

	return request.then(
		resp => dispatch({ type: FETCH_ROOTS_SUCCESS, payload: resp }),
		error => dispatch({ type: FETCH_ROOTS_FAILURE, payload: error }),
	);
};

export const fetchResource = root => dispatch => {
	dispatch({ type: FETCH_RESOURCE, resource: root });

	const request = getRoot(root);

	return request.then(
		resp => dispatch({ type: FETCH_RESOURCE_SUCCESS, payload: resp, resource: root }),
		error => dispatch({ type: FETCH_RESOURCE_FAILURE, payload: error, resource: root }),
	);
};
