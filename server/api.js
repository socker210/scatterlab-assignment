const express = require('express')

const server = express()

const port = parseInt(process.env.PORT)
const cats = require('../data/q1_cat.json')
const dogs = require('../data/q1_dog.json')

function getDataFromJson (data, current, per) {
  const value = {
    last: false,
    current: 0,
    data: []
  }

  if (current >= data.length) {
    value.current = current
    value.last = true

    return value
  }

  if (current + per > data.length) {
    const remain = data.length - current

    value.current = current + remain
    value.last = true
    value.data = data.slice(current, value.current)

    return value
  }

  value.current = current + per
  value.data = data.slice(current, value.current)

  return value
}

server.all('/*', (req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')

  next()
})

server.get('/cats', (req, res) => {
  let data

  res.set('Content-Type', 'application/json')

  try {
    data = getDataFromJson(cats, parseInt(req.query.current || 0), parseInt(req.query.per || 10))
  } catch (error) {
    res.status(501).send({ message: '서버에서 동물을 대려오는 도중 문제가 발생했어요' })
  }

  res.send(data)
})

server.get('/dogs', (req, res) => {
  let data

  res.set('Content-Type', 'application/json')

  try {
    data = getDataFromJson(dogs, parseInt(req.query.current || 0), parseInt(req.query.per || 10))
  } catch (error) {
    res.status(501).send({ message: '서버에서 동물을 대려오는 도중 문제가 발생했어요' })
  }

  res.send(data)
})

server.listen(port, err => {
  if (err) throw err

  console.log('####################')
  console.log('## API')
  console.log(`## PORT: ${port}`)
  console.log('####################')
})