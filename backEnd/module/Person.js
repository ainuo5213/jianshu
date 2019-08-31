"use strict";
const mongoose = require('mongoose');
const nanoid = require('nanoid');
const db = require('./db');
const userSchema = new mongoose.Schema({
    id: {type: String, default: nanoid()},
    username: {type: String},
    password: {type: String},
    email: {type: String},
    phone_number: {type: String}
});

let User = db.model('User', userSchema);
User.createIndexes({id: 1}, (err) => {
    if (err){
        console.log('创建索引失败');
        return
    }
     console.log("创建索引成功")
});

module.exports = User;