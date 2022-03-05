/* eslint-disable consistent-return */
/* eslint-disable arrow-body-style */
import WINDOW from '../utils/window';

const useLocalStorage = (key) => {
  const getValue = () => {
    try {
      const value = WINDOW.localStorage.getItem(key);
      return JSON.parse(value);
    } catch (error) {
      console.log('useLocalStorage error');
    }
  };
  const setValue = (value) => WINDOW.localStorage.setItem(key, value);
  const value = getValue();
  return [value, setValue];
};

export default useLocalStorage;
