/**
 * description  主入口文件
 * author atinosun
 * created_date 2017-05-09
 */
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var server = require('http').createServer(app);
var apiRouter = express.Router();
var config = require('config');
var routesPath = './routes/';
var usersRouter = require(routesPath + 'users');
var appsRouter = require(routesPath + 'apps');
var attributesRouter = require(routesPath + 'attributes');
var schedulesRouter = require(routesPath + 'schedules');
var dimensionalityRouter = require(routesPath + 'dimensionality');
var positionsRouter = require(routesPath + 'positions');
var actiontypesRouter = require(routesPath + 'actiontypes');
var actionsRouter = require(routesPath + 'actions');
var mongooese = require('mongoose');
var mongoConfig = config.get('db.mongodb');
var mongoUrl = 'mongodb://' + mongoConfig.host + ":" + mongoConfig.port + "/" + mongoConfig.database;
if (mongoConfig.username && mongoConfig.password) {
    mongoUrl = 'mongodb://' + mongoConfig.username + ":" + mongoConfig.password + "@" + mongoConfig.host
        + ":" + mongoConfig.port + "/" + mongoConfig.database;
}
var db = mongooese.connect(mongoUrl);

db.connection.on("error", function (error) {
    console.log("数据库连接失败：" + error);
});

db.connection.on("open", function () {
    console.log("数据库连接成功");
});

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

//定义全局路由前缀
app.use('/api', apiRouter);
//使用路由
apiRouter.use(usersRouter);
apiRouter.use(appsRouter);
apiRouter.use(attributesRouter);
apiRouter.use(schedulesRouter);
apiRouter.use(dimensionalityRouter);
apiRouter.use(positionsRouter);
apiRouter.use(actiontypesRouter);
apiRouter.use(actionsRouter);

app.listen(3000, function () {
    console.log('Express is running now on port 3000!');
});
