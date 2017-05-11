/**
 * description users集合控制器
 *
 * author atinosun
 * created_date 2017-05-09
 */
var usersModel = require('../models/users');

var usersController = {};

//POST
usersController.create = function (req, res) {
    var hasSaved = usersModel.create(req);
    hasSaved.then(function (result) {
        // to do
        //应该去掉密码字段，只返回给请求方username和mids
        res.send("用户录入成功：" + result);
    }).catch(function (err) {
        //to do
        //不能直接这么抛出异常信息，需要对异常信息进行处理。否则数据库的结构会暴露
        let errorMsg = err.message;
        if ("errors" in err) {
            if ("username" in err.errors) {
                errorMsg += err.errors.username.message;
            }
            if ("password" in err.errors) {
                errorMsg += " and " + err.errors.password.message;
            }
            if ("mids" in err.errors) {
                errorMsg += "and " + err.errors.mids.message;
            }
        }
        res.send("用户录入失败：" + errorMsg);
    })
};

//PUT&&PATCH
//to do
//逻辑应该再优化，更新的时候应该验证字段？
usersController.update = function (req, res) {
    if (!("username" in req.query) || req.query.username == '') {
        res.send("request err:username is required");
        return;
    }
    let hasUpdated = usersModel.update(req);
    hasUpdated.then(function (result) {
        if (result.ok && result.n && result.nModified) {
            res.send("用户数据更新成功：" + req.body.toString());
            return;
        }
        //to do
        //应在更新前去查询用户信息是否存在，不存在则拒绝请求？
        res.send("用户数据更新失败：请查询用户是否存在!");
    }).catch(function (err) {
        //to do
        //优化err信息，不可以这么直接抛出
        res.send("request err:" + err.message);
    })
}

//GET
usersController.inquire = function (req, res) {
    if (!("username" in req.query) || req.query.username == '') {
        res.send("request err:username is required");
        return;
    }
    let userInfo = usersModel.inquire(req);
    userInfo.then(function (result) {
        if (result != "") {
            res.send("用户数据查询成功:" + result);
            return;
        }
        res.send("用户数据查询失败:用户不存在。");
    }).catch(function (err) {
        //to do
        //需要知道什么时候会走到err，目前未走到此处过
        res.send("用户数据查询失败:", err);
    });
}
//DELETE
usersController.delete = function (req, res) {
    if (!("username" in req.query) || req.query.username == '') {
        res.send("request err:username is required");
        return;
    }
    let hasDeleted = usersModel.delete(req);
    hasDeleted.then(function (result) {
        if (result.result.ok && result.result.n) {
            res.send("用户数据删除成功!");
            return;
        }
        res.send("用户数据删除失败，请确认用户是否存在!");
    }).catch(function (err) {
        //to do
            //目前报错只出现在username未出现的时候，因为上面已经拦截错误，所以不需要输出，下一步考虑是否有其他错误形式
        // console.log(err);
    });
};
module.exports = usersController;



