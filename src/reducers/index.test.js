import rootReducer from './index';
import { initialState as resourceInitaialState } from './resourceReducer';
import { initialState as rootsInitaialState } from './rootsReducer';

it('checks Roots reducer in the rootReducer', () => {
    const state = rootReducer(void 0, '');

    expect(state.roots).toBe(rootsInitaialState);
});

it('checks Resource reducer in the rootReducer', () => {
    const state = rootReducer(void 0, '');

    expect(state.resource).toBe(resourceInitaialState);
});
