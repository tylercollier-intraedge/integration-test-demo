const Todo = require('./models/Todo')

module.exports = {
  create(todo) {
    const newTodo = new Todo()
    newTodo.text = todo.text
    newTodo.date = Date.now()
    return newTodo.save()
  }
}
