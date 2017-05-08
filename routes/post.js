/**
 * description  post方式路由文件
 * author atinosun
 * created_date 2017-05-08
 */
var express = require('express');
var router = express.Router();

//定义post方式中间件
var postMiddleware = function (req, res, next) {
    console.log('正在使用post中间件~');
    next();
};

router.use(postMiddleware);

//创建商品
router.post('/goods/creation', function (req, res) {
    res.status(200);
    //res.send(req.params);
    console.log(req.query);
    console.log(req.body);
    res.send('商品' + req.body.good_id + '录入成功');
});

module.exports = router;