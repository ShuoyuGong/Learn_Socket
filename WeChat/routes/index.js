var express = require('express')
var router = express.Router()
const loginController = require('../controller/loginController')
// module.exports = router
module.exports = function (app) {
  app.get('/login', loginController.login_index)
  app.post('/do_login', loginController.do_login)
}
