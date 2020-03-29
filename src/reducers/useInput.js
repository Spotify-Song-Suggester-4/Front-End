import React from 'react';
import useLocalStorage from './useLocalStorage';

const useInput = (key, initialValue) => {
  const [value, setValue] = useLocalStorage(key, initialValue);

  const handleChange = (updatedValue) => {
    setValue(updatedValue);
  };
  return [value, setValue, handleChange];
};

export default useInput;
