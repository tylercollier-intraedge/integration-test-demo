const router = require('express').Router()
const todos = require('./todos')

router.post('/', (req, res) => {
  const todo = req.body
  todos.create(todo).then(newTodo => {
    res.json(newTodo)
  }).catch(error => {
    res.status(500).json({ message: 'An unexpected error occurred on the server' })
  })
})

module.exports = router