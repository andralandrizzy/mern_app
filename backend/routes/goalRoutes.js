const { Router } = require('express');
const express = require('express');
const router = express.Router()
const {getGoals, setGoal, updateGoal, deleteGoal } = require('../controllers/goalController')
const { protect } = require('../middleware/authMiddleware')


//Get route
router.get('/', protect, getGoals)

// Post route
router.post('/', protect, setGoal)

//Update route
router.put('/:id', protect,  updateGoal)

//delete route
router.delete('/:id', protect, deleteGoal)

//OR
// router.route('/').get(getGoals).post(setGoal)
// router.route('/:id').delete(deleteGoal).put(updateGoal)

module.exports = router

