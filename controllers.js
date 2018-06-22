const Pets = require('./mongoose');

module.exports = {
	create: create,
	findAll: findAll,
	findOne: findOne,
	deleteOne: deleteOne,
	updateOne: updateOne
}

function create(req, res){
	Pets.create(req.body)
		.then(data=>res.json(data))
		.catch(errs=>res.json(errs));
}
function findAll(req, res){
	Pets.find({})
		.sort({type: 1})
		.then(data=>res.json(data))
		.catch(errs=>res.json(errs));

}
function findOne(req, res){
	Pets.findById(req.params.id)
		.then(data=>res.json(data))
		.catch(errs=>res.json(errs));
}
function updateOne(req, res){
	Pets.findByIdAndUpdate(req.params.id, req.body, {runValidators: true})
		.then(data=>res.json(data))
		.catch(errs=>res.json(errs));
}
// function addQuote(req, res){ //erg
// 	// Authors.findByIdAndUpdate(req.params.id)
// 	// .then(author=>{
// 	// 	author.quotes.push(req.body);
// 	// 	return author.save();

// 	// })
// 	// .then(data=>res.json(data))
// 	// .catch(errs=>res.json(errs));
// 	let newQ = new Quotes(req.body);
// 	newQ.save()
// 		.then(q=>{
// 			console.log(q)
// 			return Authors.findByIdAndUpdate(req.params.id, {$push: {quotes: req.body}})
// 		})
// 		.then(data=>res.json(data))
// 		.catch(errs=>res.json(errs));
// }


function deleteOne(req, res){
	Pets.findByIdAndRemove(req.params.id)
		.then(data=>res.json(data))
		.catch(errs=>res.json(errs));
}

