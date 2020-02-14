const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const authorSchema = new Schema({
    first_name:String,
    famili_name: String,
});

module.exports = mongoose.model('authors',authorSchema);