const baseURL = 'https://frontend-test-assignment-api.abz.agency'
const prefixApi = '/api/v1/'

const url = point => baseURL + prefixApi + point

const ENDPOINTS = {
  TOKEN: url('token'),
  USERS: url('users'),
  POSITIONS: url('positions'),
}

export { ENDPOINTS }