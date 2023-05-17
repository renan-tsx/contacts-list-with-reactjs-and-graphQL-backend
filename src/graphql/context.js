import axios from 'axios';

export const context = () => {
  const api = process.env.API;
  return {
    axios,
    getUsers: (path = '') => axios.get(`${api}/users${path}`),
    getPhones: (path = '') => axios.get(`${api}/phones${path}`),
    getcontactType: (path = '') => axios.get(`${api}/contactType${path}`),
  };
};
