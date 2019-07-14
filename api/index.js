import axios from 'axios'

const instance = axios.create({ baseURL: 'http://192.168.219.102:3001' })

function get (url, params, success, error) {
  instance.get(url, { params })
    .then(res => success(res))
    .catch(err => {
      const res = {
        status: undefined,
        message: undefined
      }

      if (!err.response) {
        res.status = 500
        res.message = '동물들을 불러오는 도중 문제가 발생했어요'
      } else {
        res.status = err.response.status
        res.message = err.response.data.message
      }

      error(res)
    })
}

export const fetchCats = ({ params, success, error }) => {
  get('/cats', params, success, error)
}

export const fetchDogs = ({ params, success, error }) => {
  get('/dogs', params, success, error)
}