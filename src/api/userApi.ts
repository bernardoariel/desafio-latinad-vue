import axios from 'axios';

const userApi = axios.create({
  baseURL: 'https://reqres.in/api/users/2',
});

export { userApi };
