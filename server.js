const express = require('express')
const bodyParser = require('body-parser')
const next = require('next')

const port = process.env.PORT || 3000;
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handlePage = app.getRequestHandler()

// configuration
const apiHost = 'https://example.apihost.com'

app.prepare()
  .then(() => {
    const appServer = express()

    appServer.use(bodyParser.urlencoded({extended:true}))
    appServer.use(bodyParser.json())
    appServer.use((req, res, next) => {
      next()
    })

    appServer.get('/:page/:subpage*?', (request, response) => {
      const originPage = `/${request.params.page}/${request.params.subpage}`
      const queryParams = {
        page: `${request.params.page}`,
        subpage: `${request.params.subpage}`
      }
      app.render(request, response, originPage, queryParams)
    })

    appServer.get('*', (request, response) => {
      return handlePage(request, response)
    })

    appServer.listen(port, (err) => {
      if (err) throw err
    })
  })
  .catch((err) => {
    console.log(err.stack)
    process.exit(1)
  })
