
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index');
};

exports.components = function(req, res){
  res.render('components');
};

exports.lifestyle = function(req, res){
  res.render('lifestyle');
};

exports.aboutus = function(req, res){
  res.render('aboutus');
};

exports.dealers = function(req, res){
  res.render('dealers');
};

exports.signup = function(req, res) {
    var v = req.body;
    if (
        v.email && v.email.length
    ) {
        var mailer = require('../lib/mailer'),
            mail = {
                from: v.email,
                subject: 'New dealer request',
                text: [
                    'New dealer email: ' + v.email
                ].join('')
            };

        mailer.send(mail, function(v) {
            res.json({success: true, answer: v});
        });
    } else {
        res.json({success: false});
    }

};