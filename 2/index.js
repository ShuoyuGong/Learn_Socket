var http = require('http')
var io = require('socket.io')
var server = http.createServer((req, res) => {})

// 监听
server.listen(2183)
io.listen(server).on('connection', (user) => {
  user.on('div_node', (json) => {
    user.broadcast.emit('style', json)
    // console.log(json)
  })
})
