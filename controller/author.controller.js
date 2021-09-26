const express = require('express');
const Author  = require('../model/author.model')
const router = express.Router();



// CRUD FOR Author

//POST Create a single  Author
router.post("", async (req,res) => {
    const author = await Author.create(req.body);
    return res.status(201).send(author);
});

//GET all the Authors
router.get("", async (req,res) => {
    const authors = await Author.find().lean().exec();
    return res.status(200).send(authors)
});

//GET - get a single Author with the given id
router.get ("/:id", async (req,res) => {
    const author = await Author.findById(req.params.id).lean().exec();
    return res.status(200).send(author)
});

//PATCH - update a single Author with the given id
router.patch("/:id", async (req,res) => {
    const author = await Author.findByIdAndUpdate(req.params.id, req.body, {new : true}).lean().exec();
    return res.status(200).send(author)
});

module.exports = router;