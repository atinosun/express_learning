/**
 * description apps集合数据库操作类
 *
 * author atinosun
 * created_date 2017-05-12
 */
var mongoose = require("mongoose");

var schema = mongoose.Schema;
var appSchema = new schema({
    mid: {type: String, unique: true, required: true},
    mobileName: {type: String, unique: true, required: true},
    description: {type: String, unique: false, required: true},
    securityKey: {type: String, unique: true, required: true},
    type: {type: String, unique: false, required: true},
    isOnline: {type: Boolean, unique: false, required: true}
}, {
    versionKey: false
});
var appsModel = mongoose.model("apps", appSchema);
var apps = {};

apps.create = function (req) {
    let appInfo = new appsModel(req.body);
    return appInfo.save();
};

apps.update = function (req) {
    let appInfo = req.body;
    delete appInfo["mid"];
    return appsModel.update({
        "mid": req.query.mid
    }, appInfo).exec();
};

apps.inquire = function (req) {
    return appsModel.find({
        "mid": req.body.mid
    }, {
        "mid": false,
        "_id": false
    }).exec();
};

module.exports = apps;