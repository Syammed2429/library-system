//adding new port
const port = 2924;

//importing modules
const express = require('express');
const mongoose = require('mongoose');

const sectionController = require('./controller/section.controller')
const bookController = require('./controller/books.controller');
const authorController = require('./controller/author.controller');
const checkoutController = require('./controller/checkout.controller');

const app = express();

app.use(express.json());

app.use('/sections', sectionController);
app.use('/authors', authorController);
app.use('/books', bookController);
app.use('/checkout', checkoutController);
app.use('/authors', authorController);
// app.use

//Connecting to the database
const connect = () => {
    return mongoose.connect('mongodb://127.0.0.1:27017/library')
}


app.listen(port, async () => {
    await connect();
    console.log(`Listening on ${port}`);
});


