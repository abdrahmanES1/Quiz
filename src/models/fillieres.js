const { Schema, model } = require('mongoose')


const FilliereSchema = new Schema({
    name : { type:String, required : [true, "Filliere name required"]},
    description : { type:String, required : [true, "Filliere description required"]},
    exams: [{ type: Schema.ObjectId, ref: "Exam" }]
}, { timestamps: true })


const Filliere = model("Filliere", FilliereSchema);

module.exports = Filliere;