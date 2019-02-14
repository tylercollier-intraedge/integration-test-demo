const { expect } = require('chai')
const todos = require('./todos')
const mongoose = require('mongoose')

describe('todos', () => {
  it('creates a todo with current date', () => {
    return todos.create({ text: 'Learn promises' })
      .then(createdTodo => {
        expect(createdTodo.date).to.exist
      })
      .then(() => mongoose.model('Todo').find().exec())
      .then(records => {
        expect(records).to.have.length(1)
      })
  })
})
