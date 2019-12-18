import { act, renderHook } from '@testing-library/react-hooks';

import useLocalStorage from './useLocalStorage';

beforeEach(() => {
    const store = { tab: JSON.stringify('people') };
    const localStorageMock = {
        getItem: key => store[key],
        setItem: (key, value) => {
            store[key] = value;
        },
    };

    Object.defineProperty(window, 'localStorage', {
        value: localStorageMock,
        writable: true,
    });
});

it('should return value from localStorage', () => {
    const key = 'tab';
    const value = 'people';

    const { result } = renderHook(() => useLocalStorage(key));
    const [val] = result.current;

    expect(val).toBe(value);
});

it('should return initial value if did not find it in localStorage', () => {
    const value = 'people';

    const { result } = renderHook(() => useLocalStorage('wrong_key', value));
    const [val] = result.current;

    expect(val).toBe(value);
});

it('should write value to localStorage', () => {
    const key = 'tab';
    const newValue = 'planets';

    const { result } = renderHook(() => useLocalStorage(key));
    const [_, setVal] = result.current;

    act(() => {
        setVal(newValue);
    });

    expect(result.current[0]).toBe(newValue);
    const { result: newResult } = renderHook(() => useLocalStorage(key));

    expect(newResult.current[0]).toBe(newValue);
});

