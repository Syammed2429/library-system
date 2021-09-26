const mongoose = require('mongoose');

//Creating checkedOutSchema 
const checkedOutSchema = new mongoose.Schema({
    userName : {type: String, required: true},
    checkedOut : {type : Boolean, required: true},
    bookName : {type: mongoose.Schema.Types.ObjectId, ref: "book", required: true}
    // user : {type: mongoose.Schema.Types.ObjectId, ref : }
}, 
{
    versionKey : false,
    timestamps : true

});

//Connecting checkedOutSchema to the checkedOut collections
const CheckedOut = mongoose.model("checkout",checkedOutSchema);

module.exports = CheckedOut;
