const { Schema, model } = require('mongoose')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken');
const Roles = require('../constants/Roles');

const UserSchema = new Schema({
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
    role: { type: String, enum:[Roles.STUDENT,Roles.TEACHER, Roles.ADMIN,Roles.SUPER_ADMIN], required: [true, 'Please provide a role'] }
}, { timestamps: true })


UserSchema.pre('save', async function (next) {
    if (!this.isModified('password')) {
        next();
    }
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
});

UserSchema.methods.getSignedJwtToken = function () {
    return jwt.sign({ id: this._id, role: this.role }, process.env.SECRET_TOKEN, {
        expiresIn: process.env.JWT_EXPIRE_IN
    });
};

const User = model("User", UserSchema);

module.exports = User;
