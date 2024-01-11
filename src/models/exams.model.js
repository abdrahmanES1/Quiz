const { Schema, model } = require('mongoose')


const ExamSchema = new Schema({
    name: { type: String, required: [true, "Exam name required"] },
    description: { type: String, required: [true, "Exam description required"] },
    questions: { type: [Schema.ObjectId], ref: "Question" },
    major: { type: Schema.ObjectId, ref: 'Major', required: [true, "Major id required"] },
    createdBy: { type: Schema.ObjectId, ref: "User" }
}, { timestamps: true })


const Exam = model("Exam", ExamSchema);

module.exports = Exam;