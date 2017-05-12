/**
 *description apps集合控制器
 *
 * author atinosun
 * created_date 2017-05-12
 */
var appsModel = require("../models/apps");

var appsController={};

appsController.create=function(req,res){
    var hasSaved=appsModel.create(req);
    hasSaved.then(function(result){

    })
}