import axios from 'axios';

const baseURL = 'http://localhost:3000';

const defaultHeaders = {};

const defaultBodyHeaders = {
  ...defaultHeaders,
  'Content-Type': 'application/json',
};

const goodStatus = (status: number): boolean =>
  [200, 201, 204].includes(status);

export const mainAxios = axios.create({
  baseURL,
  headers: defaultBodyHeaders,
  validateStatus: goodStatus,
});
