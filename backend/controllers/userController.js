const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const asyncHandler = require('express-async-handler')
const User = require('../models/userModel')



// @desc    Register user
// @route   POST /api/goals
// @access  Public
const registerUser = asyncHandler(async(req, res) => {

    const { name, email, password } = req.body

    if(!name || !email || !password){
        res.status(400)
        throw new Error('Please add all fields')
    }

    // check if user exists
    const userExists = await User.findOne({email})

    if(userExists) {
        res.status(400)
        throw new Error('User already exists')
    }


})


// @desc    Login user
// @route   POST /api/goals
// @access  Public
const loginUser = asyncHandler(async(req, res) => {
    res.json({message: "Login User"})
})


// @desc    Get User user
// @route   POST /api/goals
// @access  Public
const getMe = asyncHandler(async(req, res) => {
    res.json({message: "User data display"})
})




module.exports = {
    registerUser,
    loginUser,
    getMe,
}