const asyncHandler = require('express-async-handler');
const User = require('../models/users.model');
const NotFoundError = require('../../Errors/NotFoundError');

const getAllUsers = asyncHandler(async (req, res, next) => {
    const { populate, min ,max } = req.query;

    const users = await User.find({});

    res.status(StatusCodes.OK).send({
        "success": true,
        users
    });
})

const getUser = asyncHandler(async (req, res, next) => {
    const { id } = req.params;

    const user = await User.findById(id);

    res.status(StatusCodes.OK).send({
        "success": true,
        user
    });
});

const deleteUser = asyncHandler(async (req, res, next) => {
    const { id } = req.params;
    const deletedUser = await User.findByIdAndDelete(id);

    if(!deletedUser) throw new NotFoundError("User not Found");

    res.status(StatusCodes.OK).json({
      success: true,
      message: 'User deleted successfully'
    });

});

const modifyUser = asyncHandler(async (req, res, next) => {
    const { id } = req.params;
    const { firstname, lastname, email, password, major } = req.body ;

    if(!await User.findById(id)) throw new NotFoundError("User not found");

    await User.updateOne({_id : id}, { firstname, lastname, email, password, major });

    return res.status(StatusCodes.OK).send({
        "success": true,
        message: 'User updated successfully',
    });
});



module.exports = { getAllUsers, getUser, deleteUser, modifyUser };
    
    