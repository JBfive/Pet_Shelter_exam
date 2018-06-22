var Handlers = require('./controllers');

module.exports = {
	'router': Routify
}


function Routify(app){
	app.post('/api/pets', function(req, res){
		Handlers.create(req, res);
	});

	app.get('/api/pets', function(req, res){
		Handlers.findAll(req, res);
	});

	app.get('/api/pets/:id', function(req, res){
		Handlers.findOne(req, res);
	});

	app.put('/api/pets/:id/edit', function(req, res){
		Handlers.updateOne(req, res);
	});

	app.delete('/api/pets/:id', function(req, res){
		Handlers.deleteOne(req, res);
	})

	return app;
}