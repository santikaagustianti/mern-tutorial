
// @desc    Get Goals
// @route   GET /api/goals
// @access  Private
const getGoals = (req,res)=>{
    res.status(200).json({message: 'Get Goals'})
}

// @desc    Set Goals
// @route   POST /api/goals
// @access  Private
const setGoal = (req,res)=>{
    res.status(200).json({message: 'Set Goals'})
    }

// @desc    Update Goals
// @route   PUT /api/goals
// @access  Private    
const updateGoal = (req,res)=>{
res.status(200).json({message: 'Update Goal ${req params id}'})
}


// @desc    Delete Goals
// @route   DELETE /api/goals
// @access  Private
const deleteGoal = (req,res)=>{
    res.status(200).json({message: 'Delete Goal ${req params id}'})
}

module.export = {
    getGoals,
    setGoal,
    updateGoal,
    deleteGoal,
}