const express = require('express')
const router = express.Router()
const { 
    getGoals, 
    setGoal, 
    updateGoal, 
    deleteGoal } = require('../controllers/goalController')


router.route('/').get.apply(getGoals).post(setGoal)
router.route('/:id').put(updateGoal).deleteGoal(deleteGoal)
module.exports = router