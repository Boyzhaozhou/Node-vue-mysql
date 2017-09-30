var models = require('../db');
var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var $sql = require('../sqlMap');
// 连接数据库
var conn = mysql.createConnection(models.mysql);

conn.connect();
var jsonWrite = function(res, ret) {
    if(typeof ret === 'undefined') {
        res.json({
            code: '1',
            msg: '操作失败'
        });
    } else {
        res.json(ret);
    }
};

// 增加用户接口
router.post('/user', function (req, res) {
    var response = {
        "username": req.body.username,
        "password": req.body.password,
    }
    var userCheck = 'SELECT * FROM `user` WHERE username=' + '"' + response.username + '"';

    var userMysql = 'INSERT INTO `user`(`username`, `password`) VALUES (?,?)';
    var userMysqlParams = [response.username, response.password];
    queryUserSql(response, userCheck, userMysql, userMysqlParams, function (result) {
        console.log("48" + JSON.stringify(result));
        res.send(JSON.stringify(result));
    });
});
//查询
function queryUserSql(response, userCheck, userMysql, userMysqlParams, callback) {
    conn.query(userCheck, function (err, result) {
        if (err) {
            var result = {
                result:"2",
                message:err.message
            }
            callback(result);
        } else {
            if (result.length) {
                var result = {
                    result:"1",
                    message:"用户已存在"
                }
                callback(result);
                return;
            } else {
                addUserSql(userMysql, userMysqlParams,function(result){
                    console.log("66" + JSON.stringify(result));
                    callback(result);
                })
            }
        }
    });
}

// 添加
function addUserSql(userMysql, userMysqlParams,callback) {
    conn.query(userMysql, userMysqlParams, function (err,result) {
        if (err) {
            var result = {
                result:"2",
                message:err.message
            }
            callback(result);
            return;
        } else {
            console.log("注册成功");
            var result = {
                result:"0",
                message:"注册成功"
            }
            callback(result);
            console.log('--------------------------INSERT----------------------------');
            console.log('INSERT ID:', result);
            console.log('-----------------------------------------------------------------\n\n');
        }
    });
}
module.exports = router;
