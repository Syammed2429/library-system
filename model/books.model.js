const mongoose = require('mongoose');


//Creating books schema
const bookSchema = new mongoose.Schema({
    name : {type: String, required: true},
    body : {type: String, required: true},
    sectionName : {type: mongoose.Schema.Types.ObjectId, ref: "section", required: true},
    authorName : {type: mongoose.Schema.Types.ObjectId, ref: "author", required: true}

}, {
    versionKey : false,
    timestamps: true
}); 

//Connecting bookSchema to the books collections
const Books = mongoose.model('book', bookSchema);

module.exports = Books;