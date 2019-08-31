"use strict";
const fs = require('fs');
const path = require('path');
const md5 = require('md5');

function readFile (url) {
    const data = fs.readFileSync(path.join(__dirname, url));
    return data.toString();
}

function encrypt (pwd) {
    return md5(md5(pwd) + md5(pwd))
}

module.exports = {readFile, encrypt};
