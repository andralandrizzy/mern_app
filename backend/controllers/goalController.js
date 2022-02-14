const asyncHandler = require('express-async-handler');


//GET Goal controller
const getGoals = asyncHandler(async(req, res) => {
    res.status(200).json({message: 'Get goals'})
})

//POST goal controller
const setGoal = asyncHandler(async(req, res) => {
    if(!req.body.text){
        res.status(400)
        throw new Error('Please add a text field')
    }
    res.status(200).json({message: 'Set goals'})
})

//UPDATE goal controller
const updateGoal = asyncHandler(async(req, res) => {
    res.status(200).json({message: `Update goals ${req.params.id}`})
})
//DELETE goals controller

const deleteGoal = asyncHandler(async(req, res) => {
    res.status(200).json({message: `Delete goals ${req.params.id}`})
})

module.exports = {
    getGoals,
    setGoal,
    updateGoal,
    deleteGoal,
}