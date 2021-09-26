const mongoose = require('mongoose');

//Creating sectionSchema
const sectionSchema = new mongoose.Schema({
    name : {type: String, required: true}
}, {
    versionKey : false,
    timestamps : true
});

//Connecting Schema to the collection
const Section = mongoose.model('section', sectionSchema);


module.exports = Section;
