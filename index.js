/**
 * description  主入口文件
 * author atinosun
 * created_date 2017-05-04
 */
var express = require('express');
var app = express();

app.get('/api/get', function (req, res) {
    res.send('This is a get method interface!');
});

app.post('/api/post', function (req, res) {
    res.send('This is a post method interface!');
});

app.listen(3000, function () {
    console.log('Express is running now on port 3000!');
});