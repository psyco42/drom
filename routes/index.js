var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	res.render('index');
});

router.get('/components', function(req, res, next) {
	res.render('components', {selection:'components'});
});

router.get('/lifestyle', function(req, res, next) {
	res.render('lifestyle', {selection:'lifestyle'});
});

router.get('/aboutus', function(req, res, next) {
	res.render('aboutus', {selection:'aboutus'});
});

router.get('/dealers', function(req, res, next) {
	res.render('dealers', {selection:'dealers'});
});

router.get('/signup', function(req, res, next) {
  	var v = req.body;
    
    if (v.email && v.email.length) {
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
});

module.exports = router;
