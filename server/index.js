const express = require('express')
const todosController = require('./todosController')
const mongoose = require('mongoose')
require('dotenv').config()

const app = express()
app.use(express.json())
app.use('/todos', todosController)

mongoose.connect(process.env.CONNECTION_STRING, { useNewUrlParser: true })
  .then(db => {
    app.set('db', db)
  })
  .catch(error => {
    console.error('Error connecting to database', error)
  })

const PORT = 4000
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`)
})
