import axios from 'axios';

const displaysApi = axios.create({
  baseURL: 'https://challenge-front-7fw1.onrender.com',
});

export { displaysApi };
