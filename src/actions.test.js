import { fetchResource, fetchRoots } from './actions';
import { getRoot, getRoots } from './api';
import * as constants from './constants';

jest.mock('./api');
const mockFn = jest.fn(_ => void 0);

afterEach(() => {
    mockFn.mockClear();
});

it('successful fetches roots', async () => {
    const returnValue = { rocket: '' };

    getRoots.mockResolvedValue(returnValue);
    await fetchRoots()(mockFn);

    expect(mockFn.mock.calls.length).toBe(2);
    expect(mockFn.mock.calls[0][0]).toStrictEqual({ type: constants.FETCH_ROOTS });
    expect(mockFn.mock.calls[1][0]).toStrictEqual({ payload: returnValue, type: constants.FETCH_ROOTS_SUCCESS });
});

it('failed while fetches roots', async () => {
    const returnValue = 'Server error';

    getRoots.mockResolvedValue(Promise.reject(returnValue));
    await fetchRoots()(mockFn);

    expect(mockFn.mock.calls.length).toBe(2);
    expect(mockFn.mock.calls[0][0]).toStrictEqual({ type: constants.FETCH_ROOTS });
    expect(mockFn.mock.calls[1][0]).toStrictEqual({ payload: returnValue, type: constants.FETCH_ROOTS_FAILURE });
});

it('successful fetches resource', async () => {
    const returnValue = [{ id: 0 }];

    getRoot.mockResolvedValue(returnValue);
    await fetchResource('planet')(mockFn);

    expect(mockFn.mock.calls.length).toBe(2);
    expect(mockFn.mock.calls[0][0]).toStrictEqual({ type: constants.FETCH_RESOURCE });
    expect(mockFn.mock.calls[1][0]).toStrictEqual({ payload: returnValue, type: constants.FETCH_RESOURCE_SUCCESS });
});

it('failed while fetches roots', async () => {
    const returnValue = 'Server error';

    getRoot.mockResolvedValue(Promise.reject(returnValue));
    await fetchResource('wrong_name')(mockFn);

    expect(mockFn.mock.calls.length).toBe(2);
    expect(mockFn.mock.calls[0][0]).toStrictEqual({ type: constants.FETCH_RESOURCE });
    expect(mockFn.mock.calls[1][0]).toStrictEqual({ payload: returnValue, type: constants.FETCH_RESOURCE_FAILURE });
});
