var nodemailer = require("nodemailer");

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

exports.sendEmail = function(req, res) {

const transport = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: 'tawnyeleanor@gmail.com',
        pass: '',
    },
});
  //Mail options
  var mailOptions = {
      from: req.body.name + ' &lt;' + req.body.email + '&gt;',
      to: 'tawnyeleanor@gmail.com',
      subject: 'Website contact form',
      text: req.body.message
  };

  transporter.sendMail(mailOptions, function (error, response) {

      if (error) {
          console.log(error);
      }

      else {
      	console.log("email sent");
          res.render('home');
      }
  });

};