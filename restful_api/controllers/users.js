/**
 * description users集合控制器
 *
 * author atinosun
 * created_date 2017-05-09
 */
var usersModel = require('../models/users');

var usersController = {};
usersController.add = function (req, res) {
    //console.log(req.body);
    var hasSaved = usersModel.add(req);
    hasSaved.then(function (result) {
        res.send("用户录入成功：" + result);
    }).catch(function (err) {
        //to do
            //不能直接这么抛出异常信息，需要对异常信息进行处理。否则数据库的结构会暴露
        console.log(err);
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

module.exports = usersController;



