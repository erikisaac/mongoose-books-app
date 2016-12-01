var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var BookSchema = new Schema({
     title: String,
    // you should fill the rest of this in
 	// Add these:
 	// author
	// image (use a string for this)
	// releaseDate
	 author: String,
	 image: String,
	 // Note: I don't know if the Date type works.
	 releaseDate: Date
});

var Book = mongoose.model('Book', BookSchema);

module.exports = Book;