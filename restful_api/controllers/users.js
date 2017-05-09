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

    res.send('已经保存成功!');
    return;
};

module.exports = usersController;



