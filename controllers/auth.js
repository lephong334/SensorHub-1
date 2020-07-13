"use strict";

// Modules dependencies
// ---------------------------

var sensorhub = require('../model/sensorhub');
var _ = require('underscore');
var async = require('async');


/**
 * Manage login/authentication Redirect on login page if there aren't access_token in current session
 */
exports.check = function (req, resp, next) {
    // save the original URL in case we redirect to the login page
    // to allow it to return to the requested page
    req.session.originalUrl = req.originalUrl;
    if (!req.session.access_token) {
        resp.redirect('/signin');
        // } else if (req.session.expires_at - 3600000 > new Date().getTime()) {

        //     var options = {
        //         "grant_type": "refresh_token",
        //         "refresh_token": req.session.refresh_token,
        //        // "client_id": client_id,
        //         "client_secret": client_secret
        //     }

        //     airvantage.token_query(options)(function (err, res) {
        //         if (err) {
        //             console.log("ERR: " + err);
        //             resp.redirect('/signin');
        //         } else {

        //             // on success, refresh access token and continue to the requested page
        //             req.session.access_token = res.access_token;
        //             req.session.refresh_token = res.refresh_token;
        //             req.session.expires_at = new Date().getTime() + res.expires_in * 1000;
        //             next();
        //         }
        //     });

    } else {
        next();
    }
};

exports.signin = {};

/** render login page */
exports.signin.get = function (req, resp) {
    resp.render('signin', {msg: req.flash('msg')});
};

/** try get access_token for AirVantage */
exports.signin.post = function (req, resp, next) {

    var options = {
        "email": req.body.username,
        "password": req.body.password,
    }

    sensorhub.token_query(options)(function (err, res) {
        if (err) {
            console.log("ERR with body: " + err);
            req.flash('msg', 'Sai tên đăng nhập hoặc mật khẩu');
            resp.redirect('/signin');
        } else {

            // on success, refresh access token and continue to the requested page
            req.session.access_token = res.token;
            req.session.email = req.body.username;
            //req.session.access_token = res.access_token;
            // req.session.refresh_token = res.refresh_token;
            // req.session.expires_at = new Date().getTime() + res.expires_in * 1000;
            if (req.session.originalUrl)
                resp.redirect(req.session.originalUrl);
            else
                resp.redirect('/');
        }
    });
};

exports.signout = {};

/** clear session : delete login information */
exports.signout.post = function (req, resp) {
    req.session.access_token = null;
    // req.session.refresh_token = null;
    // req.session.expires_at = null;
    resp.render('signin', {});
};
