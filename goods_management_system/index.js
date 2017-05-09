/**
 * description  主入口文件
 * author atinosun
 * created_date 2017-05-04
 * updated_date 2017-05-08
 */
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var server = require('http').createServer(app);

var getRouter = require('./routes/get');
var postRouter = require('./routes/post');

var indexMiddleware = function (req, res, next) {
    console.log('全局中间件～');
    next();
};

app.use(bodyParser.json({limit: '1mb'}));
app.use(bodyParser.urlencoded({
    extended: true
}));

//使用全局中间件,放在所有路由前面才生效！！！
app.use(indexMiddleware);

//使用路由
app.use('/get', getRouter);
app.use('/post', postRouter);

app.listen(3000, function () {
    console.log('Express is running now on port 3000!');
});
