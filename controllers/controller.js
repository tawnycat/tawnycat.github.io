var db = require("../models");
var api_key = process.env.API_KEY;
var domain = process.env.DOMAIN;
var mailgun = require('mailgun-js')({ apiKey: api_key, domain: domain });

var exports = module.exports = {};

exports.home = function(req, res) {
    res.render('home');
}

exports.about = function(req, res) {
    res.render('about');
}

exports.portfolio = function(req, res) {
    db.portfolioExamples
        .find({})
        .then(function(dbPortfolio) {
            res.render("portfolio", { portfolioExample: dbPortfolio });
        })
        .catch(function(err) {
            res.json(err);
        });
}

exports.blog = function(req, res) {
    res.render('blog');
}

exports.contact = function(req, res) {
    res.render('contact');
}

exports.sendEmail = function(req, res) {

    console.log(req);

    var data = {
        from: req.body.email,
        to: 'hello@tawnycat.com',
        subject: 'Message from ' + req.body.name,
        text: req.body.message
    };

    mailgun.messages().send(data, function(error, body) {
        console.log("body: " + body);
        console.log("error: " + error);
        res.render('thanks');
    });

};