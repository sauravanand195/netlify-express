const express = require('express')
const router = express.Router()
const todoController = require('../controllers/todo')

router.get('/get-todos', todoController.getTodos)
router.post('/add-todo', todoController.addTodos)
router.put('/update-todo', todoController.updateTodo)
router.delete('/delete-todo', todoController.deleteTodo)

module.exports = router
