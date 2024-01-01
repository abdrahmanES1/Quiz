const { Schema, model } = require('mongoose')


const QuestionSchema = new Schema({    
    name : { type:String, required : [true, "Question name required"]},
    description : { type:String, required : [true, "Question description required"]},
    exam : { type:Schema.ObjectId , ref:"Exam" , required:true},
    responses: [{ type: [Schema.ObjectId], ref: "Response" }]
}, { timestamps: true })


const Question = model("Question", QuestionSchema);

module.exports = Question;