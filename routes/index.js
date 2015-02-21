
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