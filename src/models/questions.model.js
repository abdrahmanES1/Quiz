const { Schema, model } = require('mongoose')


const QuestionSchema = new Schema({
    name: { type: String, required: [true, "Question name required"] },
    description: { type: String, required: [true, "Question description required"] },
    exam: { type: Schema.ObjectId, ref: "Exam", required: [true, "Exam id is required"] },
    response: {
        "a": { type: String, required: [true, "choice 'a' is required"] },
        "b": { type: String, required: [true, "choice 'b' is required"] },
        "c": String,
        "d": String,
        correct: {
            type: [String],
            enum: ['a', 'b', 'c', 'd'],
            required: [true, "correct answer is required"]
        },
    }
}, { timestamps: true })


const Question = model("Question", QuestionSchema);

module.exports = Question;