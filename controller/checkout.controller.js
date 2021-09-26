const express = require('express');
const Checkout  = require('../model//checkout.model')
const router = express.Router();



// CRUD FOR Checkout

//POST Create a single  Checkout
router.post("", async (req,res) => {
    const checkout = await Checkout.create(req.body);
    return res.status(201).send(checkout);
});

//find books that are checked out
router.get("/true", async (req, res) => {
    const checkout = await Checkout.find({checkedOut : true}).populate({
        path: "bookName",
        select : "name"
    })
    // console.log('checkout:', req.params.name)
    return res.status(200).send(checkout);
    
});

//find books in a section that are not checked out
router.get("/false", async (req, res) => {
    const checkout = await Checkout.find({checkedOut : false});
    // console.log('checkout:', req.params.name)
    return res.status(200).send(checkout);
    
});

//GET all the Checkouts
router.get("", async (req,res) => {
    const checkouts = await Checkout.find().lean().exec();
    return res.status(200).send(checkouts)
    
});

//GET - get a single Checkout with the given id
router.get ("/:id", async (req,res) => {
    const checkout = await Checkout.findById(req.params.id).lean().exec();
    return res.status(200).send(checkout)
});

//PATCH - update a single Checkout with the given id
router.patch("/:id", async (req,res) => {
    const checkout = await Checkout.findByIdAndUpdate(req.params.id, req.body, {new : true}).lean().exec();
    return res.status(200).send(checkout)
});




module.exports = router;