
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index');
};

exports.components = function(req, res){
  res.render('components', {selection:'components'});
};

exports.lifestyle = function(req, res){
  res.render('lifestyle', {selection:'lifestyle'});
};

exports.aboutus = function(req, res){
  res.render('aboutus', {selection:'aboutus'});
};

exports.dealers = function(req, res){
  res.render('dealers', {selection:'dealers'});
};

exports.signup = function(req, res) {
      var v = req.body;console.log(req.body);
      if (v.msg) {
        var subject = 'New message from Drom website', text = 'From ' + v.name + ' contactable on ' + v.email + '. "' + v.msg + '"';
      } else {
        var subject = 'New dealer request', text = 'New dealer email: ' + v.email;
      }
      var mailer = require('../public/js/mailer'),
            mail = {
                from: v.email,
                subject: subject,
                text: text
            };

        mailer.send(mail, function(v) {
                    // req.flash('success', 'Votre message à bien été envoyé.');
             res.redirect('back');
            //res.json({success: true, answer: v});
        });

};