import axios from 'axios'

const apiInstance = axios.create({
  baseURL: 'https://fakestoreapi.com/',
  // timeout: 15000,
  headers: {
    'X-Custom-Header': 'foobar',
    'Content-Type': 'application/json'
  }
})

export default apiInstance
