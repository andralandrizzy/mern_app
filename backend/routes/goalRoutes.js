const { Router } = require('express');
const express = require('express');
const router = express.Router()
const {getGoals, setGoal, updateGoal, deleteGoal } = require('../controllers/goalController')

//Get route
router.get('/', getGoals)

// Post route
router.post('/', setGoal)

//Update route
router.put('/:id', updateGoal)

//delete route
router.delete('/:id', deleteGoal)

//OR
// router.route('/').get(getGoals).post(setGoal)
// router.route('/:id').delete(deleteGoal).put(updateGoal)

module.exports = router

