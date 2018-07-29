const express = require('express')
const bodyParser = require('body-parser')
const next = require('next')
const mobxReact = require('mobx-react')
const { parse } = require('url')
const routes = require('./routes')

const port = process.env.PORT || 3000;
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handlePage = routes.getRequestHandler(app, ({req, res, route, query}) => {
  const parsedUrl = parse(req.url, true)
  app.render(req, res, route.page, query, parsedUrl)
})

mobxReact.useStaticRendering(true)

app.prepare()
  .then(() => {
    const appServer = express()

    appServer.use(bodyParser.urlencoded({extended:true}))
    appServer.use(bodyParser.json())
    appServer.use(handlePage);

    appServer.listen(port, (err) => {
      if (err) throw err
    })
  })
  .catch((err) => {
    console.log(err.stack)
    process.exit(1)
  })
