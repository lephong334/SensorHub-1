var sensorhub = require('../model/sensorhub');

exports.get = function(req, resp){
   // resp.render("profile");
   sensorhub.getUser({access_token : req.session.access_token})(function(err, res){
        if (err) {
            console.log("ERR with body: " + err);
            resp.redirect('/signin');
        } else {
            //resp.render("profile" ,{user_info : res})
          //  resp.send(res);
            resp.render("profile",{me:res})
        }
    })

}