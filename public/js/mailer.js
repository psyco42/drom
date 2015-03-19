module.exports = (function() {

    var config = require('../../config'),
        nodemailer = require('nodemailer'),
        // google = require('googleapis.js'),
        // OAuth2Client = google.auth.OAuth2,
        sendmailTransport = require('nodemailer-sendmail-transport');
        // generator = require('xoauth2').createXOAuth2Generator(config.oauthsetup);
    // generator.on('token', function(token){
    //     console.log('New token for %s: %s', token.user, token.accessToken);
    // });
    // var oauth2transport = nodemailer.createTransport(({
    //     service: 'gmail',
    //     auth: {
    //         xoauth2: generator
    //     }
    // }));
    var smtpTransport = nodemailer.createTransport({
        service: 'Gmail',
        auth: config.mailaccount
    });

    return {
        send: function(config, callback) {
            var params = require('../../config'),
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
                    console.log("Message sent: " + response.message, response);
                    console.log("Error: " + error);
                }
                callback.call();
            });
        }
    };

})();
