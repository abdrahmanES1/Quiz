const { Schema, model } = require('mongoose')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken');
const Roles = require('../constants/Roles');

const StudentSchema = new Schema({
    firstname: { type: String, required: [true, 'Please add a first name'] },
    lastname: { type: String, required: [true, 'Please add a last name'] },
    email: {
        type: String,
        required: [true, 'Please add an email'],
        unique: true,
        match: [
            /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
            'Please add a valid email'
        ]
    },
    password: {
        type: String,
        required: [true, 'Please add a password longer than 8 characters'],
        minlength: [8, 'Please add a password longer than 8 characters'],
        select: false
    },
    major: { type: Schema.ObjectId, ref: 'Major' },
    roles: { type: [String], default: Roles.STUDENT }
    //TODO : add role 
}, { timestamps: true })


StudentSchema.pre('save', async function (next) {
    if (!this.isModified('password')) {
        next();
    }
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
});

StudentSchema.methods.getSignedJwtToken = function () {
    //TODO : add role 
    return jwt.sign({ id: this._id, roles: this.roles }, process.env.SECRET_TOKEN, {
        expiresIn: process.env.JWT_EXPIRE_IN
    });
};

const Student = model("Student", StudentSchema);

module.exports = Student;