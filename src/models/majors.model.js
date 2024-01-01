const { Schema, model } = require('mongoose')


const MajorSchema = new Schema({
    name: { type: String, required: [true, "Major Name Required"], unique: [true, "Major Name must be unique"] },
    users: [{ type: Schema.ObjectId, ref: "User" }],
    exams: [{ type: Schema.ObjectId, ref: "Exam" }]
}, { timestamps: true })


const Major = model("Major", MajorSchema);

module.exports = Major;