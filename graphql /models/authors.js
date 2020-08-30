const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const authorSchema = new Schema({
    name: { type: String },
    age: { type: Number },
    gender: { type: String },

})

module.exports = mongoose.model("Author", authorSchema);