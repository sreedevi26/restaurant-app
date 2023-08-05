const jsonserver = require('json-server')
const server = jsonserver.create
const router = jsonserver.router('db.json')
const middleware = jsonserver.defaults()
const port = process.env.PORT || 4000

server.use(middleware)
server.use(router)
server.listen(port)