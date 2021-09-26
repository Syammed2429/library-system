const Books = require('../model/books.model');
const express = require('express');
const { application } = require('express');
const router = express.Router();



// CRUD FOR Books

//POST Create a single  Books
router.post("", async (req,res) => {
    const books = await Books.create(req.body);
    return res.status(201).send(books);
});


//find all books written by an author

router.get("/authors", async (req,res) => {
    const books = await Books.find().populate({
        path : "sectionName",
        select : "name"
    }).populate({
        path : "authorName",
        select : "first_name"
    }).lean().exec();
    return res.status(200).send(books)
});

//GET - get a single Books with the given id
router.get ("/:id", async (req,res) => {
    const book = await Books.findById(req.params.id).lean().exec();
    return res.status(200).send(book)
});

//PATCH - update a single Books with the given id
router.patch("/:id", async (req,res) => {
    const book = await Books.findByIdAndUpdate(req.params.authorName, req.body, {new : true}).lean().exec();
    return res.status(200).send(book)
});


//find books of 1 author inside a section

router.get("/:id/author", async (req,res) => {
    const books = await Books.find({authorName :req.params.id}).populate({
        path: "sectionName",
        select : "name"
    }).populate({
        path: "authorName",
        select : "first_name"
    }).lean().exec();
    console.log('books:', books)
    return res.status(200).send(books)
});

//find books in a section
router.get("/:id/section", async (req,res)=> {
    const section = await Books.find({sectionName : req.params.id}).populate({
        path : "sectionName",
        select : "name" 
    }).populate({
        path: "authorName",
        select : "first_name"
    });
    return res.status(200).send(section)
});




module.exports = router;