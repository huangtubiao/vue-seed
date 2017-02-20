"use strict";

// var data = require('../model/model');
// var hw = require('../model/db');
var requestSync = require('../common/requestSync');
var htmlparser = require("htmlparser");
var htmlToText = require('html-to-text');
var CGI_PATH = require('../config/cgiPath');

const fs = require('fs'),
    path = require('path');

exports.index = function*() {
    yield* this.render('index', {
        content: 'qianfan anchors'
    });
};

exports.list = function*() {

    let query = this.request.query,
        urlParam = '?chlid=' + query.chlid + '&refer=' + query.refer +
        '&otype=' + query.otype + '&callback=' + query.callback +
        '&=t' + query.t;


    var res = yield requestSync.ajax({
        uri: CGI_PATH['GET_TOP_NEWS'] + urlParam,
        method: 'GET'
    });

    this.set('Access-Control-Allow-Origin', 'http://localhost:9001');
    this.set('Access-Control-Allow-Credentials', true);

    this.body = res.body;
};

exports.detail = function*() {
    var res = yield requestSync.ajax({
        uri: "http://view.inews.qq.com/a/" + this.request.body.news_id //this.request.body.url
    });

    var text = htmlToText.fromString(res.body, {
        ignoreImage: false,
        ignoreHref: false,
    });

    this.set('Access-Control-Allow-Origin', 'http://localhost:9001');
    this.set('Access-Control-Allow-Credentials', true);

    this.body = {
        ret: 0,
        content: text
    };
};
