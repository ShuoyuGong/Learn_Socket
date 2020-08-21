var createError = require('http-errors')
var express = require('express')
var path = require('path')
var cookieParser = require('cookie-parser')
var logger = require('morgan')

var routes = require('./routes')
var indexRouter = require('./routes/index')
var usersRouter = require('./routes/users')
// 闪存包
var settings = require('./session_settings') //配置信息
var flash = require('connect-flash')
var session = require('express-session')

var app = express()
app.listen('8888')

// view engine setup
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))

// app.use('/', indexRouter)
// app.use('/users', usersRouter)
// app.get('/abc', function (req, res) {
//   res.render('index', { title: 'Express' })
// })

// catch 404 and forward to error handler
// app.use(function (req, res, next) {
//   next(createError(404))
// })
app.use(express.static(path.join(__dirname, 'public'))) //指定静态文件目录
// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}

  // render the error page
  res.status(err.status || 500)
  res.render('error')
})
app.use(
  session({
    secret: settings.cookieSecret, //加密
    key: settings.db, //cookie nam
    cookie: { maxAge: 60000 },
    resave: false,
    saveUninitialized: true,
  })
)
app.use(flash())
// set flash
app.use(function (req, res, next) {
  res.locals.errors = req.flash('error')
  res.locals.infos = req.flash('info')
  next()
})
module.exports = app

routes(app)
