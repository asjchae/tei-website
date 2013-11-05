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
	res.send(req.body.name + req.body.message);
};