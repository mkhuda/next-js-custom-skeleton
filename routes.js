const nextRoutes = require('next-routes')
const routes = module.exports = nextRoutes()

routes.add('user', '/user', 'user/index')
routes.add('user/all', '/user/all', 'user/all')
