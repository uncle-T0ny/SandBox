import axios from 'axios';

const SERVER_URL = 'http://localhost:7000';

const ServerAPI = {
  login(email, password) {
    return axios.post(`${SERVER_URL}/login`, { email, password }).then(res => res.data);
  },

  isAuthenticated() {
    return axios.get(`${SERVER_URL}/isAuthenticated`, { headers: { Authorization: sessionStorage.getItem('token') } }).then(res => res.data);
  },
};

export default ServerAPI;
