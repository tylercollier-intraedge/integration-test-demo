const { expect } = require('chai')
const todos = require('./todos')
const Todo = require('./models/Todo')

describe('todos', () => {
  it('creates a todo with current date', () => {
    return todos.create({ text: 'Test' })
      .then(result => {
        expect(result).to.have.property('date').that.is.a('date');
      })
  })

  it('adds a single record', () => {
    return todos.create({ text: 'Test' })
    .then(() => {
      return Todo.countDocuments().then(count => {
        expect(count).to.equal(1);
      })
    })
  })
})
