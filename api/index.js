import axios from 'axios'

const instance = axios.create({ baseURL: 'http://192.168.219.102:3001' })

function get (url, params, success, error) {
  instance.get(url, { params })
    .then(res => success(res))
    .catch(err => error(err))
}

export const fetchCats = ({ params, success, error }) => {
  get('/cats', params, success, error)
}

export const fetchDogs = ({ params, success, error }) => {
  get('/dogs', params, success, error)
}