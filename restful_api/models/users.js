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
var usersModel = mongoose.model('users', userSchema);
var users = {};
users.create = function (req) {
    let userInfo = req.body;
    userInfo = new usersModel(userInfo);
    return userInfo.save();
};

users.update = function (req) {
    return usersModel.update(
        {"username": req.query.username},
        req.body)
        .exec();
}

users.inquire = function (req) {
    return usersModel.find(
        {"username": req.query.username},
        {
            "username": true,
            "mids": true,
            "_id": false
        }).exec();
}
users.delete = function (req) {
    return usersModel.remove({"username": req.query.username});
}
module.exports = users;