const { Schema, model } = require('mongoose')


const QuestionSchema = new Schema({

    
    respones: [{ type: Schema.ObjectId, ref: "Response" }]
}, { timestamps: true })


const Question = model("Question", QuestionSchema);

module.exports = Question;