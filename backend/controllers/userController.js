// @desc    Register user
// @route   POST /api/goals
// @access  Public
const registerUser = (req, res) => {
    res.json({message: "Register User"})
}


// @desc    Login user
// @route   POST /api/goals
// @access  Public
const loginUser = (req, res) => {
    res.json({message: "Login User"})
}


// @desc    Get User user
// @route   POST /api/goals
// @access  Public
const getMe = (req, res) => {
    res.json({message: "User data display"})
}




module.exports = {
    registerUser,
    loginUser,
    getMe,
}