"use strict";
const fs = require('../api/file');
const formidable = require('formidable');
const writers = JSON.parse(fs.readFile('../public/recommend.json'));
const details = JSON.parse(fs.readFile('../public/detail.json'));
const file = require('./file');

function getDetail(req, res) {
    let page = req.query.page;
    res.jsonp({
        totalPage: writers[page].total_page,
        data: writers[page].user
    })
}

function getWriters(req, res) {
    let page = req.query.page;
    res.jsonp({
        totalPage: details[page].total_page,
        detailArr: details[page].detailArr
    })
}

function doLogin(req, res) {
    let form = new formidable.IncomingForm();
    form.parse(req, (err, fields) => {
        if (err) {
            res.jsonp({code: 1, msg: '系统出现错误'});
            return;
        }
        let data = file.checkExit(fields);
        res.jsonp(data)
    })
}

function doRegister (req, res) {
    let form = new formidable.IncomingForm();
    form.parse(req, (err, fields) => {
        if (err) {
            res.jsonp({code: 1, msg: '系统出现错误'});
            return;
        }
        file.savePerson(fields, res);
    })
}

function doCheckExit (req, res) {
    let form = new formidable.IncomingForm();
    form.parse(req, (err, fields) => {
        if (err) {
            res.jsonp({code: 1, msg: '系统出现错误'});
            return;
        }
        file.checkExit(fields, res)
    })
}

module.exports = {getDetail, getWriters, doLogin, doRegister, doCheckExit};