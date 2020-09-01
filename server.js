var jsonServer = require('json-server')
var server = jsonServer.create()
var db = {
  posts: [],
  comments: [],
  bot_id: [],
  user_id: [],
  module_id: []
}
var router = jsonServer.router(db)
var middlewares = jsonServer.defaults()

server.use(middlewares)
server.use(router)
server.listen(3000, function () {
  console.log('JSON Server is running')
})