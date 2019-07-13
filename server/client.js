const next = require('next')
const express = require('express')

const dev = process.env.NODE_ENV === 'development'
const port = parseInt(process.env.PORT)

const app = next({ dev })
const handler = app.getRequestHandler()

app.prepare()
  .then(() => {
    const server = express()

    server.use(handler)

    server.listen(port, err => {
      if (err) throw err

      console.log('####################')
      console.log('## CLIENT')
      console.log(`## MODE: ${dev ? 'development' : 'production '}`)
      console.log(`## PORT: ${port}`)
      console.log('####################')
    })
  })