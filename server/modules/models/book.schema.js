const mongoose = require( 'mongoose' );
const Schema = mongoose.Schema;

const bookSchema = new Schema(
    {
        title: { type: String, required: true, unigue: true },
        author: { type: String, required: true },
        published: { type: Date }
    }
);

module.exports = mongoose.model( 'book', bookSchema );