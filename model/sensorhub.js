// Modules dependencies
// ---------------------------
var https = require("https");
var _ = require("underscore");
const { hostname } = require("os");
const { access } = require("fs");
const { unescape } = require("underscore");
const { nextTick } = require("process");

// create a new query for the given host, base URL and ending URL.
// URL could  contains path parameter which will be passed to the query as a map
//
// e.g :
//       var myquery = query_get_ctor('localhost', '/myrootpath/',  'mypath/:param1/pathend');
//       myquery ({param1:'val1', param2:'val2', param3:'val3'}) ( function (err, data) {})
//
// this will request https://localhost/myrootpath/mypath/value1/pathend?param2='val2'&param3='val3'
var query_get_ctor = function (host, base, url) {
    //this params is the optional var user send from controller 
    return function (params) {
        return function (callback) {
            //handle URL path: orgURL is the url, it will be replace by var prmt which being cut from params
            var u = _.reduce(_.pairs(params), function (orgURL, prmt) {
                return orgURL.replace(":" + prmt[0], prmt[1]);
            }, url);

            const https = require("https");

            const options = {
                hostname: host,
                port: 443,
                path: base + u,
                method: "GET",
                headers: {
                    "Authorization": "Bearer " + params.access_token,
                }
            };

            const req = https.request(options, (res) => {
                var value = "";

                res.on("data", (d) => {
                    value = value + d;
                    // process.stdout.write(d);
                });
                res.on("end", function () {

                    var err = null,
                        resp = null;
                    if (res.statusCode != 200) {
                        err = "Status Code " + res.statusCode;
                        callback(err, resp);
                    } else {
                        try {
                            resp = JSON.parse(value);

                        } catch (e) {
                            err = e;
                        }
                        callback(err, resp);
                    }
                });
            });

            req.on("error", (error) => {
                console.error(error);
            });

            //req.write(data);
            req.end(function () { });
        };
    };
};

var query_post_ctor = function (host, base, url) {
    return function (params, content) {
        return function (callback) {
            //handle URL path: orgURL is the url, it will be replace by var prmt which being cut from params
            var u = _.reduce(_.pairs(params), 
            function (orgURL, prmt) {
                return orgURL.replace(":" + prmt[0], prmt[1]);
            }, url);

            const https = require("https");

            const data = JSON.stringify(params);

            const options = {
                hostname: host,
                port: 443,
                path: base + u,
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Content-Length": data.length,
                    "Authorization": "Bearer " + params.access_token,
                },
            };
            const req = https.request(options, (res) => {
                var value = "";

                res.on("data", (d) => {
                    value = value + d;
                    //  process.stdout.write(d);
                });
                res.on("end", ()=> {

                    var err = null,
                        resp = null;
                    if (res.statusCode != 200) {
                        err = "Status Code " + res.statusCode;
                        callback(err, resp);
                    } else {
                        try {
                            resp = JSON.parse(value);

                        } catch (e) {
                            err = e;
                        }
                        callback(err, resp);
                    }
                });
            });

            req.on("error", (error) => {
                console.error(error);
            });

            req.write(data);
            req.end(function () { });
        };
    };
};

var query_delete_ctor = function (host, base, url) {
    return function (params, content) {
        return function (callback) {
            //handle URL path: orgURL is the url, it will be replace by var prmt which being cut from params
            var u = _.reduce(_.pairs(params), 
            function (orgURL, prmt) {
                return orgURL.replace(":" + prmt[0], prmt[1]);
            }, url);

            const https = require("https");

            const data = JSON.stringify(params);

            const options = {
                hostname: host,
                port: 443,
                path: base + u,
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                    "Content-Length": data.length,
                    "Authorization": "Bearer " + params.access_token,
                },
            };

            const req = https.request(options, (res) => {
                var value = "";

                res.on("data", (d) => {
                    value = value + d;
                    //  process.stdout.write(d);
                });
                res.on("end", function () {

                    var err = null,
                        resp = null;
                    if (res.statusCode != 200) {
                        err = "Status Code " + res.statusCode;
                        callback(err, resp);
                    } else {
                        try {
                            resp = JSON.parse(value);

                        } catch (e) {
                            err = e;
                        }
                        callback(err, resp);
                    }
                });
            });

            req.on("error", (error) => {
                console.error(error);
            });

            req.write(data);
            req.end(function () { });
        };
    };
};

// AirVantage API, see API documentation.
// ---------------------------------------
var host = "sensorhub.tech";
var apiurl = "/api/";
var authurl = "/api/";

/** Get all systems */
exports.devices_query = query_get_ctor(host, apiurl, "device");

/** Get all alert */
exports.alerts_query = query_get_ctor(host, apiurl, "alerts");

/** Acknowledge an alert */
exports.alerts_ack = query_post_ctor(host, apiurl, "alerts/:uid/acknowledge");

/** Get last data of a system */
exports.data_query = query_get_ctor(host, apiurl, "get_device_info/:device_id");



/** Get raw datapoints of a system */
exports.data_raw_query = query_get_ctor(
    host,
    apiurl,
    "systems/:uid/data/:path/raw"
);

/** Get access token */
exports.token_query = query_post_ctor(host, authurl, "login");

/** Add new device */
exports.add_device_query = query_post_ctor(host, apiurl, "provision");

/** Delete device */
exports.delete_device_query = query_delete_ctor(host, apiurl, "provision");

exports.getUser = query_get_ctor(host, authurl, "me")

exports.device_update = query_post_ctor(host,authurl, "update_device")