var http = require('http')
var io = require('socket.io')
var server = http.createServer((req, res) => {})

// 监听
server.listen(2183)
var arr = []
io.listen(server).on('connection', (user) => {
  arr.push(user)
  // 上线通知
  user.broadcast.emit('msg', '有人上线了')
  //uer指进来的人
  // console.log('someone come here')
  // user.emit('aa', Math.random()) //发送
  // setInterval(() => {
  //   user.emit('aaa', Math.random())
  // }, 1000)

  user.on('msg', (str) => {
    // console.log(arr)
    // user.emit('msg', arr)
    // for (i = 0; i < arr.length; i++) {
    //   arr[i].emit('msg', str)
    // }

    user.broadcast.emit('msg', str)
  })

  user.on('disconnect', () => {
    user.broadcast.emit('msg', '有人下线了')
  })
})
