const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Todo = new Schema({
  text: String,
  date: Date
})

const TodoModel = mongoose.model('Todo', Todo)

module.exports = TodoModel
