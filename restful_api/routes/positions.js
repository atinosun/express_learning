/**
 * description  positions 推荐位置集合路由文件
 * author atinosun
 * created_date 2017-05-09
 */
var express = require('express');
var router = express.Router();

var result = function (req, res) {
    res.send(req.method + req.originalUrl + '请求成功!');
};

router.route('/positions')
    .post(result)
    .put(result)
    .patch(result)
    .get(result);


module.exports = router;