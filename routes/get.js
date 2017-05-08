/**
 * description  get方式路由文件
 * author atinosun
 * created_date 2017-05-05
 * updated_date 2017-05-08
 */
var express = require('express');
var router = express.Router();

//定义此路由文件使用的中间件
var getMiddleware = function (req, res, next) {
    console.log('现在正在使用get方式的中间件～');
    next();
}

router.use(getMiddleware);

//商品分类列表
router.get('/goods/list', function (req, res) {
    res.status(200);
    res.send('商品分类列表');
});

//商品详情
router.get('/goods/detail/:id', function (req, res) {
    res.status(200);
    res.send('正在查看商品' + req.params.id + '的详细信息');
});


module.exports = router;