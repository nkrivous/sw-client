import rootReducer from './index';
import initaialState from './initial-state';

it('checks Roots reducer in the rootReducer', () => {
    const state = rootReducer(void 0, '');

    expect(state.roots).toBe(initaialState.roots);
});

