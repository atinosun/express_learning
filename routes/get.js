/**
 * description  get方式路由文件
 * author atinosun
 * created_date 2017-05-05
 */
var express = require('express');
var router = express.Router();

//定义此路由文件使用的中间件
var myMiddleware = function (req, res, next) {
    console.log('现在正在使用我的中间件～');
    next();
}
// router.use(function timeLog(req, res, next) {
//     console.log('Time:' + Date.now());
//     next();
// });
router.use(myMiddleware);

router.get('/', function (req, res) {
    res.send('Get 方法首页');
});

router.get('/detail', function (req, res) {
    res.send('Get 方法详情页');
});

module.exports = router;