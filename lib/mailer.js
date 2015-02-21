module.exports = (function() {

    var config = require('../config'),
        nodemailer = require('nodemailer'),
        sendmailTransport = require('nodemailer-sendmail-transport');

    var smtpTransport = nodemailer.createTransport({
        service: 'Gmail',
        auth: config.mailaccount
    });

    return {
        send: function(config, callback) {
            var params = require('../config'),
            mailOptions = {
                from: config.from,
                to: params.mailsetup.to,
                subject: config.subject,
                text: config.text,
                html: config.html
            };

            smtpTransport.sendMail(mailOptions, function(error, response) {
                if (error) {
                    console.log(error);
                } else {
                    process.stdout.write('\n');
                    console.log("Message sent: " + response.message);
                }
                callback.call();
            });
        }
    };

})();
