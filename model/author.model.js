const mongoose =  require('mongoose');

//Creating author scheme
const authorSchema = new mongoose.Schema({
    first_name : {type: String, required: true},
    last_name : {type: String, required: true},
    // bookName : {type : mongoose.Schema.Types.ObjectId, ref: "book", required: true}
}, {
    versionKey : false,
    timestamps : true
});

//Connecting authorSchema ot the author collection
const Author = mongoose.model('author', authorSchema);

module.exports = Author;