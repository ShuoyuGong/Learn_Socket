var http = require('http')
var io = require('socket.io')
var server = http.createServer((req, res) => {})

// 监听
server.listen(2183)
io.listen(server).on('connection', (user) => {
  //uer指进来的人
  // console.log('someone come here')
  user.emit('aa', Math.random()) //发送
  setInterval(() => {
    user.emit('aaa', Math.random())
  }, 1000)
})
