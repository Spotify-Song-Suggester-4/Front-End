import React from 'react';
import axios from 'axios';

const api = () => {
  const getItem = () => {
    return localStorage.getItem('token');
  };
  return axios.create({
    baseURL: ' https://remix-lambda.herokuapp.com/',
    headers: { Authorization: getItem() },
  });
};

export default api;
