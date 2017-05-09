/**
 * description  users 用户账号集合路由文件
 * author atinosun
 * created_date 2017-05-09
 */
var express = require('express');
var router = express.Router();
var config = require('config');
var usersController = require('../controllers/users');

var result = function (req, res, next) {
    usersController.add(req, res, next);
    res.send(req.method + req.originalUrl + '请求成功!');
};

router.route('/users')
    .post(function (req,res) {
        usersController.add(req,res)
    })
    .put(result)
    .patch(result)
    .get(result);


module.exports = router;