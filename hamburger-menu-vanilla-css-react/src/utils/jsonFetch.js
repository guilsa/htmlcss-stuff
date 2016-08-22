import axios from 'axios'

export function getData () {
  return axios.get(`http://localhost:3004/db`)
}
