const { Schema, model } = require('mongoose')


const ResultSchema = new Schema({
    user: { type: Schema.ObjectId, ref: "User", required: [true, "Provide student id"] },
    exam: { type: Schema.ObjectId, ref: "Exam", required: [true, "Provide exam id"] },
    grade: { type: Number, required: [true, "Provide result grade"] },
    createdBy: { type: Schema.ObjectId, ref: "User", required: [true, "Provide the creator id"] }
}, { timestamps: true })


const Result = model("Result", ResultSchema);

module.exports = Result;