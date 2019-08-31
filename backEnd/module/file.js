"use strict";
const Person = require('./Person');
const fs = require('../api/file');
function checkExit(obj, res) {
    Person.findOne(obj, (err, result) => {
        if (err){
            res.jsonp({code: 1, msg: '系统出错'});
            return
        }
        if (!result || result.length === 0) {
            res.jsonp({code: 0, msg: '不存在该用户，可以注册'});
            return
        }
        res.jsonp({code: 2, msg: '存在该用户,不允许注册'})
    })
}

function savePerson (obj, res) {
    let password = fs.encrypt(obj.password);
    let saveObj = Object.assign(obj, {password});
    Person.create(saveObj, (err, doc) => {
        if (err) {
            res.jsonp({code: 1, msg: '系统出错'});
            return
        }
        if (!doc) {
            res.jsonp({code: 2, msg: '注册失败'});
            return
        }
        return res.jsonp({code: 0, msg: '注册成功'})
    })
}

module.exports = {checkExit, savePerson};