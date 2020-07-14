"use strict";

// Modules dependencies
// ---------------------------
var sensorhub = require('../model/sensorhub');
var _ = require('underscore');
var async = require('async');

exports.get = function (res, resp) {
    resp.render('documentation');
}