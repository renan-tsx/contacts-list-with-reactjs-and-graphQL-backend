import axios from 'axios';

export const context = () => {
  return {
    axios,
    getUsers: (path = '') => axios.get(`${process.env.API}/users/${path}`),
  };
};
