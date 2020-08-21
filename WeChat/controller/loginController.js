let mysql = require('../mysql/connectionPool')
let md5 = require('md5')
// 登陆首页
exports.login_index = (req, res) => {
  res.render('index')
}

// 执行登陆操作
exports.do_login = (req, res) => {
  var username = req.body.username
  var password = req.body.password
  var sql = 'SELECT username FROM user Where `username` = ? AND password = ?'
  var where_value = [username, password]
  mysql.query(sql, where_value, function (err, result) {
    if (err) {
      console.log('[SELECT ERROR] - ', err.message)
      return
    }
    if (result.length == 0) {
      req.flash('style', 'alert alert-error')
      req.flash('error', '用户名或密码错误')
      return res.redirect('/login')
    } else {
      var result = JSON.parse(JSON.stringify(result))
      res.render('login_success', { result: result[0] })
    }
  })
}
