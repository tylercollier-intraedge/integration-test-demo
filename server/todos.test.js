const { expect } = require('chai')
const todos = require('./todos')
const mongoose = require('mongoose')
require('dotenv').config()

describe('todos', () => {
  before(() => {
    return mongoose.connect(process.env.CONNECTION_STRING, { useNewUrlParser: true })
      .catch(error => {
        console.error('Error connecting to database', error)
      }).then(() => {
        return mongoose.connection.db.collection('todos').drop()
      })
  })
  
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
