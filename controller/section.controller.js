const express = require('express');
const Section  = require('../model/section.model')
const router = express.Router();



// CRUD FOR Section

//POST Create a single  Section
router.post("", async (req,res) => {
    const section = await Section.create(req.body);
    return res.status(201).send(section);
});

//GET all the sections
router.get("", async (req,res) => {
    const sections = await Section.find().lean().exec();
    return res.status(200).send(sections)
});

//GET - get a single section with the given id
router.get ("/:id", async (req,res) => {
    const section = await Section.findById(req.params.id).lean().exec();
    return res.status(200).send(section)
});

//PATCH - update a single section with the given id
router.patch("/:id", async (req,res) => {
    const section = await Section.findByIdAndUpdate(req.params.id, req.body, {new : true}).lean().exec();
    return res.status(200).send(section)
});

module.exports = router;