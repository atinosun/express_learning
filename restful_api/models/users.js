/**
 * description users集合数据库操作类
 *
 * author atinosun
 * created_date 2017-05-09
 */
var mongoose = require('mongoose');
var schema = mongoose.Schema;
var userSchema = new schema({
    username: String,
    password: String,
    mids: Object
});
var users = mongoose.model('users', userSchema);
var usersModel = {};
usersModel.add = function (req) {
    var userInfo = req.body;
    userInfo = new users(userInfo);
    var result = userInfo.save(function (err) {
        if (err) {
            console.log('save error:' + err);
        }
    });
    console.log(result);
};

module.exports = usersModel;