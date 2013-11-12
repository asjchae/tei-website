var nodemailer = require("nodemailer");

exports.story = function(req, res){
  res.render('story', { title: 'lily lights | The Story' });
};

exports.product = function(req, res){
  res.render('product', { title: 'lily lights | Our Product' });
};

exports.team = function(req, res){
  res.render('team', { title: 'lily lights | The Team' });
};

exports.contact = function(req, res){
  res.render('contact', { title: 'lily lights | Contact Us' });
};

exports.email = function(req, res) {
	var name = req.body.name;
	var emailaddress = req.body.email;
	var message = req.body.message;

	var smtpTransport = nodemailer.createTransport("SMTP",{
	    service: "Gmail",
	    auth: {
	        user: process.env.GMAIL_ADDR,
	        pass: process.env.GMAIL_PW
	    }
	});

	var mailOptions = {
	    from: emailaddress, // sender address
	    to: process.env.GMAIL_ADDR, // list of receivers
	    subject: "Message from " + name, // Subject line
	    text: message + " <" + emailaddress + ">" // plaintext body
	}

	// send mail with defined transport object
	smtpTransport.sendMail(mailOptions, function(error, response){
	    if(error){
	        console.log(error);
	    }else{
	        console.log("Message sent: " + response.message);
	    }

	    // if you don't want to use this transport object anymore, uncomment following line
	    smtpTransport.close(); // shut down the connection pool, no more messages
	});

	res.redirect('/');

};
