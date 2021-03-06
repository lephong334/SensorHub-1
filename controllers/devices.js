"use strict";

// Modules dependencies
// ---------------------------
var sensorhub = require('../model/sensorhub');
var _ = require('underscore');
var async = require('async');


/**
 * Manage get request on systems.
 */

exports.get = function (req, resp) {
    // using parallel to get systems and alerts
    async.parallel({
        // get all systems and their data         
        devices : async.apply(
            // using waterfall to excute all task sequentially
            async.waterfall, [
                // request get the systems with token
                sensorhub.devices_query({access_token : req.session.access_token}),
                function (devices, callback) {
                    // map each item in the systems to var device
                    async.map(devices, function (device, cb) {
                        // console.log(devices);
                        // request get each device infomation with token
                        sensorhub.data_query({device_id : device.device_id, access_token : req.session.access_token})
                            (function (err, device_info) {
                                if (err) {
                                    console.log("ERR: " + err);
                                } else {
                                    device = device_info[0];
                                    cb(err, device);                                         
                                }
                                // if (device_info) {
                                //     if ("greenhouse.temperature" in data && data["greenhouse.temperature"] !== null) {
                                //         system.temperature = data["greenhouse.temperature"][0].value;
                                //     }
                                //     if ("greenhouse.luminosity" in data && data["greenhouse.luminosity"] !== null) {
                                //         system.luminosity = data["greenhouse.luminosity"][0].value;
                                //     }
                                //     if ("greenhouse.humidity" in data && data["greenhouse.humidity"] !== null) {
                                //         system.humidity = data["greenhouse.humidity"][0].value;
                                //     };
                                // }
                                // console.log(device);
                            });
                    }, callback);
                }
            ]
        ),
        // // have no alert
        // // get all alerts
        // alerts : airvantage.alerts_query({fields : "uid,date,target,acknowledgedAt",access_token : req.session.access_token}) 
    },
    function(err, res) {
        if (err) {
            console.log("ERR with body: " + err);
            next(err);
        } else {
            // // have no alert
            // // count number of not acknowled alerts
            // var alerts_count = _.size(_.reject(res.alerts.items, function(alert){return alert.acknowledgedAt}));

            // // attach alerts to their system
            // var alerts = _.groupBy(res.alerts.items, 'target');

            // var systems = _.map(res.systems, function(system) {
            //     var a = alerts[system.uid];
            //     if (a) {
            //         var alerts_count = _.size(_.reject(a, function(alert){return alert.acknowledgedAt}));
            //         if (alerts_count > 0) system.alerts_count = alerts_count;
            //     }
            //     return system;
            // });

            // render the page
            resp.render('devices', {
                // alerts_count : alerts_count,
                devices: res.devices,
                msg: req.flash('msg')
                // active : "systems"
            });
        }
    });

};

exports.add = {};
exports.add.post = function (req, resp) {

    var device_id = req.body.device_id;

    if (device_id == "") {
        resp.redirect('/devices');
    } else {
        var options = {
            "device_id": device_id,
            "access_token": req.session.access_token,
        };

        sensorhub.add_device_query(options)(function (err, res) {
            if (err) {
                req.flash('msg','failed');
                console.log("ERR with body: " + err);
                resp.redirect('/devices');
            } else {
                req.flash('msg','Add successfuly');
                resp.redirect('/devices');
            }
        });
    }
};

exports.delete = function (req, resp) {
    var options = {
        "device_id": req.params.id,
        "access_token": req.session.access_token,
    };

    sensorhub.delete_device_query(options)(function (err, res) {
        if (err) {
            console.log("ERR with body: " + err);
            req.flash('msg','Failed');
            resp.redirect('/devices');
        } else {
            req.flash('msg','Deleted');
            resp.redirect('/devices');
        }
    });
};


exports.edit = {};
exports.edit.get = (req, res) =>{
    var device_id = req.params.id;
    res.render('device_edit.ejs',{device_id});
}


exports.edit.post = (req, resp) => {
    var params = {
        device_id : req.body.device_id,
        device_name: req.body.device_name,
        access_token: req.session.access_token
    }
    sensorhub.device_update(params)(function(err, res){
        if(!err) {
            req.flash('msg','Update success');
            resp.redirect('/devices');
        } else console.log (err)
    })
}