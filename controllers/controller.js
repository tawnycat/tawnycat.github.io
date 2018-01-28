var exports = module.exports = {};

exports.home = function(req, res) {
    res.render('home');
}

exports.about = function(req, res) {
    res.render('about');
}

exports.portfolio = function(req, res) {
    res.render('portfolio');
}

exports.blog = function(req, res) {
    res.render('blog');
}

exports.contact = function(req, res) {
	res.render('contact');
}