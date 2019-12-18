import { useState } from 'react';

const useLocalStorage = (key, initialValue) => {
    const [value, updateValue] = useState(() => {
        try {
            const item = window.localStorage.getItem(key);

            return item ? JSON.parse(item) : initialValue;
        } catch (error) {
            console.error(error);

            return initialValue;
        }
    });

    const setValue = value => {
        try {
            const newValue = value instanceof Function ? value(value) : value;

            updateValue(newValue);

            window.localStorage.setItem(key, JSON.stringify(newValue));
        } catch (error) {
            console.error(error);
        }
    };

    return [value, setValue];
};

export default useLocalStorage;
