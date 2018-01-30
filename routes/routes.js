var controller = require('../controllers/controller.js');

module.exports = function(app) {

    app.get('/', controller.home);

    app.get('/about', controller.about);

    app.get('/portfolio', controller.portfolio);

    app.get('/blog', controller.blog);

    app.get('/contact', controller.contact);

    app.post('/send-email', controller.sendEmail);

};