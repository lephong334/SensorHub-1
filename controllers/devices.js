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
                sensorhub.devices_query({access_token : req.session.token}),
                function (devices, callback) {
                    // map each item in the systems to var device
                    async.map(devices, function (device, cb) {
                        console.log(devices);
                        // request get each device infomation with token                     
                        sensorhub.data_query({device_id : device.device_id, access_token : req.session.token})
                            (function (err, device_info) {
                                if (err) {
                                    console.log("ERR with body: " + err);
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
            console.log("ERR: " + err);
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
                // active : "systems"
            });
        }
    });

};
