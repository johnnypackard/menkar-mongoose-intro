// Express Requires
const express = require( 'express' );
const bodyParser = require( 'body-parser' );

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

// Server Requires
const PORT = process.env.PORT || 5000;
app.listen(PORT, ()=> console.log( `Server spinning on port ${PORT}...`));

// Require in our Mongoose Model
const Book = require('./modules/models/book.schema');

// connect to database
const mongoose = require( 'mongoose' );

const DATABASE_NAME = 'library';
const DATABASE_URL = `mongodb://localhost:27017/${DATABASE_NAME}`;
mongoose.connect(DATABASE_URL);

// !!!! without the following logs, we won't know mongoose has been connected
mongoose.connection.on('connected', ()=>{
    console.log(`Mongoose is connected to ${DATABASE_URL}`);
});

mongoose.connection.on( 'error', ()=>{
    console.log( `Mongoose connection error: ${error}`);
}); 
// ---- END of Mongo Connection Stuff

// Add static files later...

// Add router later...

