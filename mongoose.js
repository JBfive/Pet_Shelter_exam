var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/pet_shelter');

const PetsSchema = new mongoose.Schema({
	name: {type: String, required: [true, "Name is required"], minlength: [3, "Must be at least 3 letters"]}, 
	type: {type: String, required: [true, "Animal type is required"], minlength: [3, "Type must be at least 3 letters long"]},
	description: {type: String, required: [true, "Please describe this pet"], minlength: [3, "Description must be at least 3 letters"]},
	skill1: {type: String},
	skill2: {type: String},
	skill3: {type: String},
	likes: {type: Number, default: 0}
}, {timestamps: true});

PetsSchema.path('name').validate({ //async custom validation, can mess with updates
	isAsync: true,
	validator: function(thisName, respond){
		mongoose.model("pets").findOne({name: thisName}, function(errs, pet){
			respond(!pet)
			
			// for adds
			// for updates/addQuotes
		})
	},
	message:"Author already exists" //returns just as above with the Schema error messages 
})
module.exports = mongoose.model('pets', PetsSchema)