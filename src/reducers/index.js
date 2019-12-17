import { combineReducers } from 'redux';

import rootsReducer from './rootsReducer';
import resourcesReducer from './resourcesReducer';

export default combineReducers({
	roots: rootsReducer,
	resources: resourcesReducer,
});
