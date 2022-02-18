/* eslint-disable consistent-return */
/* eslint-disable arrow-body-style */
import WINDOW from '../utils/window';

const useLocalStorage = (key) => {
  const getValue = () => {
    try {
      const value = window.localStorage.getItem(key);
      return JSON.parse(value);
    } catch (error) {
      console.log(
        `#useLocalStorage: an error occurred loading the localStorage key “${key}”:`,
        error,
      );
    }
  };
  const setValue = (value) => WINDOW.localStorage.setItem(key, value);
  const value = getValue();
  return [value, setValue];
};

export default useLocalStorage;