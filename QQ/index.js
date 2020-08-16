// var http = require('http')
// var io = require('socket.io')
// var server = http.createServer((req, res) => {})

// // 监听
// server.listen(2183)
// var arrUser = []
// var arrMsg = []
// io.listen(server).on('connection', (user) => {
//   // 登陆获取用户名
//   user.on('name', (name) => {
//     arrUser.push(name)
//     user.lastNames = name
//     user.broadcast.emit('userLogin', arrUser)
//     user.emit('userLogin', arrUser)
//     user.emit('agoMsgs', arrMsg)
//   })

//   user.on('msg', (msg) => {
//     arrMsg.push({
//       userName: user.lastNames,
//       timer: new Date().toLocaleTimeString(),
//       msg: msg,
//     })
//     user.broadcast.emit('msg', {
//       userName: user.lastNames,
//       timer: new Date().toLocaleTimeString(),
//       msg: msg,
//     })
//     user.emit('myMsg', {
//       userName: user.lastNames,
//       timer: new Date().toLocaleTimeString(),
//       msg: msg,
//     })
//   })
//   user.on('disconnect', () => {
//     arrUser.splice(arrUser.indexOf(user.lastNames), 1)
//     user.broadcast.emit('userDisconnect', user.lastNames)
//   })
// })

// var mysql = require('mysql')
// var connection = mysql.createConnection({
//   host: '127.0.0.1',
//   user: 'root',
//   password: '1763034gong',
//   database: 'socket',
// })
// connection.connect()
// var sql = 'SELECT * FROM user WHERE id = 2'
// //查
// connection.query(sql, function (err, result) {
//   if (err) {
//     console.log('[SELECT ERROR] - ', err.message)
//     return
//   }
//   console.log(result)
// })

// connection.end()

//express_demo.js 文件
// var express = require('express')
// var app = express()

// app.get('/index', function (req, res) {
//   res.send('Hello World')
// })

// var server = app.listen(8081, function () {
//   var host = server.address().address
//   var port = server.address().port

//   console.log('应用实例，访问地址为 http://127.0.0.5', host, port)
// })
var server = require('./server')
var router = require('./route')
server.start(router.route)
