/**
 * description  主入口文件
 * author atinosun
 * created_date 2017-05-04
 */
var express = require('express');
var app = express();
var get = require('./routes/get');

var indexMiddleware = function (req, res, next) {
    console.log('全局中间件～');
    next();
}
//使用全局中间件,放在所有路由前面才生效！！！
app.use(indexMiddleware);

app.get('/api/get', function (req, res) {
    res.send('This is a get method interface!');
});

app.post('/api/post', function (req, res) {
    res.send('This is a post method interface!');
});

app.get('/api/param/:name', function (req, res) {
    res.send(req.params.name);
    console.log(req.params);
});




//使用路由
app.use('/get', get);



app.listen(3000, function () {
    console.log('Express is running now on port 3000!');
});
