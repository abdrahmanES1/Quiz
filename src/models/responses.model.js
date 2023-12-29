const { Schema, model } = require('mongoose')


const ResponseSchema = new Schema({

}, { timestamps: true })


const Response = model("Response", ResponseSchema);

module.exports = Response;