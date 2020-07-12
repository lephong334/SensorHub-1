// this is to asign global useremail to views

exports.email_info = function(req, res, next){
    if(req.session.email) {
        res.locals({
            email: req.session.email
        });
    }
    console.log("middleware runnig")

    next()
}