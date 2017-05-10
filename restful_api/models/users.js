/**
 * description users集合数据库操作类
 *
 * author atinosun
 * created_date 2017-05-09
 */
var mongoose = require('mongoose');


var schema = mongoose.Schema;
var userSchema = new schema({
    username: {type: String, unique: true, required: true},
    password: {type: String, required: true},
    mids: {type: [], required: true}
}, {
    versionKey: false
});
var users = mongoose.model('users', userSchema);
var usersModel = {};
usersModel.add = function (req) {
    var userInfo = req.body;
    userInfo = new users(userInfo);
    return userInfo.save();
};


module.exports = usersModel;