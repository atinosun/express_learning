/**
 * description  users 用户账号集合路由文件
 * author atinosun
 * created_date 2017-05-09
 */
var express = require('express');
var usersController = require('../controllers/users');

var router = express.Router();

var result = function (req, res) {
    res.send(req.method + req.originalUrl + '请求成功!');
};

router.route('/users')
    .post(function (req, res) {
        usersController.create(req, res);
    })
    .put(function (req, res) {
        usersController.update(req, res);
    })
    .patch(function (req, res) {
        usersController.update(req, res);
    })
    .delete(function (req, res) {
        usersController.delete(req, res);
    })
    .get(function (req, res) {
        usersController.inquire(req, res);
    });


module.exports = router;