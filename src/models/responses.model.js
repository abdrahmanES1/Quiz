const { Schema, model } = require('mongoose')


const ResponseSchema = new Schema({
    name : { type:String, required : [true, "Responce name required"]},
    description : { type:String, required : [true, "Responce description required"]},
    question : { type:Schema.ObjectId , ref:"Question" , required:true},
    value : { type:Boolean , default : false},
    createdBy: { type: Schema.ObjectId, ref: "User" }
}, { timestamps: true })


const Response = model("Response", ResponseSchema);

module.exports = Response;