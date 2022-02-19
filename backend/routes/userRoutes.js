// const { Router } = require('express');
const express = require('express');
const router = express.Router()
const {registerUser, loginUser, getMe} = require('../controllers/userController')

const { protect } = require('../middleware/authMiddleware')

// //Get route
router.get('/me', protect, getMe)


// Post route
router.post('/', registerUser)
router.post('/login', loginUser)

// //Update route
// router.put('/:id', updateGoal)

// //delete route
// router.delete('/:id', deleteGoal)

//OR
// router.route('/').get(getGoals).post(setGoal)
// router.route('/:id').delete(deleteGoal).put(updateGoal)

module.exports = router

