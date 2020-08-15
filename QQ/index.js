var http = require('http')
var io = require('socket.io')
var server = http.createServer((req, res) => {})

// 监听
server.listen(2183)
var arrUser = []
var arrMsg = []
io.listen(server).on('connection', (user) => {
  // 登陆获取用户名
  user.on('name', (name) => {
    arrUser.push(name)
    user.lastNames = name
    user.broadcast.emit('userLogin', arrUser)
    user.emit('userLogin', arrUser)
    user.emit('agoMsgs', arrMsg)
  })

  user.on('msg', (msg) => {
    arrMsg.push({
      userName: user.lastNames,
      timer: new Date().toLocaleTimeString(),
      msg: msg,
    })
    user.broadcast.emit('msg', {
      userName: user.lastNames,
      timer: new Date().toLocaleTimeString(),
      msg: msg,
    })
    user.emit('myMsg', {
      userName: user.lastNames,
      timer: new Date().toLocaleTimeString(),
      msg: msg,
    })
  })
  user.on('disconnect', () => {
    arrUser.splice(arrUser.indexOf(user.lastNames), 1)
    user.broadcast.emit('userDisconnect', user.lastNames)
  })
})
