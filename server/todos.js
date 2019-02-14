module.exports = {
  create(db, todo) {
    return db.connections[0].collection('todos').insert({
      ...todo,
      date: Date.now(),
    })
  }
}
