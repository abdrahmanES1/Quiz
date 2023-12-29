const { Schema, model } = require('mongoose')


const ExamSchema = new Schema({
    questions: [{ type: Schema.ObjectId, ref: "Question" }]
}, { timestamps: true })


const Exam = model("Exam", ExamSchema);

module.exports = Exam;