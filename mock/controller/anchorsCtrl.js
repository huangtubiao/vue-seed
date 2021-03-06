"use strict";

var anchorsData = require('../model/anchorsModel');
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

// mock data
exports.list = function*() {
    this.body = {
        retcode: 0,
        data: anchorsData().list
    };
};

// exports.list = function*() {
//     let query = this.request.query,
//         urlParam = '?index=' + query.index + '&size=' + query.size +
//         '&type=' + query.type + '&callback=' + query.callback;


//     var res = yield requestSync.ajax({
//         uri: CGI_PATH['GET_ANCHORS'] + urlParam,
//         method: 'GET'
//     });

//     this.set('Access-Control-Allow-Origin', 'http://localhost:9001');
//     this.set('Access-Control-Allow-Credentials', true);

//     this.body = res.body;
// };

exports.recommendAnchors = function*() {
    let query = this.request.query,
        urlParam = '?size=' + query.size + '&callback=' + query.callback;


    var res = yield requestSync.ajax({
        uri: CGI_PATH['GET_RECOMMEND_ANCHORS'] + urlParam,
        method: 'GET'
    });

    this.set('Access-Control-Allow-Origin', 'http://localhost:9001');
    this.set('Access-Control-Allow-Credentials', true);

    this.body = res.body;
};
