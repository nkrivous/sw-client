import { combineReducers } from 'redux';

import rootsReducer from './rootsReducer';
import resourceReducer from './resourceReducer';

export default combineReducers({
	roots: rootsReducer,
	resource: resourceReducer,
});
