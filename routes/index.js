var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	res.render('index', {title : 'Drom'});
});

router.get('/components', function(req, res, next) {
	res.render('components', {selection:'components', title : 'Drom - Components'});
});

router.get('/lifestyle', function(req, res, next) {
	res.render('lifestyle', {selection:'lifestyle', title : 'Drom - Lifestyle'});
});

router.get('/aboutus', function(req, res, next) {
	res.render('aboutus', {selection:'aboutus', title : 'Drom - About us'});
});

router.get('/dealers', function(req, res, next) {
	res.render('dealers', {selection:'dealers', title : 'Drom - Dealers'});
});

router.post('/signup', function(req, res, next) {
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
      });
});

router.get('/oauth', function(req, res, next) {
  res.send(req.query.code);
});

module.exports = router;
