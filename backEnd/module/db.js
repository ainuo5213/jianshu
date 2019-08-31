"use strict";
const mongoose = require('mongoose');
const db = mongoose.createConnection('mongodb://127.0.0.1:27017/mongoose', {useNewUrlParser: true});
module.exports = db;