module.exports = (function() {

    var config = require('../../config'),
        nodemailer = require('nodemailer'),
        sendmailTransport = require('nodemailer-sendmail-transport'),
        generator = require('xoauth2').createXOAuth2Generator({
            user: 'mario@dromride.com',
            // clientEmail: '177592840077-15vui5j8guoeb7p1aadohkht299cva80@developer.gserviceaccount.com',
            clientId: '177592840077-15vui5j8guoeb7p1aadohkht299cva80.apps.googleusercontent.com',
            clientSecret: '4srbb5QmHYVr5kwHg-r-Iy2K',
            // callbackURL: 'http://localhost:3002/oauth2callback',
            refreshToken: '1/v14mJDgBAtGVR1Rlhw_JJuCKvmHOXMi_kY9Aw4JnQJ590RDknAdJa_sgfheVM0XT'
        });
    // generator.on('token', function(token){
    //     console.log('New token for %s: %s', token.user, token.accessToken);
    // });
    var oauth2transport = nodemailer.createTransport(({
        service: 'gmail',
        auth: {
            xoauth2: generator
        }
    }));
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
                    console.log("Message sent: " + response.message);
                    // request.flash('success', 'Votre message à bien été envoyé.');
                    // response.redirect('/contacter-printwithlove');
                }
                callback.call();
            });
        }
    };

})();
